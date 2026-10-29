"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon, MenuIcon, CloseIcon } from "@/components/icons";
import { site, SectionProps, HirenzNavbarData } from "@/data";
import { AnimatedButton, AnimatedIcon } from "@/utils/animation";

// Navigation bar component
export default function Navbar({
  data = site.navbar,
}: SectionProps<HirenzNavbarData>) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] font-poppins overflow-x-clip">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Brand logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group flex-shrink-0 transition-opacity hover:opacity-90"
          >
            <div className="relative h-12 w-44 sm:h-15 sm:w-60">
              <Image
                src="/logo/logo-black.webp"
                alt="HIRENZ - Connecting Talent. Creating Futures."
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 768px) 208px, 240px"
              />
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {data.navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.id || item.href}
                  href={item.href}
                  className={`text-[15px] xl:text-[16px] font-medium tracking-tight transition-all duration-200 relative py-1 ${isActive
                    ? "text-[#a84523] font-semibold"
                    : "text-[#1c1c1c] hover:text-[#a84523]"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#a84523] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA button */}
          <div className="hidden lg:flex items-center gap-4">
            <AnimatedButton glow>
              <Link
                href={data.cta.href}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#a84523] text-white text-[15px] font-medium tracking-tight shadow-[0_4px_14px_rgba(168,69,35,0.25)] hover:bg-[#222222] hover:shadow-[0_6px_20px_rgba(34,34,34,0.35)] transition-all duration-200"
              >
                <span>{data.cta.label}</span>
                <AnimatedIcon animation="rotateHover">
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </AnimatedIcon>
              </Link>
            </AnimatedButton>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className=" rounded-md text-[#1c1c1c] hover:text-[#a84523] focus:outline-none focus:ring-2 focus:ring-[#a84523]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-7 h-7" />
              ) : (
                <MenuIcon className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {data.navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.id || item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${isActive
                    ? "bg-[#a84523]/10 text-[#a84523] font-semibold"
                    : "text-[#1c1c1c] hover:bg-gray-50 hover:text-[#a84523]"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100">
            <Link
              href={data.cta.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#a84523] text-white font-medium text-base shadow-md hover:bg-[#222222] transition-colors"
            >
              <span>{data.cta.label}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}