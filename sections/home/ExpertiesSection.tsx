"use client";

import React from "react";
import ExpertiesCard from "@/components/cards/ExpertiesCard";
import { site, SectionProps, HirenzExpertiesData } from "@/data";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/utils/animation";

export default function ExpertiesSection({
  data = site.experties,
  className = "",
}: SectionProps<HirenzExpertiesData>) {
  const {
    badge = "INDUSTRIES WE SERVE",
    headline = "Industry Expertise And",
    highlight = "Specialized",
    description = "We understand the unique hiring needs of different industries and provide tailored solutions to help businesses build high-performing teams.",
    industries = [],
  } = data || {};

  return (
    <section className={`w-full bg-white font-poppins py-8 lg:py-12 ${className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section header animation */}
        <FadeUp delay={0.1}>
          <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6">
            {/* Tagline badge */}
            {badge && (
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
                <span className="h-[1.5px] w-12 sm:w-16 bg-[#a84523] rounded-full" />
                <span className="text-[12px] sm:text-[13px] font-semibold text-[#555555] tracking-[0.2em] uppercase">
                  {badge}
                </span>
                <span className="h-[1.5px] w-12 sm:w-16 bg-[#a84523] rounded-full" />
              </div>
            )}

            {/* Main title */}
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-extrabold text-[#111111] tracking-tight leading-tight">
              {headline}{" "}
              {highlight && <span className="text-[#a84523]">{highlight}</span>}
            </h2>

            {/* Description */}
            {description && (
              <p className="mt-1 text-[#666666] text-[15px] sm:text-[16px] leading-relaxed max-w-[680px] mx-auto">
                {description}
              </p>
            )}
          </div>
        </FadeUp>

        {/* 5 Cards grid animation */}
        <StaggerContainer speed="fast">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4">
            {industries.map((item, index) => (
              <StaggerItem key={index} variant="scale">
                <ExpertiesCard
                  title={item.title}
                  icon={item.icon}
                  imageSrc={item.imageSrc}
                  alt={item.alt}
                />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}