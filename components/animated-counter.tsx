"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  /**
   * The starting number for the animation
   * @default 0
   */
  from?: number;

  /**
   * The target number to count up to
   */
  to: number;

  /**
   * Animation duration in milliseconds
   * @default 2000
   */
  duration?: number;

  /**
   * Easing function for the animation
   * @default 'easeInOutQuad'
   */
  easing?:
    | "linear"
    | "easeInOutQuad"
    | "easeOutQuad"
    | "easeInQuad"
    | "easeInOutCubic";

  /**
   * Whether to animate on mount or wait for viewport intersection
   * @default true
   */
  animateOnViewport?: boolean;

  /**
   * Number of decimal places to display
   * @default 0
   */
  decimals?: number;

  /**
   * Prefix text (e.g., "$")
   */
  prefix?: string;

  /**
   * Suffix text (e.g., "+")
   */
  suffix?: string;

  /**
   * Separator for thousands (e.g., ",")
   */
  separator?: string;

  /**
   * CSS class name
   */
  className?: string;

  /**
   * Callback when animation completes
   */
  onComplete?: () => void;

  /**
   * Aria label for accessibility
   */
  ariaLabel?: string;
}

// Easing functions
const easingFunctions = {
  linear: (t: number) => t,
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeOutQuad: (t: number) => t * (2 - t),
  easeInQuad: (t: number) => t * t,
  easeInOutCubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * (t - 2)) * (2 * (t - 2)) + 1,
};

/**
 * Format number with optional separator and decimal places
 */
function formatNumber(
  num: number,
  decimals: number = 0,
  separator?: string,
): string {
  const fixed = num.toFixed(decimals);
  if (!separator) return fixed;

  const parts = fixed.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return parts.join(".");
}

/**
 * AnimatedCounter Component
 *
 * A performant, accessible number counter that animates from one value to another.
 * Supports viewport detection, customizable easing, and various formatting options.
 *
 * @example
 * ```tsx
 * <AnimatedCounter to={1000} duration={2000} suffix="+ sales" />
 * ```
 */
export function AnimatedCounter({
  from = 0,
  to,
  duration = 2000,
  easing = "easeInOutQuad",
  animateOnViewport = true,
  decimals = 0,
  prefix,
  suffix,
  separator,
  className,
  onComplete,
  ariaLabel,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(!animateOnViewport);
  const elementRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number | null>(null);

  // Handle viewport intersection
  useEffect(() => {
    if (!animateOnViewport) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [animateOnViewport, hasAnimated]);

  // Animate the counter
  useEffect(() => {
    if (!hasAnimated) return;

    const easingFunction = easingFunctions[easing];
    let frameId: number | null = null;

    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Apply easing function
      const easedProgress = easingFunction(progress);

      // Calculate current value
      const currentValue = from + (to - from) * easedProgress;
      setDisplayValue(currentValue);

      // Continue animation or complete
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(to);
        startTimeRef.current = null;
        onComplete?.();
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [hasAnimated, from, to, duration, easing, onComplete]);

  const formattedValue = formatNumber(displayValue, decimals, separator);
  const displayText = `${prefix || ""}${formattedValue}${suffix || ""}`;

  return (
    <div
      role="status"
      ref={elementRef}
      className={className}
      aria-label={ariaLabel || `Counter displaying ${to}`}
      aria-live="polite"
      aria-atomic="true"
    >
      {displayText}
    </div>
  );
}
