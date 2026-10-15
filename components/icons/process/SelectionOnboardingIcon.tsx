import React from "react";

export function SelectionOnboardingIcon({
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
      <path d="M20 11l-3.5-3.5a2 2 0 0 0-2.8 0L11 10.2l-2-2a2 2 0 0 0-2.8 0L3 11.4a2 2 0 0 0 0 2.8l3.8 3.8a2 2 0 0 0 2.8 0l1.4-1.4" />
      <path d="M13 14l2 2a2 2 0 0 0 2.8 0L21 12.8a2 2 0 0 0 0-2.8" />
      <path d="M11 10.2l2.3 2.3" />
    </svg>
  );
}

export default SelectionOnboardingIcon;
