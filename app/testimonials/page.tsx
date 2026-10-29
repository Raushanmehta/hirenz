import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { site } from "@/data";

export const metadata = {
    title: "Testimonials | Hirenz Recruitment & HR Consultancy",
    description:
        site.testimonial?.description ||
        "Read what corporate clients and job candidates say about working with Hirenz recruitment consultancy.",
};

export default function TestimonialsPage({
    className = "",
}: {
    className?: string;
}) {
    const { testimonial, pageTopSection } = site;
    const {
        badge = "TESTIMONIALS",
        titlePart1 = "What Our Clients And",
        highlight = "Candidates Say",
        headline = "What Our Clients And Candidates Say",
        description = "Real feedback and verified reviews from corporate hiring leaders and talented professionals who partnered with Hirenz.",
        testimonialsList = [],
    } = testimonial || {};

    return (
        <main>
            <Breadcrumb
                data={pageTopSection}
                title="Testimonials"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Testimonials" },
                ]}
            />

            <section className={`w-full bg-white font-poppins py-8 lg:py-12 ${className}`}>
                <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                    {/* Section Header */}
                    <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6">
                        {/* Badge with horizontal lines */}
                        {badge && (
                            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
                                <span className="h-[1.5px] w-12 sm:w-16 bg-[#a84523] rounded-full" />
                                <span className="text-[12px] sm:text-[13px] font-semibold text-[#555555] tracking-[0.2em] uppercase">
                                    {badge}
                                </span>
                                <span className="h-[1.5px] w-12 sm:w-16 bg-[#a84523] rounded-full" />
                            </div>
                        )}

                        {/* Main Title */}
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

                    {/* Testimonial Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:mt-6">
                        {testimonialsList.map((item, index) => (
                            <TestimonialCard key={item.id || index} testimonial={item} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
