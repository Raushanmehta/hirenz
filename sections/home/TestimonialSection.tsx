"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { site, SectionProps, HirenzTestimonialData } from "@/data";
import { ArrowLeftIcon, ArrowRightIcon, QuoteIcon } from "@/components/icons";
import {
  FadeLeft,
  FadeRight,
  AnimatedButton,
  AnimatedIcon,
} from "@/utils/animation";

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
        "Hirenz helped us find the right talent quickly and efficiently. Their team understood our requirements and provided excellent support throughout the hiring process.",
      name: "Rahul Mehta",
      role: "HR Manager, GlobalTech Pvt. Ltd.",
      imageSrc: "/images/avatar-rahul.webp",
    },
  ];

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const current = list[currentIndex] || list[0];
  const cleanQuote = current?.quote?.replace(/^["“]|["”]$/g, "") || "";

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

              {/* Quote body text - Fixed height container prevents layout jumping */}
              <div className="relative mt-3 sm:mt-4 h-[130px] sm:h-[115px] md:h-[110px] max-w-[500px] flex items-start overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: EASE_SMOOTH }}
                    className="text-[#555555] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed w-full"
                  >
                    &ldquo;{cleanQuote}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author and controls */}
              <div className="mt-5 sm:mt-6 flex items-center justify-between max-w-[500px]">
                {/* Author Info - Fixed min-height ensures no vertical jumping */}
                <div className="flex flex-col min-h-[48px] justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25, ease: EASE_SMOOTH }}
                    >
                      <h4 className="text-[17px] sm:text-[18px] font-bold text-[#111111] leading-tight">
                        {current?.name}
                      </h4>
                      <p className="text-[13px] sm:text-[14px] text-[#777777] font-medium mt-0.5">
                        {current?.role}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slider nav buttons & indicators */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Indicator Dots */}
                  <div className="flex items-center gap-1.5">
                    {list.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          currentIndex === idx
                            ? "w-6 bg-[#a84523]"
                            : "w-2 bg-[#EAE5E1] hover:bg-[#a84523]/50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-2">
                    <AnimatedButton onClick={prevTestimonial}>
                      <button
                        type="button"
                        aria-label="Previous testimonial"
                        className="w-10 h-10 rounded-full bg-[#a84523] text-white flex items-center justify-center transition-all duration-200 hover:bg-[#222222] shadow-[0_4px_14px_rgba(168,69,35,0.3)] hover:shadow-[0_4px_14px_rgba(34,34,34,0.4)] cursor-pointer"
                      >
                        <ArrowLeftIcon className="w-4 h-4" />
                      </button>
                    </AnimatedButton>

                    <AnimatedButton onClick={nextTestimonial}>
                      <button
                        type="button"
                        aria-label="Next testimonial"
                        className="w-10 h-10 rounded-full bg-[#a84523] text-white flex items-center justify-center transition-all duration-200 hover:bg-[#222222] shadow-[0_4px_14px_rgba(168,69,35,0.3)] hover:shadow-[0_4px_14px_rgba(34,34,34,0.4)] cursor-pointer"
                      >
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </FadeLeft>
          </div>

          {/* Testimonial portrait image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end pb-8 sm:pb-10 w-full px-4 lg:pr-12">
            <FadeRight delay={0.25} className="w-full flex justify-center lg:justify-end">
              <div className="relative isolate w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] mx-auto lg:mx-0">
                {/* Decorative background box */}
                <div
                  aria-hidden="true"
                  className="absolute top-4 sm:top-6 lg:top-12 -right-3 sm:-right-5 lg:-right-10 -bottom-3 sm:-bottom-5 lg:-bottom-8 w-[92%] sm:w-[90%] lg:w-[88%] bg-[#EAE5E1] rounded-2xl sm:rounded-3xl z-0 shadow-sm"
                />

                {/* Main portrait image - locked aspect ratio and smooth crossfade */}
                <div className="relative -left-3 sm:-left-5 lg:-left-10 aspect-[8/6] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-[#EAE5E1] z-10 transition-transform duration-500 hover:scale-[1.02]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: EASE_SMOOTH }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={current?.imageSrc || "/images/avatar-rahul.webp"}
                        alt={`${current?.name || "Client"} testimonial review`}
                        fill
                        priority
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 450px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Quote mark badge */}
                <div
                  aria-hidden="true"
                  className="absolute top-2 sm:top-4 lg:top-8 -right-2 sm:-right-3 lg:-right-3 w-13 h-13 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#a84523] flex items-center justify-center text-white shadow-[0_8px_24px_rgba(168,69,35,0.32)] z-20"
                >
                  <AnimatedIcon animation="pulse">
                    <QuoteIcon className="w-5 h-5 sm:w-7 sm:h-7 lg:w-9 lg:h-9 text-white fill-current" />
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