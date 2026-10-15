"use client";

import React, { useState } from "react";
import Image from "next/image";
import { site, SectionProps, HirenzTestimonialData } from "@/data";
import { ArrowLeftIcon, ArrowRightIcon, QuoteIcon } from "@/components/icons";
import {
  FadeLeft,
  FadeRight,
  AnimatedButton,
  AnimatedIcon,
} from "@/utils/animation";

export default function TestimonialSection({
  data = site.testimonial,
  className = "",
}: SectionProps<HirenzTestimonialData>) {
  const {
    badge = "TESTIMONIALS",
    headlinePart1 = "What Our Clients",
    headlinePart2 = "And",
    highlight = "Candidates Say",
    testimonialsList = [],
  } = data || {};

  const [currentIndex, setCurrentIndex] = useState(0);

  const list = testimonialsList.length > 0 ? testimonialsList : [
    {
      quote:
        "“Hirenz helped us find the right talent quickly and efficiently. Their team understood our requirements and provided excellent support throughout the hiring process.”",
      name: "Rahul Mehta",
      role: "HR Manager, GlobalTech Pvt. Ltd.",
      imageSrc: "/images/avatar-rahuls.png",
    },
  ];

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const current = list[currentIndex] || list[0];

  return (
    <section className={`w-full bg-white font-poppins py-8 lg:py-12 overflow-hidden ${className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Heading and quote */}
          <div className="lg:col-span-6 flex flex-col justify-center">
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
              <h2 className="text-[34px] sm:text-[42px] md:text-[48px] font-extrabold text-[#111111] leading-[1.14] tracking-tight">
                {headlinePart1} <br />
                {headlinePart2} <span className="text-[#a84523]">{highlight}</span>
              </h2>

              {/* Quote body text */}
              <p className="mt-3 sm:mt-4 text-[#555555] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-[500px] min-h-[84px]">
                {current?.quote}
              </p>

              {/* Author and controls */}
              <div className="mt-5 sm:mt-6 flex items-center justify-between max-w-[500px]">
                <div className="flex flex-col">
                  <h4 className="text-[17px] sm:text-[18px] font-bold text-[#111111] leading-tight">
                    {current?.name}
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#777777] font-medium mt-0.5">
                    {current?.role}
                  </p>
                </div>

                {/* Slider nav buttons */}
                <div className="flex items-center gap-3">
                  <AnimatedButton onClick={prevTestimonial}>
                    <button
                      type="button"
                      aria-label="Previous testimonial"
                      className="w-10 h-10 rounded-full border border-[#a84523] bg-white text-[#a84523] flex items-center justify-center transition-all duration-200 hover:bg-[#faebe5] shadow-sm cursor-pointer"
                    >
                      <ArrowLeftIcon className="w-4 h-4" />
                    </button>
                  </AnimatedButton>

                  <AnimatedButton onClick={nextTestimonial}>
                    <button
                      type="button"
                      aria-label="Next testimonial"
                      className="w-10 h-10 rounded-full bg-[#a84523] text-white flex items-center justify-center transition-all duration-200 hover:bg-[#8f381a] shadow-[0_4px_14px_rgba(168,69,35,0.3)] cursor-pointer"
                    >
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </AnimatedButton>
                </div>
              </div>
            </FadeLeft>
          </div>

          {/* Testimonial portrait image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end pr-0 sm:pr-6 lg:pr-12 pb-8 sm:pb-10 w-full">
            <FadeRight delay={0.25} className="w-full flex justify-center lg:justify-end">
              <div className="relative isolate w-full max-w-[420px] sm:max-w-[450px]">
                {/* Decorative background box */}
                <div
                  aria-hidden="true"
                  className="absolute top-12 -right-6 sm:-right-10 -bottom-6 sm:-bottom-8 w-[88%] bg-[#EAE5E1] rounded-2xl sm:rounded-3xl z-0 shadow-sm"
                />

                {/* Main portrait image */}
                <div className="relative -left-6 sm:-left-10 aspect-[8/6] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-white z-10 transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src={current?.imageSrc || "/images/avatar-rahuls.png"}
                    alt={`${current?.name || "Client"} testimonial review`}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                </div>

                {/* Quote mark badge */}
                <div
                  aria-hidden="true"
                  className="absolute top-6 sm:top-8 -right-1 sm:-right-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#a84523] flex items-center justify-center text-white shadow-[0_8px_24px_rgba(168,69,35,0.32)] z-20"
                >
                  <AnimatedIcon animation="pulse">
                    <QuoteIcon className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-current" />
                  </AnimatedIcon>
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
}