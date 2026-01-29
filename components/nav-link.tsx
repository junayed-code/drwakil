import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";

const navLinkVariants = cva(
  "flex items-center gap-1 whitespace-nowrap rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        mobile: "px-3 py-2",
        desktop: "px-2 py-1 justify-center",
      },
    },
    defaultVariants: {
      variant: "desktop",
    },
  },
);

export function NavLink({
  variant,
  className,
  ...props
}: React.ComponentProps<typeof Link> & VariantProps<typeof navLinkVariants>) {
  return (
    <li>
      <Link
        className={cn(navLinkVariants({ variant, className }))}
        {...props}
      />
    </li>
  );
}
