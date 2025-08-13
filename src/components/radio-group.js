"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef(({ className, label, ...props }, ref) => {
  const groupId = props.id || React.useId();
  return (
    <div>
      {label && (
        <label
          htmlFor={groupId}
          className="text-sm leading-none font-semibold block mb-2"
        >
          {label}
        </label>
      )}
      <RadioGroupPrimitive.Root
        id={groupId}
        className={cn("flex flex-row gap-2", className)}
        {...props}
        ref={ref}
      />
    </div>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(
  ({ className, children, value, ...props }, ref) => {
    const itemId = props.id || (value ? `radio-item-${value}` : React.useId());

    return (
      <div className="flex items-start gap-x-2">
        <RadioGroupPrimitive.Item
          ref={ref}
          id={itemId}
          value={value}
          className={cn(
            "aspect-square h-5 w-5 rounded-full border-2 border-foreground bg-background text-primary",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "neo-brutal-shadow transition-all duration-150 ease-out",
            "hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground-hsl))] hover:translate-x-[-2px] hover:translate-y-[-2px]",
            "focus:shadow-[6px_6px_0px_0px_hsl(var(--foreground-hsl))] focus:translate-x-[-2px] focus:translate-y-[-2px]",
            className
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <div className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--primary))]" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {children && itemId && (
          <label
            htmlFor={itemId}
            className="text-sm font-medium text-foreground cursor-pointer"
          >
            {children}
          </label>
        )}
      </div>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
