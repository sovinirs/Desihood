"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";
import { Button } from "@/components/button"; // Adjusted path

// Removed TypeScript specific types for JS compatibility
// export type OptionType = {
//   label: string;
//   value: string;
// };

// interface MultiSelectProps {
//   options: OptionType[];
//   selected: string[];
//   onChange: React.Dispatch<React.SetStateAction<string[]>>;
//   className?: string;
//   popoverClassName?: string;
//   placeholder?: string;
// }

const MultiSelect = React.forwardRef(
  (
    {
      options = [],
      selected = [],
      onChange,
      className,
      popoverClassName,
      placeholder = "Select options...",
      label,
      id,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleUnselect = (item) => {
      // Removed type: string
      onChange(selected.filter((i) => i !== item));
    };

    const selectedOptions = selected
      .map((value) => options.find((option) => option.value === value))
      .filter((option) => option !== undefined); // Simplified filter for JS

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        {label && (
          <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <PopoverPrimitive.Trigger asChild>
          <Button
            ref={ref}
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between h-auto min-h-10",
              "border-2 border-foreground bg-background text-foreground",
              "hover:bg-accent hover:text-accent-foreground",
              "neo-brutal-shadow neo-brutal-shadow-hover",
              className
            )}
            onClick={() => setOpen(!open)}
            {...props}
          >
            <div className="flex gap-1 flex-wrap items-center">
              {selectedOptions.length > 0 ? (
                selectedOptions.map((option) => (
                  <div
                    key={option.value}
                    className={cn(
                      "flex items-center justify-center px-2 py-1 mr-1 mb-1 text-sm rounded-sm",
                      "border border-foreground bg-secondary text-secondary-foreground neo-brutal-border"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUnselect(option.value);
                    }}
                  >
                    {option.label}
                    <span
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          e.stopPropagation();
                          handleUnselect(option.value);
                        }
                      }}
                      className="ml-1.5 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 p-0.5 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnselect(option.value);
                      }}
                      aria-label={`Remove ${option.label}`}
                    >
                      <X className="h-3 w-3 hover:text-destructive-foreground" />
                    </span>
                  </div>
                ))
              ) : (
                <span className="text-muted-foreground text-sm">
                  {placeholder}
                </span>
              )}
            </div>
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50 ml-2" />
          </Button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content
          className={cn(
            "w-[var(--radix-popover-trigger-width)] p-0 z-50",
            "border-2 border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--popover-foreground))] neo-brutal-shadow",
            popoverClassName
          )}
          sideOffset={5}
        >
          <div className="p-2">
            <input
              type="text"
              placeholder="Search..."
              className={cn(
                "flex h-10 w-full border-2 border-foreground bg-background px-3 py-2 text-sm ring-offset-background",
                "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "neo-brutal-border"
              )}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="max-h-60 overflow-auto p-1">
            {filteredOptions.length === 0 && searchTerm && (
              <p className="p-2 text-sm text-center text-muted-foreground">
                No item found.
              </p>
            )}
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  onChange(
                    selected.includes(option.value)
                      ? selected.filter((item) => item !== option.value)
                      : [...selected, option.value]
                  );
                }}
                className={cn(
                  "relative flex w-full cursor-pointer select-none items-center rounded-sm p-2 text-sm outline-none",
                  "hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] focus:bg-[hsl(var(--accent))] focus:text-[hsl(var(--accent-foreground))]"
                )}
                role="option"
                aria-selected={selected.includes(option.value)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selected.includes(option.value)
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {option.label}
              </div>
            ))}
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    );
  }
);

MultiSelect.displayName = "MultiSelect";
export { MultiSelect };
