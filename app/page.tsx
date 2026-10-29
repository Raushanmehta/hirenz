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
    <main className="w-full">
      <HeroSection data={hero} />
      <ServiceSection data={service} />
      <AboutSection data={about} />
      <ProcessSection data={process} />
      <ExpertiesSection data={experties} />
      <TestimonialSection data={testimonial} />
      <BlogSection data={blog} />
    </main>
  );
}
