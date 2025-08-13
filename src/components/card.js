import React from "react";
import { cn } from "@/lib/utils"; // Assuming cn is in lib/utils

export const Card = React.forwardRef(
  ({ children, width = "", height = "", className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "border-2 border-foreground bg-card text-card-foreground neo-brutal-shadow overflow-hidden mt-4",
        width, // Note: width and height props directly as classes might be restrictive. Consider style prop or more specific Tailwind classes.
        height,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef(
  ({ children, className = "", ...props }, ref) => (
    <div ref={ref} className={cn("p-4 md:p-6 pb-2", className)} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef(
  ({ children, className = "", ...props }, ref) => (
    <div ref={ref} className={cn("p-4 md:p-6 pb-2", className)} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = "CardContent";
