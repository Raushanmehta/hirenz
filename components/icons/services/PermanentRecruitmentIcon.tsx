import React from "react";

export function PermanentRecruitmentIcon({
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
      <circle cx="9" cy="7" r="3" />
      <path d="M3 19v-1a5 5 0 0 1 10 0v1" />
      <circle cx="17" cy="11" r="2.5" />
      <path d="M14 19v-1a4 4 0 0 1 6-3.4" />
    </svg>
  );
}

export default PermanentRecruitmentIcon;
