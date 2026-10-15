"use client";

import React from "react";
import Link from "next/link";
import { site, SectionProps, HirenzThankyouData } from "@/data";
import {
  CheckmarkIcon,
  HomeIcon,
  ChevronRightIcon,
} from "@/components/icons";
import {
  FadeUp,
  ScaleIn,
  AnimatedButton,
} from "@/utils/animation";

export interface ThankyouStepItem {
  step: string;
  title: string;
  description: string;
}

export interface ThankyouSectionProps extends SectionProps<HirenzThankyouData> {
  referenceNumber?: string;
}

export default function ThankyouSection({
  data = site.thankyou,
  referenceNumber,
  className = "",
}: ThankyouSectionProps) {
  const fallback = site.thankyou;
  const tagline = data?.tagline || fallback.tagline;
  const titlePart1 = data?.titlePart1 || fallback.titlePart1;
  const highlight = data?.highlight || fallback.highlight;
  const subtitle = data?.subtitle || fallback.subtitle;
  const referencePrefix = data?.referencePrefix || fallback.referencePrefix;
  const backBtn = data?.backButton || fallback.backButton;
  const servicesBtn = data?.servicesButton || fallback.servicesButton;
  const contactBtn = data?.contactButton || fallback.contactButton;

  return (
    <section className={`relative w-full bg-white font-poppins py-10 lg:py-16 overflow-hidden ${className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Success badge animation */}
          <ScaleIn delay={0.05}>
            <div className="relative mb-4 sm:mb-5 flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-[#a84523]/15 animate-ping opacity-60" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#a84523] to-[#c45b37] text-white flex items-center justify-center shadow-lg shadow-[#a84523]/25">
                <CheckmarkIcon className="w-10 h-10 stroke-white stroke-[2.5]" />
              </div>
            </div>
          </ScaleIn>

          {/* Tagline badge */}
          <FadeUp delay={0.15}>
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="w-8 h-[1.5px] bg-[#a84523] rounded-full inline-block" aria-hidden="true" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#a84523] uppercase">
                {tagline}
              </span>
              <span className="w-8 h-[1.5px] bg-[#a84523] rounded-full inline-block" aria-hidden="true" />
            </div>
          </FadeUp>

          {/* Main title */}
          <FadeUp delay={0.25}>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111111] tracking-tight leading-tight">
              <span>{titlePart1} </span>
              <span className="text-[#a84523]">{highlight}</span>
            </h1>
          </FadeUp>

          {/* Subtitle description */}
          <FadeUp delay={0.35}>
            <p className="mt-2.5 text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl font-normal">
              {subtitle}
            </p>
          </FadeUp>

          {/* Reference badge */}
          {referenceNumber && (
            <FadeUp delay={0.4}>
              <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#faebe5] border border-[#a84523]/20 text-xs font-semibold text-[#a84523]">
                <span>{referencePrefix}</span>
                <span className="font-mono">{referenceNumber}</span>
              </div>
            </FadeUp>
          )}

          {/* Action buttons */}
          <FadeUp delay={0.45}>
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
              <AnimatedButton>
                <Link
                  href={backBtn.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#a84523] hover:bg-[#8f391b] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow"
                >
                  <HomeIcon className="w-4 h-4" />
                  <span>{backBtn.label}</span>
                </Link>
              </AnimatedButton>

              <AnimatedButton>
                <Link
                  href={servicesBtn.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#eeeeee] bg-white hover:bg-gray-50 text-[#111111] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:border-[#a84523]/40"
                >
                  <span>{servicesBtn.label}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </AnimatedButton>

              <AnimatedButton>
                <Link
                  href={contactBtn.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#a84523]/30 text-[#a84523] hover:bg-[#faebe5] text-xs sm:text-sm font-semibold transition-all duration-200"
                >
                  <span>{contactBtn.label}</span>
                </Link>
              </AnimatedButton>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
