import React from "react";

export function RequirementAnalysisIcon({
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
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <circle cx="12" cy="11" r="2" />
      <path d="M9 16a3 3 0 0 1 6 0" />
    </svg>
  );
}

export default RequirementAnalysisIcon;
