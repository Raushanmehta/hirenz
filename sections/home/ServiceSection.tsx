"use client";

import React from "react";
import Link from "next/link";
import ServiceCard from "@/components/cards/ServiceCard";
import { site, SectionProps, HirenzServiceData } from "@/data";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/utils/animation";

export default function ServiceSection({
  data = site.service,
  className = "",
}: SectionProps<HirenzServiceData>) {
  const {
    badge = "END TO END HR SOLUTIONS",
    titlePart1 = "Comprehensive",
    highlight = "Recruitment Solutions",
    headline = "Comprehensive Recruitment Solutions",
    description = "We provide tailored HR and recruitment solutions to help businesses find, hire and retain the right talent to achieve their goals.",
    servicesList = [],
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
              {titlePart1 && highlight ? (
                <>
                  {titlePart1} <span className="text-[#a84523]">{highlight}</span>
                </>
              ) : (
                headline
              )}
            </h2>

            {/* Description */}
            {description && (
              <p className="mt-1 text-[#666666] text-[15px] sm:text-[16px] leading-relaxed max-w-[680px] mx-auto">
                {description}
              </p>
            )}
          </div>
        </FadeUp>

        {/* 8 Cards grid animation */}
        <StaggerContainer speed="fast">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
            {servicesList.map((service, index) => (
              <StaggerItem key={service.id || index} variant="up">
                <Link
                  href={service.href || `/services/${service.id}`}
                  className="block h-full"
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}