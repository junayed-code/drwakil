'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeInScale' | 'staggerChildren';
  delay?: number;
  duration?: number;
  staggerChildren?: number;
}

const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function AnimatedSection({
  children,
  className = '',
  animationType = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  staggerChildren = 0.15,
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, once: true });

  const variants = animationVariants[animationType];
  const isStagger = animationType === 'staggerChildren';

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={isStagger ? variants : variants}
      transition={{
        delay,
        duration: isStagger ? 0 : duration,
        ease: 'easeOut',
      }}
    >
      {isStagger ? (
        <motion.div variants={{ visible: { transition: { staggerChildren } } }}>
          {React.Children.map(children, (child) => (
            <motion.div key={Math.random()} variants={childVariants}>
              {child}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}
