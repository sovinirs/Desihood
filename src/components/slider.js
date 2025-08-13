"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(
  (
    {
      id,
      className,
      max = 100,
      step = 1,
      defaultValue,
      value, // Controlled value
      onValueChange,
      thumbClassName = "",
      rangeClassName = "",
      trackClassName = "",
      ...props
    },
    ref
  ) => {
    // Radix Slider expects value to be an array, even for a single thumb.
    // If defaultValue is provided, convert it to an array.
    // If value (for controlled component) is provided, use it as is (assuming it's an array).
    const initialValue =
      value !== undefined
        ? value
        : defaultValue !== undefined
        ? [defaultValue]
        : [0];

    return (
      <SliderPrimitive.Root
        ref={ref}
        id={id}
        max={max}
        step={step}
        value={initialValue} // Use derived initialValue for uncontrolled or value for controlled
        onValueChange={
          onValueChange ? (newValue) => onValueChange(newValue) : undefined
        }
        className={cn(
          "relative flex w-full touch-none select-none items-center group", // Added group for thumb hover/focus effects
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(
            "relative h-2 w-full grow overflow-hidden rounded-full",
            "bg-[hsl(var(--muted))] neo-brutal-border border-2 border-foreground", // Neo-brutal track
            trackClassName
          )}
        >
          <SliderPrimitive.Range
            className={cn(
              "absolute h-full bg-[hsl(var(--primary))]", // Neo-brutal range (filled part)
              rangeClassName
            )}
          />
        </SliderPrimitive.Track>
        {/* Render a thumb for each value in the array. For single slider, it's one thumb */}
        {initialValue.map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className={cn(
              "block h-5 w-5 rounded-full border-2 border-foreground bg-background ring-offset-background",
              "transition-all duration-150 ease-out", // Added for smooth transition
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:pointer-events-none disabled:opacity-50",
              "neo-brutal-shadow", // Base shadow
              // Apply hover/focus effects from neo-brutal-shadow-hover directly
              "group-hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground-hsl))] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]",
              "group-focus-within:shadow-[6px_6px_0px_0px_hsl(var(--foreground-hsl))] group-focus-within:translate-x-[-2px] group-focus-within:translate-y-[-2px]",
              thumbClassName
            )}
          />
        ))}
      </SliderPrimitive.Root>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
