import React from "react";
import { cn } from "@/lib/utils"; // Assuming cn is in lib/utils

export const PrimaryText = React.forwardRef(
  ({ children, className = "", ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "text-3xl md:text-4xl font-extrabold text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
);
PrimaryText.displayName = "PrimaryText";

export const SecondaryText = React.forwardRef(
  ({ children, className = "", ...props }, ref) => (
    <p ref={ref} className={cn("text-xl font-bold", className)} {...props}>
      {children}
    </p>
  )
);
SecondaryText.displayName = "SecondaryText";

export const TertiaryText = React.forwardRef(
  ({ children, className = "", ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "flex items-center text-sm text-muted-foreground pt-1",
        className
      )}
      style={{ color: "#737373" }}
      {...props}
    >
      {children}
    </p>
  )
);
TertiaryText.displayName = "TertiaryText";
