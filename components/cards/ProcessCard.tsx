"use client";

import React from "react";
import { DynamicIcon } from "@/components/icons";
import { AnimatedIcon } from "@/utils/animation";

export interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconName?: string;
}

export default function ProcessCard({
  step,
  title,
  description,
  icon,
  iconName,
}: ProcessCardProps) {
  return (
    <div className="group bg-[#161616] border border-[#262626] rounded-lg p-4 sm:p-6 flex flex-col justify-start relative transition-all duration-300 hover:border-[#a84523]/50 hover:shadow-[0_12px_32px_rgba(168,69,35,0.12)] hover:-translate-y-1 h-full">
      {/* Icon with double ring */}
      <div className="w-[72px] h-[72px] rounded-full p-[3px] border border-[#a84523]/60 bg-gradient-to-b from-[#2a1a15] to-[#181210] flex items-center justify-center mb-2 shadow-[0_0_16px_rgba(168,69,35,0.2)] transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
        <div className="w-full h-full rounded-full bg-[#1b1411] border border-[#a84523]/30 flex items-center justify-center text-[#a84523]">
          <AnimatedIcon animation="rotateHover">
            {icon ? icon : iconName ? <DynamicIcon name={iconName} className="w-12 h-12" /> : null}
          </AnimatedIcon>
        </div>
      </div>

      {/* Step number badge */}
      <div className="w-10 h-6 rounded-md bg-[#241a15] border border-[#a84523]/40 text-[#a84523] text-[12px] font-bold flex items-center justify-center mb-2 tracking-wider transition-transform duration-300 group-hover:scale-105">
        {step}
      </div>

      {/* Step title */}
      <h3 className="font-poppins font-bold text-[16px] sm:text-[17px] text-white mb-1 leading-snug transition-colors group-hover:text-[#a84523]">
        {title}
      </h3>

      {/* Step description */}
      <p className="font-poppins font-normal text-[13px] sm:text-[13.5px] text-[#9a9a9a] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
