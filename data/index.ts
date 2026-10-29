import siteData from "@/data/site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type HirenzSchema = typeof siteData.Hirenz;
export type HirenzSections = HirenzSchema["sections"];
export type HirenzTemplateComponents = HirenzSchema["templateComponents"];

// Aliases matching reference schema conventions
export type ServicesSchema = HirenzSchema;
export type ServicesSections = HirenzSections;
export type ServicesTemplateComponents = HirenzTemplateComponents;

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type HirenzNavbarData = HirenzSections["navbar"]["variants"]["HirenzNavbar1"];
export type HirenzFooterData = HirenzSections["footer"]["variants"]["HirenzFooter1"];
export type HirenzPageTopSectionData = HirenzSections["pageTopSection"]["variants"]["HirenzPageTopSection1"];
export type HirenzHeroData = HirenzSections["hero"]["variants"]["HirenzHero1"];
export type HirenzAboutData = HirenzSections["about"]["variants"]["HirenzAbout1"];
export type HirenzServiceData = HirenzSections["service"]["variants"]["HirenzService1"];
export type HirenzServicesData = HirenzServiceData;
export type HirenzExpertiesData = HirenzSections["experties"]["variants"]["HirenzExperties1"];
export type HirenzProcessData = HirenzSections["process"]["variants"]["HirenzProcess1"];
export type HirenzTestimonialData = HirenzSections["testimonial"]["variants"]["HirenzTestimonial1"];
export type HirenzBlogData = HirenzSections["blog"]["variants"]["HirenzBlog1"];
export type HirenzJobsData = HirenzSections["jobs"]["variants"]["HirenzJobs1"];
export type HirenzApplyNowData = HirenzSections["applyNow"]["variants"]["HirenzApplyNow1"];
export type HirenzContactData = HirenzSections["contact"]["variants"]["HirenzContact1"];
export type HirenzThankyouData = HirenzSections["thankyou"]["variants"]["HirenzThankyou1"];
export type HirenzNotFoundData = HirenzSections["notFound"]["variants"]["HirenzNotFound1"];
export type ServiceItem = HirenzServicesData["servicesList"][0];
export type HirenzServiceDetailData = ServiceItem;
export type BlogPost = HirenzBlogData["blogPosts"][0];
export type HirenzBlogDetailData = BlogPost;

// ── Inferred Sub-item Data Models ──
export type NavItem = HirenzNavbarData["navLinks"][0];
export type ProcessStep = HirenzProcessData["steps"][0];
export type TestimonialItem = HirenzTestimonialData["testimonialsList"][0];
export type JobItem = HirenzJobsData["jobsList"][0];
export type SocialLink = HirenzFooterData["socialLinks"][0];

// ── Convenience & Short Aliases ──
export type HeroData = HirenzHeroData;
export type AboutData = HirenzAboutData;
export type ServicesData = HirenzServicesData;
export type ExpertiesData = HirenzExpertiesData;
export type ProcessData = HirenzProcessData;
export type TestimonialsData = HirenzTestimonialData;
export type BlogData = HirenzBlogData;
export type JobsData = HirenzJobsData;
export type ApplyNowData = HirenzApplyNowData;
export type ContactData = HirenzContactData;
export type FooterData = HirenzFooterData;
export type NavbarData = HirenzNavbarData;
export type PageTopSectionData = HirenzPageTopSectionData;
export type BreadcrumbData = HirenzPageTopSectionData;
export type ServiceDetailData = HirenzServiceDetailData;
export type BlogDetailData = HirenzBlogDetailData;
export type ThankyouData = HirenzThankyouData;
export type NotFoundData = HirenzNotFoundData;

// ── Default Site Data (Unified Schema Node Map) ──
const sec = siteData.Hirenz.sections;

export const site = {
  navbar: sec.navbar.variants.HirenzNavbar1,
  footer: sec.footer.variants.HirenzFooter1,
  pageTopSection: sec.pageTopSection.variants.HirenzPageTopSection1,
  hero: sec.hero.variants.HirenzHero1,
  about: sec.about.variants.HirenzAbout1,
  service: sec.service.variants.HirenzService1,
  services: sec.service.variants.HirenzService1,
  experties: sec.experties.variants.HirenzExperties1,
  process: sec.process.variants.HirenzProcess1,
  testimonial: sec.testimonial.variants.HirenzTestimonial1,
  testimonials: sec.testimonial.variants.HirenzTestimonial1,
  blog: sec.blog.variants.HirenzBlog1,
  jobs: sec.jobs.variants.HirenzJobs1,
  applyNow: sec.applyNow.variants.HirenzApplyNow1,
  contact: sec.contact.variants.HirenzContact1,
  serviceDetail: sec.service.variants.HirenzService1.servicesList[0],
  blogDetail: sec.blog.variants.HirenzBlog1.blogPosts[0],
  thankyou: sec.thankyou.variants.HirenzThankyou1,
  thankYou: sec.thankyou.variants.HirenzThankyou1,
  notFound: sec.notFound.variants.HirenzNotFound1,

  // Compatibility & Legacy Keys
  navbarData: sec.navbar.variants.HirenzNavbar1,
  footerData: sec.footer.variants.HirenzFooter1,
  pageTopSectionData: sec.pageTopSection.variants.HirenzPageTopSection1,
  heroData: sec.hero.variants.HirenzHero1,
  aboutData: sec.about.variants.HirenzAbout1,
  serviceData: sec.service.variants.HirenzService1,
  servicesData: sec.service.variants.HirenzService1,
  expertiesData: sec.experties.variants.HirenzExperties1,
  processData: sec.process.variants.HirenzProcess1,
  testimonialData: sec.testimonial.variants.HirenzTestimonial1,
  testimonialsData: sec.testimonial.variants.HirenzTestimonial1,
  blogData: sec.blog.variants.HirenzBlog1,
  jobsData: sec.jobs.variants.HirenzJobs1,
  applyNowData: sec.applyNow.variants.HirenzApplyNow1,
  contactData: sec.contact.variants.HirenzContact1,
  serviceDetailData: sec.service.variants.HirenzService1.servicesList[0],
  blogDetailData: sec.blog.variants.HirenzBlog1.blogPosts[0],
  thankyouData: sec.thankyou.variants.HirenzThankyou1,
  thankYouData: sec.thankyou.variants.HirenzThankyou1,
  notFoundData: sec.notFound.variants.HirenzNotFound1,

  // Root References
  Hirenz: siteData.Hirenz,
  Services: siteData.Hirenz,
};

export const siteMap = site;
export type SiteData = typeof site;
export default siteData;
