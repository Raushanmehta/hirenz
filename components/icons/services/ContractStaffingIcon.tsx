import React from "react";

export function ContractStaffingIcon({
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
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="10" cy="9" r="2" />
      <path d="M8 13.5a2.5 2.5 0 0 1 4 0" />
      <line x1="14" y1="8" x2="16.5" y2="8" />
      <line x1="14" y1="11" x2="16.5" y2="11" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  );
}

export default ContractStaffingIcon;
