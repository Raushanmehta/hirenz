import React from "react";

export function ManufacturingIcon({
  className = "w-7 h-7",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 20h20" />
      <path d="M5 20V8l5 4V8l5 4V4h4v16" />
      <line x1="16" y1="8" x2="16.01" y2="8" />
      <line x1="16" y1="12" x2="16.01" y2="12" />
    </svg>
  );
}

export default ManufacturingIcon;
