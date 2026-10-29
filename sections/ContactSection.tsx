"use client";

import React, { useState, FormEvent } from "react";
import { site, SectionProps, HirenzContactData } from "@/data";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  DynamicIcon,
} from "@/components/icons";
import {
  FadeUp,
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
  AnimatedButton,
  AnimatedIcon,
} from "@/utils/animation";

export default function ContactSection({
  data = site.contact,
  className = "",
}: SectionProps<HirenzContactData>) {
  const {
    badge = "CONTACT US",
    headline = "We'd Love to Hear From You",
    titlePart1 = "We'd Love to",
    highlight = "Hear From You",
    description = "Have a question, need assistance, or want to discuss your hiring needs? Our team is here to help. Reach out to us and we'll get back to you shortly.",
    formBadge = "SEND US A MESSAGE",
    formTitle = "Get in Touch",
    formTitlePart1 = "Get in",
    formHighlight = "Touch",
    formDescription = "Fill out the form below and our team will get back to you soon.",
    successTitle = "Message Sent Successfully!",
    successMessage = "Thank you for reaching out. We have received your message and will respond within 24 hours.",
    locationBadge = "OUR LOCATION",
    companyName = "Hirenz Consultancy Pvt. Ltd.",
    officeAddress = "3170 Rosewood Lane Unit 200 , Beverly Hills, CA 90210",
    mapEmbedUrl = "https://maps.google.com/maps?q=3170+Rosewood+Lane+Unit+200%2C+Beverly+Hills%2C+CA+90210&t=&z=14&ie=UTF8&iwloc=&output=embed",
    phone = "+1 000000000",
    email = "info@xyz.com",
    hours = "Mon - Fri: 9:00 AM - 6:00 PM",
    infoCards = [
      {
        icon: "phone",
        label: "Call Us",
        value: "+1 000000000",
        subValue: "Mon - Fri: 9:00 AM - 6:00 PM",
      },
      {
        icon: "mail",
        label: "Email Us",
        value: "info@xyz.com",
        subValue: "We reply within 24 hours",
      },
      {
        icon: "mapPin",
        label: "Visit Us",
        value: "3170 Rosewood Lane Unit 200",
        subValue: "Beverly Hills, CA 90210",
      },
      {
        icon: "clock",
        label: "Business Hours",
        value: "Mon - Fri: 9:00 AM - 6:00 PM",
        subValue: "Sat - Sun: Closed",
      },
    ],
  } = data || {};

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className={`w-full bg-[#f9fafb] font-poppins py-8 lg:py-12 overflow-x-clip ${className}`}>
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section header animation */}
        <FadeUp delay={0.1}>
          <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6">
            {badge && (
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
                <span className="h-[1.5px] w-12 sm:w-16 bg-[#a84523] rounded-full" />
                <span className="text-[12px] sm:text-[13px] font-semibold text-[#555555] tracking-[0.2em] uppercase">
                  {badge}
                </span>
                <span className="h-[1.5px] w-12 sm:w-16 bg-[#a84523] rounded-full" />
              </div>
            )}

            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-extrabold text-[#111111] tracking-tight leading-tight">
              {titlePart1 && highlight ? (
                <>
                  {titlePart1} <span className="text-[#a84523]">{highlight}</span>
                </>
              ) : (
                headline
              )}
            </h2>
            {description && (
              <p className="mt-1 text-[#666666] text-[15px] sm:text-[16px] leading-relaxed max-w-[680px] mx-auto font-normal">
                {description}
              </p>
            )}
          </div>
        </FadeUp>

        {/* Form and map layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-stretch">
          {/* Send message card */}
          <div className="lg:col-span-7">
            <FadeLeft delay={0.15}>
              <div className="bg-white rounded-lg border border-[#eeeeee] shadow-[0_10px_35px_-5px_rgba(0,0,0,0.05)] p-5 sm:p-7 md:p-8 flex flex-col justify-between h-full">
                <div>
              {/* Badge with horizontal line */}
              {formBadge && (
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-6 bg-[#a84523] rounded-full" />
                  <span className="text-[11.5px] sm:text-[12px] font-bold text-[#444444] tracking-[0.18em] uppercase">
                    {formBadge}
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-[24px] sm:text-[28px] font-extrabold text-[#111111] leading-tight mb-0.5">
                {formTitlePart1 && formHighlight ? (
                  <>
                    {formTitlePart1} <span className="text-[#a84523]">{formHighlight}</span>
                  </>
                ) : (
                  formTitle
                )}
              </h3>
              {formDescription && (
                <p className="text-gray-500 text-[13px] sm:text-[13.5px] mb-5">
                  {formDescription}
                </p>
              )}

              {/* Contact Form */}
              {isSubmitted ? (
                <div className="py-10 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#faebe5] flex items-center justify-center text-[#a84523] mb-3">
                    <CheckCircleIcon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#111111] mb-1">
                    {successTitle}
                  </h4>
                  <p className="text-gray-600 text-[13.5px] max-w-sm">
                    {successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[13px] font-semibold text-[#1c1c1c] mb-1"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        placeholder="Enter your full name"
                        className="w-full h-11 px-4 text-[13.5px] text-[#1c1c1c] placeholder:text-gray-400 bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[13px] font-semibold text-[#1c1c1c] mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="Enter your email address"
                        className="w-full h-11 px-4 text-[13.5px] text-[#1c1c1c] placeholder:text-gray-400 bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[13px] font-semibold text-[#1c1c1c] mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        defaultValue={phone}
                        placeholder="Enter your phone number"
                        className="w-full h-11 px-4 text-[13.5px] text-[#1c1c1c] placeholder:text-gray-400 bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-[13px] font-semibold text-[#1c1c1c] mb-1"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          required
                          defaultValue=""
                          className="w-full h-11 pl-4 pr-10 text-[13.5px] text-[#1c1c1c] bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="text-gray-400">
                            Select a subject
                          </option>
                          <option value="hiring">Hiring Talent / Recruitment</option>
                          <option value="jobseeker">Job Seeker Assistance</option>
                          <option value="general">General Inquiry</option>
                          <option value="partnership">Business Partnership</option>
                        </select>
                        <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Your Message */}
                    <div className="col-span-1 sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-[13px] font-semibold text-[#1c1c1c] mb-1"
                      >
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Write your message here..."
                        className="w-full p-3.5 text-[13.5px] text-[#1c1c1c] placeholder:text-gray-400 bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all resize-y"
                      />
                    </div>
                  </div>

                  {/* Send Message Button */}
                  <div className="pt-1">
                    <AnimatedButton>
                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#a84523] text-white text-[14.5px] font-medium transition-all duration-200 shadow-[0_4px_14px_rgba(168,69,35,0.25)] hover:bg-[#222222] hover:shadow-[0_6px_18px_rgba(34,34,34,0.35)] cursor-pointer"
                      >
                        <span>Send Message</span>
                        <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </AnimatedButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </FadeLeft>
      </div>

          {/* Location and map card */}
          <div className="lg:col-span-5">
            <FadeRight delay={0.25}>
              <div className="bg-white rounded-lg border border-[#eeeeee] shadow-[0_10px_35px_-5px_rgba(0,0,0,0.05)] p-5 sm:p-6 flex flex-col justify-between h-full">
                {/* Responsive Google Map */}
                <div className="relative w-full aspect-[16/11] rounded-lg overflow-hidden border border-gray-100 bg-[#e5e3df] shadow-inner">
                  <iframe
                    title="Hirenz Noida Office Location"
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  {/* Decorative badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm border border-gray-200/80 flex items-center gap-1.5 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-[#a84523] animate-pulse" />
                    <span className="text-[11px] font-bold text-gray-800">
                      {companyName.split(" ")[0]} Headquarters
                    </span>
                  </div>
                </div>

                {/* Location details */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="h-[2px] w-6 bg-[#a84523] rounded-full" />
                    <span className="text-[11px] sm:text-[11.5px] font-bold text-[#444444] tracking-[0.18em] uppercase">
                      {locationBadge}
                    </span>
                  </div>

                  <h4 className="text-[16px] font-bold text-[#111111] leading-snug">
                    {companyName}
                  </h4>
                  <p className="mt-1 text-[#666666] text-[13px] sm:text-[13.5px] leading-relaxed whitespace-pre-line">
                    {officeAddress}
                  </p>
                </div>
              </div>
            </FadeRight>
          </div>
        </div>

        {/* Dynamic bottom info cards */}
        <div className="bg-white rounded-lg border border-[#eeeeee] shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-4 sm:p-6 mt-4 sm:mt-6">
          <StaggerContainer speed="fast">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
              {infoCards.map((card, idx) => (
                <StaggerItem key={idx} variant="up">
                  <div
                    className={`flex items-center gap-3.5 pt-3 sm:pt-0 lg:px-4 ${
                      idx === 0 ? "first:lg:pl-0" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#faebe5] flex items-center justify-center text-[#a84523] flex-shrink-0">
                      <AnimatedIcon animation="bounce">
                        <DynamicIcon name={card.icon} className="w-6 h-6" />
                      </AnimatedIcon>
                    </div>
                    <div>
                      <p className="text-[11.5px] font-medium text-gray-500 uppercase tracking-wide">
                        {card.label}
                      </p>
                      {/* Contact detail link */}
                      {card.icon === "phone" ? (
                        <a
                          href={`tel:${card.value.replace(/\s+/g, "")}`}
                          className="text-[14.5px] sm:text-[15px] font-bold text-[#111111] hover:text-[#a84523] transition-colors mt-0.5 block leading-snug"
                        >
                          {card.value}
                        </a>
                      ) : card.icon === "mail" ? (
                        <a
                          href={`mailto:${card.value}`}
                          className="text-[14.5px] sm:text-[15px] font-bold text-[#111111] hover:text-[#a84523] transition-colors mt-0.5 block leading-snug"
                        >
                          {card.value}
                        </a>
                      ) : card.icon === "mapPin" ? (
                        <a
                          href="https://maps.google.com/?q=3170+Rosewood+Lane+Unit+200+Beverly+Hills+CA+90210"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14.5px] sm:text-[15px] font-bold text-[#111111] hover:text-[#a84523] transition-colors mt-0.5 block leading-snug"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <p className="text-[14.5px] sm:text-[15px] font-bold text-[#111111] mt-0.5 leading-snug">
                          {card.value}
                        </p>
                      )}
                      {card.subValue && (
                        <p className="text-[11px] text-gray-400 mt-0.5 font-normal">
                          {card.subValue}
                        </p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
