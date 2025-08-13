import React from "react";
import { cn } from "@/lib/utils";

export const TextArea = React.forwardRef(
  (
    {
      id = "",
      label = "",
      placeholder = "",
      className = "", // For the wrapper div
      textareaClassName = "", // For the textarea element itself
      rows = 4, // Default number of rows
      ...props
    },
    ref
  ) => {
    const uniqueId = id || React.useId(); // Ensure there's always an ID for the label

    return (
      <div className={cn("mb-4", className)}>
        {label && (
          <label
            htmlFor={uniqueId}
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          id={uniqueId}
          ref={ref}
          rows={rows}
          placeholder={placeholder}
          className={cn(
            "flex w-full border-2 border-foreground bg-background px-3 py-2 text-base ring-offset-background",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "md:text-sm", // Consistent with TextInput
            "neo-brutal-border neo-brutal-shadow transition-all duration-150 ease-out", // Neo-brutalism style
            textareaClassName
          )}
          {...props}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
