import React from "react";

export function SourcingScreeningIcon({
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
      <circle cx="10" cy="10" r="7" />
      <line x1="21" y1="21" x2="15" y2="15" />
      <circle cx="10" cy="8.5" r="2" />
      <path d="M7 13.5a3 3 0 0 1 6 0" />
    </svg>
  );
}

export default SourcingScreeningIcon;
