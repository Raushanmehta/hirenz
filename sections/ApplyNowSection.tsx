"use client";

import React, { useState, useRef, FormEvent, DragEvent, ChangeEvent } from "react";
import { site, SectionProps, HirenzApplyNowData } from "@/data";
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  FileTextIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UploadIcon,
} from "@/components/icons";
import {
  FadeUp,
  BlurIn,
  AnimatedButton,
  AnimatedIcon,
} from "@/utils/animation";

export default function ApplyNowSection({
  data = site.applyNow,
  className = "",
}: SectionProps<HirenzApplyNowData>) {
  const {
    badge = "CAREER APPLICATION",
    title = "Apply Now",
    headline = "Apply Now",
    titlePart1 = "Apply",
    highlight = "Now",
    description = "Fill out the form below to apply for this position. Our team will review your application and get back to you soon.",
    submitButtonText = "Submit Application",
    uploadTitle = "Drag and drop your resume here",
    uploadSubtitle = "or click to browse",
    uploadNote = "Supported formats: PDF, DOC, DOCX (Max. 5MB)",
    successTitle = "Application Submitted Successfully!",
    successMessage = "Thank you for applying. Our talent acquisition team will review your profile and contact you shortly.",
  } = data || {};

  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className={`w-full bg-[#f9fafb] font-poppins py-8 lg:py-12 ${className}`}>
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
                headline || title
              )}
            </h2>
            {description && (
              <p className="mt-1 text-[#666666] text-[15px] sm:text-[16px] leading-relaxed max-w-[680px] mx-auto font-normal">
                {description}
              </p>
            )}
          </div>
        </FadeUp>

        {/* Form card animation */}
        <BlurIn delay={0.2}>
          <div className="bg-white rounded-lg border border-[#e8e8e8] shadow-[0_12px_40px_rgba(0,0,0,0.05)] p-5 sm:p-8 md:p-10 max-w-[980px] mx-auto">
          {isSubmitted ? (
            <div className="py-10 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#faebe5] flex items-center justify-center text-[#a84523] mb-3">
                <CheckCircleIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-1.5">
                {successTitle}
              </h3>
              <p className="text-gray-600 max-w-md text-[14.5px]">
                {successMessage}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[13px] sm:text-[13.5px] font-semibold text-[#1c1c1c] mb-1.5"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <UserIcon className="w-[18px] h-[18px] text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="Enter your full name"
                      className="w-full h-11 sm:h-12 pl-10 pr-4 text-[14px] text-[#1c1c1c] placeholder:text-gray-400 bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all"
                    />
                  </div>
                </div>

                {/* 2. Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[13px] sm:text-[13.5px] font-semibold text-[#1c1c1c] mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MailIcon className="w-[18px] h-[18px] text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full h-11 sm:h-12 pl-10 pr-4 text-[14px] text-[#1c1c1c] placeholder:text-gray-400 bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all"
                    />
                  </div>
                </div>

                {/* 3. Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[13px] sm:text-[13.5px] font-semibold text-[#1c1c1c] mb-1.5"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <PhoneIcon className="w-[18px] h-[18px] text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Enter your phone number"
                      className="w-full h-11 sm:h-12 pl-10 pr-4 text-[14px] text-[#1c1c1c] placeholder:text-gray-400 bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all"
                    />
                  </div>
                </div>

                {/* 4. Current Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-[13px] sm:text-[13.5px] font-semibold text-[#1c1c1c] mb-1.5"
                  >
                    Current Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPinIcon className="w-[18px] h-[18px] text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="location"
                      required
                      placeholder="Enter your current location"
                      className="w-full h-11 sm:h-12 pl-10 pr-4 text-[14px] text-[#1c1c1c] placeholder:text-gray-400 bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all"
                    />
                  </div>
                </div>

                {/* 5. Relevant Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-[13px] sm:text-[13.5px] font-semibold text-[#1c1c1c] mb-1.5"
                  >
                    Relevant Experience <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BriefcaseIcon className="w-[18px] h-[18px] text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="experience"
                      required
                      defaultValue=""
                      className="w-full h-11 sm:h-12 pl-10 pr-10 text-[14px] text-[#1c1c1c] bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-gray-400">
                        Select experience
                      </option>
                      <option value="fresher">Fresher / Entry Level (0-1 years)</option>
                      <option value="1-3">Junior (1-3 years)</option>
                      <option value="3-5">Mid-Level (3-5 years)</option>
                      <option value="5-8">Senior (5-8 years)</option>
                      <option value="8+">Lead / Executive (8+ years)</option>
                    </select>
                    <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* 6. Expected Salary (Optional) */}
                <div>
                  <label
                    htmlFor="salary"
                    className="block text-[13px] sm:text-[13.5px] font-semibold text-[#1c1c1c] mb-1.5"
                  >
                    Expected Salary{" "}
                    <span className="font-normal text-gray-500">(Optional)</span>
                  </label>
                  <div className="relative">
                    <BriefcaseIcon className="w-[18px] h-[18px] text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="salary"
                      placeholder="Enter expected salary"
                      className="w-full h-11 sm:h-12 pl-10 pr-4 text-[14px] text-[#1c1c1c] placeholder:text-gray-400 bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all"
                    />
                  </div>
                </div>

                {/* 7. Upload Resume * (Full Width) */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-[13px] sm:text-[13.5px] font-semibold text-[#1c1c1c] mb-1.5">
                    Upload Resume <span className="text-red-500">*</span>
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative border-2 border-dashed rounded-lg py-6 sm:py-7 px-4 sm:px-6 flex items-center justify-center cursor-pointer transition-colors ${
                      isDragging
                        ? "border-[#a84523] bg-[#faebe5]/40"
                        : "border-[#e2e2e2] bg-white hover:bg-gray-50/70"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {uploadedFile ? (
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#faebe5] flex items-center justify-center text-[#a84523] flex-shrink-0">
                          <FileTextIcon className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-[#1c1c1c] text-[14px]">
                            {uploadedFile.name}
                          </p>
                          <p className="text-[12px] text-gray-400">
                            {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setUploadedFile(null);
                          }}
                          className="ml-4 text-xs font-semibold text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        {/* Upload cloud icon */}
                        <div className="w-12 h-12 rounded-full bg-[#faebe5] flex items-center justify-center text-[#a84523] flex-shrink-0">
                          <AnimatedIcon animation="bounce">
                            <UploadIcon className="w-6 h-6" />
                          </AnimatedIcon>
                        </div>

                        <div>
                          <p className="font-bold text-[#1c1c1c] text-[15px] leading-tight">
                            {uploadTitle}
                          </p>
                          <p className="text-[#a84523] font-semibold text-[13px] mt-0.5">
                            {uploadSubtitle}
                          </p>
                          <p className="text-gray-400 text-[11.5px] mt-0.5 font-normal">
                            {uploadNote}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Cover letter field */}
                <div className="col-span-1 md:col-span-2">
                  <label
                    htmlFor="coverLetter"
                    className="block text-[13px] sm:text-[13.5px] font-semibold text-[#1c1c1c] mb-1.5"
                  >
                    Cover Letter{" "}
                    <span className="font-normal text-gray-500">(Optional)</span>
                  </label>
                  <div className="relative">
                    <FileTextIcon className="w-[18px] h-[18px] text-gray-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <textarea
                      id="coverLetter"
                      rows={4}
                      placeholder="Tell us why you're a great fit for this position..."
                      className="w-full pt-3 pb-3 pl-10 pr-4 text-[14px] text-[#1c1c1c] placeholder:text-gray-400 bg-white border border-[#e2e2e2] rounded-lg focus:outline-none focus:border-[#a84523] focus:ring-1 focus:ring-[#a84523] transition-all resize-y"
                    />
                  </div>
                </div>
              </div>

              {/* Submit application button */}
              <div className="flex justify-center pt-2 sm:pt-3">
                <AnimatedButton>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 rounded-lg bg-[#a84523] text-white text-[15px] font-medium transition-all duration-200 shadow-[0_4px_16px_rgba(168,69,35,0.25)] hover:bg-[#8f381a] hover:shadow-[0_6px_22px_rgba(168,69,35,0.35)] w-full sm:w-auto min-w-[220px] cursor-pointer"
                  >
                    <span>{submitButtonText}</span>
                    <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </AnimatedButton>
              </div>
            </form>
          )}
        </div>
      </BlurIn>
    </div>
  </section>
  );
}