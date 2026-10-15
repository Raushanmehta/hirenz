import React from "react";

export function CorporateClientsIcon({
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 4h16v6a6 6 0 0 1-12 0V4z" />
      <line x1="12" y1="16" x2="12" y2="20" />
      <path d="M8 20h8" />
    </svg>
  );
}

export default CorporateClientsIcon;
