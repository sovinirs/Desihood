import React from "react";
import { cn } from "@/lib/utils"; // Assuming cn is in lib/utils

export const TextInput = React.forwardRef(
  (
    {
      id = "",
      label = "",
      placeholder = "",
      className = "",
      inputClassName = "",
      type = "text",
      value = "",
      onChange = () => {},
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(className, "mb-4")}>
        {" "}
        {/* Added mb-4 for default spacing, can be overridden by className */}
        {label && (
          <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          id={id}
          placeholder={placeholder}
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          className={cn(
            "flex h-10 w-full border-2 border-foreground bg-background px-3 py-2 text-base ring-offset-background",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "md:text-sm",
            "neo-brutal-border neo-brutal-shadow transition-all duration-150 ease-out",
            // Removed mt-1 as label now has mb-1, adjust as needed
            inputClassName
          )}
          {...props}
        />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

// Added React.forwardRef, forwarding ref to the input element.
// Used cn utility for classnames on the input and the wrapper div.
// Added inputClassName prop for more specific styling of the input itself if needed.
// Added className prop for the wrapper div.
// Made label conditional and added block with mb-1 for better layout.
