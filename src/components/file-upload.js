"use client";

import * as React from "react";
import { UploadCloud, X, File as FileIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";

// Removed TypeScript specific types for JS compatibility
// interface FileUploadProps {
//   onFileSelect: (file: File | null) => void;
//   className?: string;
//   inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
//   buttonText?: string;
//   acceptedFileTypes?: string; // e.g., "image/*,.pdf"
// }

const FileUpload = React.forwardRef(
  (
    {
      onFileSelect,
      className,
      inputProps = {},
      buttonText = "Choose File",
      acceptedFileTypes = "*/*",
      label,
      id,
      ...props
    },
    ref
  ) => {
    const [selectedFile, setSelectedFile] = React.useState(null); // Removed <File | null>
    const fileInputRef = React.useRef(null); // Removed <HTMLInputElement>

    const handleFileChange = (event) => {
      // Removed type: React.ChangeEvent<HTMLInputElement>
      const file = event.target.files?.[0] || null;
      setSelectedFile(file);
      if (onFileSelect) {
        onFileSelect(file);
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    const handleButtonClick = () => {
      fileInputRef.current?.click();
    };

    const handleClearFile = (e) => {
      // Removed type: React.MouseEvent
      e.stopPropagation();
      setSelectedFile(null);
      if (onFileSelect) {
        onFileSelect(null);
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label && (
          <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold block mb-2"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept={acceptedFileTypes}
          {...inputProps}
        />
        <Button
          type="button"
          onClick={handleButtonClick}
          variant="outline" // Using the Button's own default/variant system
          className="w-full neo-brutal-border neo-brutal-shadow neo-brutal-shadow-hover border-foreground"
        >
          <UploadCloud className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>

        {selectedFile && (
          <div
            className={cn(
              "flex items-center justify-between p-2 text-sm rounded-sm",
              "border-2 border-foreground bg-background text-foreground neo-brutal-shadow"
            )}
          >
            <div className="flex items-center gap-2 min-w-0">
              {" "}
              {/* Added min-w-0 for truncation parent flex item */}
              <FileIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="truncate" title={selectedFile.name}>
                {selectedFile.name}
              </span>
            </div>
            <button
              type="button"
              onClick={handleClearFile}
              className="p-1 rounded-full hover:bg-destructive/20 focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2 flex-shrink-0"
              aria-label="Clear file"
            >
              <X className="h-4 w-4 text-destructive hover:text-destructive-foreground" />
            </button>
          </div>
        )}
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";
export { FileUpload };
