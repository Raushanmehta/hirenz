"use client";

import React from "react";
import Image from "next/image";
import { QuoteIcon, StarIcon } from "@/components/icons";
import { AnimatedIcon } from "@/utils/animation";

export interface TestimonialItem {
  id?: string;
  quote?: string;
  name?: string;
  role?: string;
  company?: string;
  imageSrc?: string;
  rating?: number;
}

export interface TestimonialCardProps {
  testimonial?: TestimonialItem;
  quote?: string;
  name?: string;
  role?: string;
  company?: string;
  imageSrc?: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  quote,
  name,
  role,
  company,
  imageSrc,
  rating,
  className = "",
}: TestimonialCardProps) {
  // Merge prop overrides
  const activeQuote =
    quote ??
    testimonial?.quote ??
    "HirenZ understood our hiring needs perfectly and provided highly qualified candidates. Their team is professional, responsive, and truly committed to client success.";

  const activeName = name ?? testimonial?.name ?? "Rahul Mehta";
  const rawRole = role ?? testimonial?.role ?? "HR Manager";
  const rawCompany = company ?? testimonial?.company;
  const activeImage =
    imageSrc ?? testimonial?.imageSrc ?? "/images/avatar-rahul.webp";
  const activeRating = rating ?? testimonial?.rating ?? 5;

  // Split role and company
  let displayRole = rawRole;
  let displayCompany = rawCompany;
  if (!displayCompany && displayRole && displayRole.includes(",")) {
    const parts = displayRole.split(",");
    displayRole = parts[0].trim();
    displayCompany = parts.slice(1).join(",").trim();
  }
  if (!displayCompany) {
    displayCompany = "TechNova Solutions";
  }

  return (
    <div
      className={`group bg-white rounded-lg border border-[#EDEDED] p-4 sm:p-5 md:p-6 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(222,91,68,0.08)] hover:border-[#DE5B44]/30 hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      <div>
        {/* Quote and rating header */}
        <div className="flex items-center justify-between mb-2 sm:mb-2">
          {/* Quote icon badge */}
          <div className="flex-shrink-0 text-[#F1C1B1]">
            <AnimatedIcon animation="rotateHover">
              <QuoteIcon className="w-8 h-8 sm:w-12 sm:h-12 fill-current" />
            </AnimatedIcon>
          </div>

          {/* 5 star rating */}
          <div className="flex items-center gap-1 sm:gap-1.5" aria-label={`${activeRating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <AnimatedIcon key={i} animation="pulse">
                <StarIcon
                  className={`w-4 h-4 sm:w-[17px] sm:h-[17px] ${i < activeRating ? "text-[#E54E2E] fill-current" : "text-gray-200"
                    }`}
                />
              </AnimatedIcon>
            ))}
          </div>
        </div>

        {/* Testimonial quote text */}
        <p className="text-[#5B6176] text-[15px] sm:text-[15.5px] leading-[1.65] font-normal font-poppins">
          {activeQuote}
        </p>

        {/* Accent divider line */}
        <div
          aria-hidden="true"
          className="w-[68px] sm:w-[74px] h-[2.5px] rounded-full bg-[#E56C4E] mt-2 mb-2"
        />
      </div>

      {/* Author details */}
      <div className="flex items-center gap-3.5 sm:gap-4 mt-auto pt-1">
        {/* Profile picture */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#f4f4f4] border border-[#f0f0f0] transition-transform duration-300 group-hover:scale-105">
          {activeImage ? (
            <Image
              src={activeImage}
              alt={activeName}
              fill
              sizes="(max-width: 640px) 56px, 64px"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#faebe5] text-[#a84523] font-bold text-lg">
              {activeName.charAt(0)}
            </div>
          )}
        </div>

        {/* Author info */}
        <div className="flex flex-col justify-center min-w-0">
          <h4 className="font-bold text-[17px] sm:text-[18px] text-[#1E364E] leading-snug truncate">
            {activeName}
          </h4>
          <span className="font-medium text-[13px] sm:text-[13.5px] text-[#9DA5B3] mt-0.5 leading-tight truncate">
            {displayRole}
          </span>
          <span className="font-semibold text-[13px] sm:text-[13.5px] text-[#DE5B44] mt-0.5 leading-tight truncate">
            {displayCompany}
          </span>
        </div>
      </div>
    </div>
  );
}

// Export naming alias
export { TestimonialCard as TestmonialCard };
