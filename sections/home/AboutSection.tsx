"use client";

import React from "react";
import Image from "next/image";
import { site, SectionProps, HirenzAboutData } from "@/data";
import { DynamicIcon } from "@/components/icons";
import {
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
  AnimatedIcon,
} from "@/utils/animation";

export default function AboutSection({
  data = site.about,
  className = "",
}: SectionProps<HirenzAboutData>) {
  const {
    badge = "ABOUT HIRENZ",
    titlePart1 = "Discover Our Story,",
    titlePart2 = "Core Values, And The",
    highlight = "Dedicated Team",
    description = "Hirenz is a forward-thinking HR consultancy committed to bridging the gap between exceptional talent and ambitious organizations. Our focus is on building meaningful careers and stronger businesses.",
    image = {
      src: "/images/about-banner.png",
      alt: "Hirenz team collaborating on talent solutions",
    },
    stats = [
      {
        value: "15+",
        label: "Years of Experience",
        icon: "experience",
      },
      {
        value: "10k+",
        label: "Successful Placements",
        icon: "placements",
      },
      {
        value: "500+",
        label: "Corporate Clients",
        icon: "corporateClients",
      },
    ],
  } = data || {};

  const imageSrc =
    typeof image === "string"
      ? image
      : (image as { src?: string })?.src || "/images/about-banner.png";
  const imageAlt =
    typeof image === "object" && image && "alt" in image
      ? (image as { alt?: string }).alt || "Hirenz team collaborating on talent solutions"
      : "Hirenz team collaborating on talent solutions";

  return (
    <section className={`w-full bg-white font-poppins py-8 lg:py-12 ${className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 xl:gap-4 items-center">
          {/* Heading and about story */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeLeft delay={0.1}>
              {/* Tagline badge */}
              {badge && (
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-[1.5px] w-12 bg-[#a84523] rounded-full" />
                  <span className="text-[12px] sm:text-[13px] font-semibold text-[#555555] tracking-[0.2em] uppercase">
                    {badge}
                  </span>
                </div>
              )}

              {/* Main headline */}
              <h2 className="text-[34px] sm:text-[42px] md:text-[46px] xl:text-[48px] font-extrabold text-[#111111] leading-[1.15] tracking-tight">
                {titlePart1} <br />
                {titlePart2} <br />
                <span className="text-[#a84523]">{highlight}</span>
              </h2>

              {/* Paragraph description */}
              <p className="mt-2 sm:mt-3 text-[#555555] text-[15px] sm:text-[16px] leading-relaxed max-w-[460px]">
                {description}
              </p>
            </FadeLeft>
          </div>

          {/* Key statistics metrics */}
          <div className="lg:col-span-3 relative flex flex-col justify-center space-y-4 sm:space-y-5 lg:pl-6 xl:pl-8">
            {/* Vertical desktop divider */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-52 w-[1px] bg-gray-200">
              <span className="absolute top-1/2 -translate-y-1/2 left-[-0.5px] w-[2px] h-14 bg-[#a84523] rounded-full" />
            </div>

            {/* Dynamic statistics list */}
            <StaggerContainer speed="normal">
              <div className="space-y-4 sm:space-y-5">
                {stats?.map((stat, idx) => (
                  <StaggerItem key={idx} variant="up">
                    <div className="flex items-center gap-4">
                      <div className="w-[72px] h-[72px] rounded-full bg-[#faebe5] flex items-center justify-center text-[#a84523] flex-shrink-0 shadow-sm">
                        <AnimatedIcon animation="bounce">
                          <DynamicIcon
                            name={stat.icon || (idx === 0 ? "experience" : idx === 1 ? "placements" : "corporateClients")}
                            className="w-12 h-12"
                          />
                        </AnimatedIcon>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[30px] sm:text-[34px] font-extrabold text-[#a84523] leading-none tracking-tight">
                          {stat.value}
                        </span>
                        <span className="text-[13px] sm:text-[14px] font-medium text-[#555555] mt-1">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

          {/* Team collaboration image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
            <FadeRight delay={0.25} className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] h-[380px] sm:h-[420px] lg:h-[400px] xl:h-[400px] rounded lg:rounded-l-[60px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
}