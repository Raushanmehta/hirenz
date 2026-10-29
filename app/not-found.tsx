"use client";

import React from "react";
import Link from "next/link";
import { site } from "@/data";
import { HomeIcon } from "@/components/icons";
import {
    FadeUp,
    ScaleIn,
    AnimatedButton,
    AnimatedIcon,
    FloatingElement,
} from "@/utils/animation";

// 404 page component
export default function NotFound() {
    const data = site.notFound;

    return (
        <main className="w-full bg-white font-poppins min-h-[75vh] flex items-center justify-center py-12 lg:py-20">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    {/* Tagline badge */}
                    <FadeUp delay={0.1}>
                        <div className="flex items-center justify-center gap-2.5 mb-2">
                            <span className="w-8 h-[1.5px] bg-[#a84523] rounded-full inline-block" aria-hidden="true" />
                            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] text-[#a84523] uppercase">
                                {data?.tagline || "ERROR 404"}
                            </span>
                            <span className="w-8 h-[1.5px] bg-[#a84523] rounded-full inline-block" aria-hidden="true" />
                        </div>
                    </FadeUp>

                    {/* Large 404 number */}
                    <ScaleIn delay={0.2}>
                        <FloatingElement amplitude={4} duration={3}>
                            <div className="relative my-2 select-none">
                                <span className="text-8xl sm:text-9xl lg:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#a84523] to-[#111111] tracking-tighter leading-none inline-block">
                                    {data?.errorCode || "404"}
                                </span>
                            </div>
                        </FloatingElement>
                    </ScaleIn>

                    {/* Headline title */}
                    <FadeUp delay={0.3}>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
                            {data?.titlePart1 || "Oops! Page Not"}{" "}
                            <span className="text-[#a84523]">{data?.highlight || "Found"}</span>
                        </h1>
                    </FadeUp>

                    {/* Description text */}
                    <FadeUp delay={0.4}>
                        <p className="mt-3 text-sm sm:text-base text-[#666666] leading-relaxed max-w-xl font-normal">
                            {data?.subtitle ||
                                "The page you are looking for might have been moved, removed, or is temporarily unavailable. Let's get you back on track."}
                        </p>
                    </FadeUp>

                    {/* Action buttons */}
                    <FadeUp delay={0.5}>
                        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
                            <AnimatedButton glow>
                                <Link
                                    href={data?.homeButton?.href || "/"}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#a84523] hover:bg-[#222222] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
                                >
                                    <AnimatedIcon animation="rotateHover">
                                        <HomeIcon className="w-4 h-4" />
                                    </AnimatedIcon>
                                    <span>{data?.homeButton?.label || "Return to Homepage"}</span>
                                </Link>
                            </AnimatedButton>

                            <AnimatedButton>
                                <Link
                                    href={data?.contactButton?.href || "/contact"}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#eeeeee] bg-white hover:bg-[#a84523] hover:border-[#a84523] hover:text-white text-[#111111] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md"
                                >
                                    <span>{data?.contactButton?.label || "Contact Support"}</span>
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </AnimatedButton>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </main>
    );
}
