import HeroSection from "@/sections/home/HeroSection";
import ServiceSection from "@/sections/home/ServiceSection";
import AboutSection from "@/sections/home/AboutSection";
import ProcessSection from "@/sections/home/ProcessSection";
import ExpertiesSection from "@/sections/home/ExpertiesSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import BlogSection from "@/sections/home/BlogSection";
import { site } from "@/data";

export default function Home() {
  const { hero, service, about, process, experties, testimonial, blog } = site;

  return (
    <>
      {/* Hero section */}
      <HeroSection data={hero} />
      {/* Services section */}
      <ServiceSection data={service} />
      {/* About section */}
      <AboutSection data={about} />
      {/* Process methodology */}
      <ProcessSection data={process} />
      {/* Industry expertise */}
      <ExpertiesSection data={experties} />
      {/* Testimonials review */}
      <TestimonialSection data={testimonial} />
      {/* Latest insights blog */}
      <BlogSection data={blog} />
    </>
  );
}
