import React from "react";

export function HealthcareIcon({
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
      <path d="M12 6v6m-3-3h6" />
      <path d="M19 14c-1.5 3-4 5-7 5s-5.5-2-7-5" />
      <path d="M4 14l2-3 3 2" />
      <path d="M20 14l-2-3-3 2" />
    </svg>
  );
}

export default HealthcareIcon;
