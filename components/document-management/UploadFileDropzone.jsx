"use client";

import * as React from "react";
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function UploadFileDropzone({ file, onFileChange }) {
  const inputRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleFiles = (files) => {
    if (files?.[0]) onFileChange(files[0]);
  };

  return (
    <div>
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files); }}
        className={`flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed px-6 py-10 text-center transition-colors ${
          isDragging ? "border-interactive-500 bg-interactive-50" : "border-border bg-surface-canvas"
        }`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
          <UploadCloud className="h-6 w-6" />
        </span>
        {file ? (
          <p className="text-sm font-medium text-ink">{file.name}</p>
        ) : (
          <>
            <p className="text-sm font-semibold text-interactive-600">Drag and drop file here</p>
            <p className="text-xs text-ink-subtle">or</p>
          </>
        )}
        <Button type="button" variant="secondary" onClick={() => inputRef.current?.click()}>
          {file ? "Choose Another File" : "Choose File"}
        </Button>
        <input
          ref={inputRef} type="file" className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
      <p className="mt-2 text-xs text-ink-subtle">Maximum file size: 50 MB. Allowed types: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, JPG, PNG.</p>
    </div>
  );
}
