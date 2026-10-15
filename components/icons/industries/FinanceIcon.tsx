import React from "react";

export function FinanceIcon({
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
      <ellipse cx="9" cy="6" rx="6" ry="2.5" />
      <path d="M3 6v4c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5V6" />
      <path d="M3 10v4c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-4" />
      <ellipse cx="16" cy="14" rx="5" ry="2" />
      <path d="M11 14v4c0 1.1 2.24 2 5 2s5-.9 5-2v-4" />
    </svg>
  );
}

export default FinanceIcon;
