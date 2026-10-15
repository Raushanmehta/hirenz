"use client";

import React from "react";
import DynamicIcon from "@/components/icons";
import { AnimatedIcon } from "@/utils/animation";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode | string;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="group bg-[#FAF8F9] rounded-lg border border-[#ebebeb] p-4 sm:p-6 flex flex-col items-start transition-all duration-300 hover:shadow-[0_12px_32px_rgba(168,69,35,0.08)] hover:border-[#a84523]/30 hover:-translate-y-1 h-full">
      {/* Icon circle badge */}
      <div className="w-[72px] h-[72px] rounded-full bg-[#faebe5] flex items-center justify-center text-[#a84523] mb-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <AnimatedIcon animation="bounce">
          {typeof icon === "string" ? (
            <DynamicIcon name={icon} className="w-12 h-12" />
          ) : (
            icon
          )}
        </AnimatedIcon>
      </div>

      {/* Service title */}
      <h3 className="font-poppins font-bold text-[18px] sm:text-[19px] text-[#1c1c1c] mb-1 transition-colors duration-200 group-hover:text-[#a84523]">
        {title}
      </h3>

      {/* Service description */}
      <p className="font-poppins font-normal text-[14px] sm:text-[14.5px] text-[#666666] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
