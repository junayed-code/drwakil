import Link from "next/link";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";

export function NavLink({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <li>
      <Link
        className={cn(
          buttonVariants({ size: "sm", variant: "ghost" }),
          "px-2 py-1 h-auto text-inherit",
          className,
        )}
        {...props}
      />
    </li>
  );
}
