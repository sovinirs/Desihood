import React from "react";
import { cn } from "@/lib/utils"; // Assuming cn is in lib/utils

export const Button = React.forwardRef(
  ({ children, variant = "default", className = "", ...props }, ref) => {
    const variantClasses = {
      primary: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]",
      secondary:
        "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]",
      default: "bg-[hsl(var(--background))] text-[hsl(var(--foreground))]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          "neo-brutal-border neo-brutal-shadow neo-brutal-shadow-hover", // Base neo-brutalism styles
          "border-foreground", // Ensures border color from theme
          "hover:bg-accent hover:text-accent-foreground", // Common hover for default
          "h-9 px-3", // Sizing and width
          variantClasses[variant] || variantClasses.default,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
