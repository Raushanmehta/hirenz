import React from "react";

export function ExecutiveSearchIcon({
  className = "w-12 h-12",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="6" r="3" />
      <path d="M12 9v4" />
      <path d="M7 13a5 5 0 0 1 10 0" />
      <circle cx="16.5" cy="16.5" r="3.5" />
      <line x1="19" y1="19" x2="22" y2="22" />
    </svg>
  );
}

export default ExecutiveSearchIcon;
