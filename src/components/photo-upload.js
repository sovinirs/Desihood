"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "./button";

export function PhotoUpload({ onPhotosChange }) {
  const [photos, setPhotos] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const newPhotos = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setPhotos((prev) => [...prev, ...newPhotos]);
      onPhotosChange && onPhotosChange([...photos, ...newPhotos]);
    },
    [photos, onPhotosChange]
  );

  const removePhoto = (index) => {
    setPhotos((prev) => {
      const newPhotos = prev.filter((_, i) => i !== index);
      onPhotosChange && onPhotosChange(newPhotos);
      return newPhotos;
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxSize: 5242880, // 5MB
  });

  return (
    <div className="w-full space-y-4">
      <div
        {...getRootProps()}
        className={`
          neo-brutal-border neo-brutal-shadow neo-brutal-shadow-hover bg-white
          p-8 text-center cursor-pointer 
          transition-all duration-200
          ${
            isDragActive
              ? "transform -translate-y-1 shadow-xl bg-gray-50"
              : "hover:shadow-md"
          }
        `}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="py-8">
            <p className="text-gray-800 font-bold text-lg">Drop them here!</p>
          </div>
        ) : (
          <div className="py-8">
            <p className="text-gray-800 font-bold text-lg mb-2">
              Drag and drop photos here
            </p>
            <p className="text-gray-600">or click to select files</p>
            <p className="text-sm text-gray-500 mt-4 border-t-2 border-gray-200 pt-4">
              Supported formats: JPG, PNG, WebP (Max size: 5MB)
            </p>
          </div>
        )}
      </div>

      {photos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div key={photo.preview} className="relative group">
              <div className="aspect-square relative neo-brutal-border neo-brutal-shadow">
                <Image
                  src={photo.preview}
                  alt={`Uploaded photo ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <Button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700 text-white p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
