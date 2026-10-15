import React from "react";

export function HrConsultingIcon({
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
      <path d="M8 3.5a10.5 10.5 0 0 0-4.5 4.5" />
      <path d="M16 3.5a10.5 10.5 0 0 1 4.5 4.5" />
    </svg>
  );
}

export default HrConsultingIcon;
