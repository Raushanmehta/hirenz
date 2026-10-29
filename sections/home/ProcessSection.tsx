"use client";

import React from "react";
import { ArrowRightIcon } from "@/components/icons";
import ProcessCard from "@/components/cards/ProcessCard";
import { site, SectionProps, HirenzProcessData } from "@/data";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  AnimatedIcon,
} from "@/utils/animation";

export default function ProcessSection({
  data = site.process,
  className = "",
}: SectionProps<HirenzProcessData>) {
  const {
    badge = "OUR METHODOLOGY",
    titlePart1 = "Simple Steps to",
    highlight = "Build Your Dream Team",
    headline = "Simple Steps to Build Your Dream Team",
    description = "Our structured hiring lifecycle guarantees transparency, velocity, and top-tier talent precision.",
    steps = [],
  } = data || {};

  return (
    <section className={`w-full bg-[#111111] font-poppins py-8 lg:py-12 text-white overflow-x-clip ${className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section header animation */}
        <FadeUp delay={0.1}>
          <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6">
            {/* Tagline badge */}
            {badge && (
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
                <span className="h-[1.5px] w-12 sm:w-16 bg-[#a84523] rounded-full" />
                <span className="text-[12px] sm:text-[13px] font-semibold text-[#a0a0a0] tracking-[0.2em] uppercase">
                  {badge}
                </span>
                <span className="h-[1.5px] w-12 sm:w-16 bg-[#a84523] rounded-full" />
              </div>
            )}

            {/* Main title */}
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-extrabold text-white tracking-tight leading-tight">
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
              <p className="mt-1 text-[#9a9a9a] text-[15px] sm:text-[16px] leading-relaxed max-w-[680px] mx-auto font-normal">
                {description}
              </p>
            )}
          </div>
        </FadeUp>

        {/* Process cards grid animation */}
        <StaggerContainer speed="normal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 relative">
            {steps.map((item, index) => (
              <StaggerItem key={item.step || index} variant="up">
                <div className="relative flex flex-col h-full">
                  <ProcessCard
                    step={item.step}
                    title={item.title}
                    description={item.description}
                    iconName={item.icon}
                  />

                  {/* Connecting arrow indicator */}
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex absolute top-[144px] -right-[13px] xl:-right-[26px] z-20 text-[#a84523] items-center justify-center pointer-events-none drop-shadow-md"
                    >
                      <AnimatedIcon animation="pulse">
                        <ArrowRightIcon className="w-5 h-5 text-[#a84523]" />
                      </AnimatedIcon>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}