"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  XSocialIcon,
} from "@/components/icons";
import { site, SectionProps, HirenzFooterData } from "@/data";
import {
  FadeUp,
  FadeLeft,
  AnimatedIcon,
} from "@/utils/animation";

// Footer component
export default function Footer({
  data = site.footer,
}: SectionProps<HirenzFooterData>) {
  return (
    <footer className="w-full bg-[#141414] text-white font-poppins selection:bg-[#a84523] selection:text-white">
      {/* Main footer content */}
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10">
          {/* Brand info column */}
          <FadeLeft className="lg:col-span-4 flex flex-col justify-start">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-90"
            >
              <div className="relative h-13 w-52 sm:h-15 sm:w-60">
                <Image
                  src="/logo/logo-white.png"
                  alt={data.logo.alt}
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 208px, 240px"
                />
              </div>
            </Link>

            <p className="mt-4 text-[#9a9a9a] text-[14px] sm:text-[14.5px] leading-relaxed max-w-[340px]">
              {data.description}
            </p>

            {/* Social media icons */}
            <div className="flex items-center gap-2.5 mt-6">
              {data.socialLinks.map((s) => {
                let IconComponent = FacebookIcon;
                if (s.icon === "instagram") IconComponent = InstagramIcon;
                else if (s.icon === "linkedin") IconComponent = LinkedInIcon;
                else if (s.icon === "youtube") IconComponent = YouTubeIcon;
                else if (s.icon === "x") IconComponent = XSocialIcon;

                return (
                  <AnimatedIcon key={s.icon} animation="rotateHover">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-12 h-12 rounded-full bg-[#242424] flex items-center justify-center text-white/90 hover:bg-[#a84523] hover:text-white transition-all duration-200"
                    >
                      <IconComponent className="w-6 h-6 fill-current" />
                    </a>
                  </AnimatedIcon>
                );
              })}
            </div>
          </FadeLeft>

          {/* Quick links column */}
          <FadeUp delay={0.1} className="lg:col-span-2">
            <div>
              <h3 className="text-white text-[15px] font-semibold tracking-wider uppercase font-poppins">
                QUICK LINKS
              </h3>
              <div className="w-9 h-[2px] bg-[#a84523] mt-2 mb-5 rounded-full" />
            </div>

            <ul className="space-y-3 text-[14px]">
              {data.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9a9a9a] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Services links column */}
          <FadeUp delay={0.2} className="lg:col-span-3">
            <div>
              <h3 className="text-white text-[15px] font-semibold tracking-wider uppercase font-poppins">
                SERVICES
              </h3>
              <div className="w-9 h-[2px] bg-[#a84523] mt-2 mb-5 rounded-full" />
            </div>

            <ul className="space-y-3 text-[14px]">
              {data.servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9a9a9a] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Contact info column */}
          <FadeUp delay={0.3} className="lg:col-span-3">
            <div>
              <h3 className="text-white text-[15px] font-semibold tracking-wider uppercase font-poppins">
                GET IN TOUCH
              </h3>
              <div className="w-9 h-[2px] bg-[#a84523] mt-2 mb-5 rounded-full" />
            </div>

            <div className="space-y-4">
              {/* Phone contact */}
              <div className="flex items-start gap-3.5">
                <AnimatedIcon animation="pulse">
                  <div className="w-12 h-12 rounded-full bg-[#a84523] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                </AnimatedIcon>
                <div className="flex flex-col">
                  <span className="text-[12px] text-[#9a9a9a]">Call Us</span>
                  <a
                    href={data.phoneHref}
                    className="text-[14.5px] font-semibold text-white hover:text-[#a84523] transition-colors"
                  >
                    {data.phone}
                  </a>
                </div>
              </div>

              {/* Email contact */}
              <div className="flex items-start gap-3.5">
                <AnimatedIcon animation="pulse">
                  <div className="w-12 h-12 rounded-full bg-[#a84523] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                    <MailIcon className="w-6 h-6" />
                  </div>
                </AnimatedIcon>
                <div className="flex flex-col">
                  <span className="text-[12px] text-[#9a9a9a]">Email Us</span>
                  <a
                    href={data.emailHref}
                    className="text-[14.5px] font-semibold text-white hover:text-[#a84523] transition-colors"
                  >
                    {data.email}
                  </a>
                </div>
              </div>

              {/* Address contact */}
              <div className="flex items-start gap-3.5">
                <AnimatedIcon animation="pulse">
                  <div className="w-12 h-12 rounded-full bg-[#a84523] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                </AnimatedIcon>
                <div className="flex flex-col">
                  <span className="text-[12px] text-[#9a9a9a]">Visit Us</span>
                  <p className="text-[13.5px] text-gray-200 font-medium leading-relaxed">
                    {data.address}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Divider line */}
      <div className="w-full border-t border-[#a84523]/60" />

      {/* Copyright footer bar */}
      <FadeUp delay={0.2} className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-5 text-center">
        <p className="text-[#9a9a9a] text-[13px] font-normal">
          {data.copyright}
        </p>
      </FadeUp>
    </footer>
  );
}