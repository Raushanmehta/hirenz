import React from "react";

export function InterviewEvaluationIcon({
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
      <circle cx="12" cy="8" r="2.5" />
      <path d="M8 18v-1a4 4 0 0 1 8 0v1" />
      <circle cx="6" cy="11" r="2" />
      <path d="M2 18v-1a3.5 3.5 0 0 1 5-2.8" />
      <circle cx="18" cy="11" r="2" />
      <path d="M17 14.2a3.5 3.5 0 0 1 5 2.8v1" />
    </svg>
  );
}

export default InterviewEvaluationIcon;
