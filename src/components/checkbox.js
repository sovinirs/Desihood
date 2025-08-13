"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, label, ...props }, ref) => (
  <div className="flex items-center space-x-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-5 w-5 shrink-0 border-2 border-foreground bg-background ring-offset-background", // Base styles, peer for label styling
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-[hsl(var(--primary))] data-[state=checked]:text-[hsl(var(--primary-foreground))]", // Checked state styles
        "neo-brutal-shadow transition-all duration-150 ease-out",
        "hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground-hsl))] hover:translate-x-[-2px] hover:translate-y-[-2px]",
        "focus:shadow-[6px_6px_0px_0px_hsl(var(--foreground-hsl))] focus:translate-x-[-2px] focus:translate-y-[-2px]",
        // Note: Your --radius: 0rem in globals.css will make this square.
        // If you need it to be rounded, add rounded-md or similar here.
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {label && (
      <label
        htmlFor={props.id}
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-1"
      >
        {label}
      </label>
    )}
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
