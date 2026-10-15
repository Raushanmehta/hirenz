"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { site, SectionProps, HirenzHeroData } from "@/data";
import { ArrowRightIcon, StarIcon } from "@/components/icons";
import {
  FadeUp,
  BlurIn,
  AnimatedButton,
  AnimatedIcon,
  FloatingElement,
} from "@/utils/animation";

export default function HeroSection({
  data = site.hero,
  className = "",
}: SectionProps<HirenzHeroData>) {
  const {
    titlePart1 = "Find Your Next",
    titlePart2 = "Top Talent With",
    highlight = "Hirenz",
    description = "Connecting skilled professionals with forward-thinking companies. We help businesses build stronger teams and individuals create brighter futures.",
    primaryCta = { label: "Find Talent", href: "/services" },
    secondaryCta = { label: "Hire Now", href: "/contact" },
    image = "/images/hero-banner.png",
    trustedBadge = {
      trustedBy: "Trusted by",
      heading: "Leading Companies",
      rating: "4.9/5 Rating",
      avatars: [
        {
          name: "Alex Morgan",
          src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
        },
        {
          name: "David Chen",
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
        },
        {
          name: "Sarah Jenkins",
          src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
        },
        {
          name: "Michael Ross",
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
        },
      ],
    },
  } = data || {};

  return (
    <section className={`relative w-full bg-white font-poppins overflow-hidden py-14 sm:py-20 lg:py-24 min-h-[560px] lg:min-h-[600px] flex items-center ${className}`}>
      {/* Background banner image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={image}
          alt={`${highlight} recruitment banner`}
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
      </div>

      {/* Hero content container */}
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Headlines & CTA */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            {/* Main title animation */}
            <FadeUp delay={0.1}>
              <h1 className="text-[38px] sm:text-[48px] md:text-[54px] lg:text-[54px] xl:text-[62px] font-extrabold text-[#111111] leading-[1.12] tracking-tight">
                {titlePart1} <br />
                {titlePart2} <br />
                <span className="text-[#a84523]">{highlight}</span>
              </h1>
            </FadeUp>

            {/* Paragraph description */}
            <FadeUp delay={0.25}>
              <p className="mt-2 sm:mt-4 text-[#555555] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-[490px]">
                {description}
              </p>
            </FadeUp>

            {/* CTA action buttons */}
            <FadeUp delay={0.4}>
              <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-4">
                {primaryCta && (
                  <AnimatedButton>
                    <Link
                      href={primaryCta.href}
                      className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#a84523] text-white text-[15px] sm:text-[16px] font-medium transition-all duration-200 shadow-[0_4px_14px_rgba(168,69,35,0.25)] hover:bg-[#8f381a] hover:shadow-[0_6px_20px_rgba(168,69,35,0.35)]"
                    >
                      <span>{primaryCta.label}</span>
                      <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </AnimatedButton>
                )}

                {secondaryCta && (
                  <AnimatedButton>
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-[#333333] text-[#1c1c1c] text-[15px] sm:text-[16px] font-medium transition-all duration-200 bg-white hover:bg-gray-50 hover:border-black"
                    >
                      {secondaryCta.label}
                    </Link>
                  </AnimatedButton>
                )}
              </div>
            </FadeUp>
          </div>

          {/* Floating trust badge */}
          {trustedBadge && (
            <div className="lg:col-span-5 xl:col-span-6 flex justify-end items-end relative min-h-[160px] sm:min-h-[200px] lg:min-h-[400px]">
              <BlurIn delay={0.3}>
                <FloatingElement amplitude={4} duration={4}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_12px_36px_rgba(0,0,0,0.16)] border border-gray-100/90 z-20 min-w-[210px] sm:min-w-[250px] self-end mb-2 lg:mb-6">
                    <div>
                      <span className="block text-[12px] sm:text-[13px] text-gray-500 font-medium">
                        {trustedBadge.trustedBy}
                      </span>
                      <span className="block text-[14px] sm:text-[15px] font-bold text-gray-900">
                        {trustedBadge.heading}
                      </span>
                    </div>

                    {/* Overlapping client avatars */}
                    {trustedBadge.avatars && (
                      <div className="flex items-center -space-x-2 mt-2.5 mb-3">
                        {trustedBadge.avatars.map((avatar, idx) => (
                          <div
                            key={idx}
                            className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white overflow-hidden shadow-sm"
                          >
                            <Image
                              src={avatar.src}
                              alt={avatar.name}
                              fill
                              className="object-cover"
                              sizes="36px"
                            />
                          </div>
                        ))}
                        {/* Plus badge */}
                        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-[#f5ece7] text-[#a84523] text-sm font-semibold flex items-center justify-center shadow-sm">
                          +
                        </div>
                      </div>
                    )}

                    {/* Star rating */}
                    <div>
                      <span className="block text-[13px] sm:text-[14px] font-bold text-gray-900 mb-1">
                        {trustedBadge.rating}
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <AnimatedIcon key={i} animation="pulse">
                            <StarIcon className="w-4 h-4 fill-[#d65b2f] text-[#d65b2f]" />
                          </AnimatedIcon>
                        ))}
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </BlurIn>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}