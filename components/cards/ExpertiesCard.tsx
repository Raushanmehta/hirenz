"use client";

import Image from "next/image";
import React from "react";
import { DynamicIcon } from "@/components/icons";
import { AnimatedIcon } from "@/utils/animation";

export interface ExpertiesCardProps {
  title: string;
  icon?: React.ReactNode | string;
  imageSrc: string;
  alt?: string;
}

export default function ExpertiesCard({
  title,
  icon,
  imageSrc,
  alt = title,
}: ExpertiesCardProps) {
  const renderedIcon =
    typeof icon === "string" ? (
      <DynamicIcon name={icon} className="w-7 h-7" />
    ) : (
      icon
    );

  return (
    <div className="group relative rounded-lg overflow-hidden aspect-[181/166] w-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(168,69,35,0.14)] transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      {/* Background card image */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 240px"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />

      {/* Card bottom info */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center gap-2 sm:gap-2.5 z-10">
        {/* Animated icon badge */}
        {renderedIcon && (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#a84523] flex items-center justify-center text-white flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
            <AnimatedIcon animation="rotateHover">
              {renderedIcon}
            </AnimatedIcon>
          </div>
        )}

        {/* Vertical accent line */}
        <span className="h-5 sm:h-6 w-[1.5px] bg-[#a84523] rounded-full flex-shrink-0" />

        {/* Industry title */}
        <h3 className="font-poppins font-bold text-white text-[13px] sm:text-[14px] md:text-[15px] leading-tight drop-shadow-sm transition-colors duration-200 group-hover:text-[#faebe5]">
          {title}
        </h3>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-[#a84523]/40 transition-colors duration-300 pointer-events-none" />
    </div>
  );
}
