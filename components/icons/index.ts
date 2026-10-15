import React from "react";

// ── Common Icons ──
export * from "./common/ArrowRightIcon";
export * from "./common/ArrowLeftIcon";
export * from "./common/ChevronRightIcon";
export * from "./common/ChevronDownIcon";
export * from "./common/ChevronLeftIcon";
export * from "./common/CheckmarkIcon";
export * from "./common/CloseIcon";
export * from "./common/MenuIcon";
export * from "./common/UserIcon";
export * from "./common/PhoneIcon";
export * from "./common/MailIcon";
export * from "./common/MapPinIcon";
export * from "./common/ClockIcon";
export * from "./common/CalendarIcon";
export * from "./common/FileTextIcon";
export * from "./common/BriefcaseIcon";
export * from "./common/SearchIcon";
export * from "./common/UploadIcon";
export * from "./common/CheckCircleIcon";
export * from "./common/QuoteIcon";
export * from "./common/StarIcon";
export * from "./common/HomeIcon";

// ── Social Icons ──
export * from "./social/FacebookIcon";
export * from "./social/InstagramIcon";
export * from "./social/LinkedInIcon";
export * from "./social/YouTubeIcon";
export * from "./social/XSocialIcon";

// ── Service Icons ──
export * from "./services/PermanentRecruitmentIcon";
export * from "./services/ContractStaffingIcon";
export * from "./services/ExecutiveSearchIcon";
export * from "./services/RpoSolutionsIcon";
export * from "./services/HrConsultingIcon";
export * from "./services/PayrollManagementIcon";
export * from "./services/TalentMappingIcon";
export * from "./services/LeadershipHiringIcon";

// ── Industry Icons ──
export * from "./industries/TechnologyIcon";
export * from "./industries/HealthcareIcon";
export * from "./industries/ManufacturingIcon";
export * from "./industries/FinanceIcon";
export * from "./industries/RetailIcon";

// ── About Icons ──
export * from "./about/ExperienceIcon";
export * from "./about/PlacementsIcon";
export * from "./about/CorporateClientsIcon";

// ── Process Icons ──
export * from "./process/RequirementAnalysisIcon";
export * from "./process/SourcingScreeningIcon";
export * from "./process/InterviewEvaluationIcon";
export * from "./process/SelectionOnboardingIcon";

// ── Icon Registry for Dynamic String-based Icons ──
import ArrowRightIcon from "./common/ArrowRightIcon";
import ArrowLeftIcon from "./common/ArrowLeftIcon";
import ChevronRightIcon from "./common/ChevronRightIcon";
import ChevronDownIcon from "./common/ChevronDownIcon";
import ChevronLeftIcon from "./common/ChevronLeftIcon";
import CheckmarkIcon from "./common/CheckmarkIcon";
import CloseIcon from "./common/CloseIcon";
import MenuIcon from "./common/MenuIcon";
import UserIcon from "./common/UserIcon";
import PhoneIcon from "./common/PhoneIcon";
import MailIcon from "./common/MailIcon";
import MapPinIcon from "./common/MapPinIcon";
import ClockIcon from "./common/ClockIcon";
import CalendarIcon from "./common/CalendarIcon";
import FileTextIcon from "./common/FileTextIcon";
import BriefcaseIcon from "./common/BriefcaseIcon";
import SearchIcon from "./common/SearchIcon";
import UploadIcon from "./common/UploadIcon";
import CheckCircleIcon from "./common/CheckCircleIcon";
import QuoteIcon from "./common/QuoteIcon";
import StarIcon from "./common/StarIcon";
import HomeIcon from "./common/HomeIcon";

import FacebookIcon from "./social/FacebookIcon";
import InstagramIcon from "./social/InstagramIcon";
import LinkedInIcon from "./social/LinkedInIcon";
import YouTubeIcon from "./social/YouTubeIcon";
import XSocialIcon from "./social/XSocialIcon";

import PermanentRecruitmentIcon from "./services/PermanentRecruitmentIcon";
import ContractStaffingIcon from "./services/ContractStaffingIcon";
import ExecutiveSearchIcon from "./services/ExecutiveSearchIcon";
import RpoSolutionsIcon from "./services/RpoSolutionsIcon";
import HrConsultingIcon from "./services/HrConsultingIcon";
import PayrollManagementIcon from "./services/PayrollManagementIcon";
import TalentMappingIcon from "./services/TalentMappingIcon";
import LeadershipHiringIcon from "./services/LeadershipHiringIcon";

import TechnologyIcon from "./industries/TechnologyIcon";
import HealthcareIcon from "./industries/HealthcareIcon";
import ManufacturingIcon from "./industries/ManufacturingIcon";
import FinanceIcon from "./industries/FinanceIcon";
import RetailIcon from "./industries/RetailIcon";

import ExperienceIcon from "./about/ExperienceIcon";
import PlacementsIcon from "./about/PlacementsIcon";
import CorporateClientsIcon from "./about/CorporateClientsIcon";

import RequirementAnalysisIcon from "./process/RequirementAnalysisIcon";
import SourcingScreeningIcon from "./process/SourcingScreeningIcon";
import InterviewEvaluationIcon from "./process/InterviewEvaluationIcon";
import SelectionOnboardingIcon from "./process/SelectionOnboardingIcon";

export const iconRegistry: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  // Common
  arrowRight: ArrowRightIcon,
  arrowLeft: ArrowLeftIcon,
  chevronRight: ChevronRightIcon,
  chevronDown: ChevronDownIcon,
  chevronLeft: ChevronLeftIcon,
  checkmark: CheckmarkIcon,
  close: CloseIcon,
  menu: MenuIcon,
  user: UserIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  mapPin: MapPinIcon,
  clock: ClockIcon,
  calendar: CalendarIcon,
  fileText: FileTextIcon,
  briefcase: BriefcaseIcon,
  search: SearchIcon,
  upload: UploadIcon,
  checkCircle: CheckCircleIcon,
  quote: QuoteIcon,
  star: StarIcon,
  home: HomeIcon,

  // Social
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  x: XSocialIcon,
  twitter: XSocialIcon,

  // Services
  permanentRecruitment: PermanentRecruitmentIcon,
  contractStaffing: ContractStaffingIcon,
  executiveSearch: ExecutiveSearchIcon,
  rpoSolutions: RpoSolutionsIcon,
  hrConsulting: HrConsultingIcon,
  payrollManagement: PayrollManagementIcon,
  talentMapping: TalentMappingIcon,
  leadershipHiring: LeadershipHiringIcon,

  // Industries
  technology: TechnologyIcon,
  healthcare: HealthcareIcon,
  manufacturing: ManufacturingIcon,
  finance: FinanceIcon,
  retail: RetailIcon,

  // About & Stats
  experience: ExperienceIcon,
  placements: PlacementsIcon,
  corporateClients: CorporateClientsIcon,
  trophy: CorporateClientsIcon,

  // Process
  requirementAnalysis: RequirementAnalysisIcon,
  sourcingScreening: SourcingScreeningIcon,
  interviewEvaluation: InterviewEvaluationIcon,
  selectionOnboarding: SelectionOnboardingIcon,
  handshake: SelectionOnboardingIcon,
};

export interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = iconRegistry[name];
  if (!IconComponent) return null;
  return React.createElement(IconComponent, props);
}

export default DynamicIcon;
