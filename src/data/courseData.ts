import { profileData } from "@/data/profile";
import { socialsData } from "@/data/socials";

export interface CurriculumWeek {
  weekNumber: number;
  titleEn: string;
  titleBn: string;
  summaryEn: string;
  summaryBn: string;
  topicsEn: string[];
  topicsBn: string[];
  outcomeEn: string;
  outcomeBn: string;
}

export interface CurriculumMonth {
  monthNumber: number;
  titleEn: string;
  titleBn: string;
  taglineEn: string;
  taglineBn: string;
  accentColor: string;
  badgeEn: string;
  badgeBn: string;
  weeks: CurriculumWeek[];
}

export interface CourseOutcome {
  id: string;
  icon: string;
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  highlightEn: string;
  highlightBn: string;
}

export interface AIToolFeature {
  name: string;
  categoryEn: string;
  categoryBn: string;
  roleEn: string;
  roleBn: string;
  icon: string;
  tag: string;
}

export interface StudentProject {
  id: string;
  titleEn: string;
  titleBn: string;
  categoryEn: string;
  categoryBn: string;
  descriptionEn: string;
  descriptionBn: string;
  deliverablesEn: string[];
  deliverablesBn: string[];
  techStack: string[];
  badgeEn: string;
  badgeBn: string;
  accentColor: string;
}

export interface FAQItem {
  id: string;
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
  category: "curriculum" | "prerequisites" | "career" | "logistics";
}

export interface BenefitItem {
  id: string;
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  badgeEn: string;
  badgeBn: string;
  icon: string;
}

export interface LearningPillar {
  number: string;
  titleEn: string;
  titleBn: string;
  taglineEn: string;
  taglineBn: string;
  skillsEn: string[];
  skillsBn: string[];
  outcomeEn: string;
  outcomeBn: string;
  accent: string;
}

export interface DeploymentStep {
  step: string;
  titleEn: string;
  titleBn: string;
  commandSnippet: string;
  descriptionEn: string;
  descriptionBn: string;
  keyDeliverableEn: string;
  keyDeliverableBn: string;
}

export interface ClientWorkflowStep {
  step: string;
  phaseEn: string;
  phaseBn: string;
  actionEn: string;
  actionBn: string;
  detailEn: string;
  detailBn: string;
}

export interface SaaSJourneyStep {
  step: string;
  titleEn: string;
  titleBn: string;
  phaseEn: string;
  phaseBn: string;
  descriptionEn: string;
  descriptionBn: string;
  milestoneEn: string;
  milestoneBn: string;
}

/**
 * Verified details of the Instructor / Mentor
 * Sourced directly from src/data/profile.ts, ventures.ts, resume.ts, and socials.ts
 */
export const mentorInfo = {
  name: profileData.name, // Abu Hosain
  personalBrand: "abuhosain.dev",
  titleEn: "Founder of NeexG & Systomex · Software Engineer",
  titleBn: "ফাউন্ডার, NeexG ও Systomex · সফটওয়্যার ইঞ্জিনিয়ার",
  experienceSummaryEn: "Approx. 4 years of practical hands-on engineering, product building & system architecture",
  experienceSummaryBn: "প্রায় ৪ বছরের প্র্যাকটিক্যাল সফটওয়্যার ইঞ্জিনিয়ারিং, প্রোডাক্ট বিল্ডিং ও সিস্টেম আর্কিটেকচার অভিজ্ঞতা",
  avatarImage: profileData.image, // Cloudinary photo
  fallbackImage: "/images/abu-hosain.jpg",
  bioEn: [
    "Abu Hosain is a full-stack software engineer and product architect with approximately 4 years of hands-on experience building mission-critical web applications, SaaS platforms, and e-commerce systems.",
    "He is the founder and CEO of NeexG (neexg.com), a web engineering and digital product agency, and the founder of Systomex (systomex.com), a bulk email sender and outreach marketing platform. He is also the co-founder of Oregent (oregent.com).",
    "A dual International Gold Medalist at the Innovation World Cup (IWC) and the International Invention and Innovation Competition (I3C), Abu Hosain holds a Diploma in Computer Science & Technology from Bogura Polytechnic Institute.",
    "His teaching philosophy is strictly production-oriented: No abstract toy clones or useless to-do lists. You build real platforms, integrate modern AI workflows (Cursor, Google Antigravity, Claude, v0), ship production apps to Vercel, and learn how to deliver value to paying clients."
  ],
  bioBn: [
    "আবু হোসাইন একজন ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার ও প্রোডাক্ট আর্কিটেক্ট, যার রয়েছে প্রায় ৪ বছরের বাস্তবভিত্তিক সফটওয়্যার ইঞ্জিনিয়ারিং, স্কেলেবল ওয়েব অ্যাপ্লিকেশন, SaaS প্রোডাক্ট এবং ই-কমার্স সিস্টেম আর্কিটেকচারের অভিজ্ঞতা।",
    "তিনি ডিজিটাল প্রোডাক্ট ও সফটওয়্যার এজেন্সি NeexG (neexg.com)-এর প্রতিষ্ঠাতা ও প্রধান নির্বাহী (CEO), এবং বাল্ক ইমেইল সেন্ডার প্ল্যাটফর্ম Systomex (systomex.com)-এর প্রতিষ্ঠাতা। এছাড়াও তিনি ফ্যাশন ও লাইফস্টাইল ব্র্যান্ড Oregent (oregent.com)-এর কো-ফাউন্ডার।",
    "তিনি Innovation World Cup (IWC) এবং International Invention and Innovation Competition (I3C)-এ দ্বৈত আন্তর্জাতিক স্বর্ণপদক (Dual Gold Medalist) অর্জনকারী। তিনি বগুড়া পলিটেকনিক ইনস্টিটিউট থেকে কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজিতে (CST) ডিপ্লোমা সম্পন্ন করেছেন।",
    "তার মেন্টরশিপের মূল দর্শন হলো বাস্তবমুখী ও প্রোডাকশন-ফার্স্ট শেখানো: কোনো ডামি বা খেলনা প্রজেক্ট নয়। সরাসরি লাইভ প্ল্যাটফর্ম তৈরি, আধুনিক AI টুলস (Cursor, Google Antigravity, Claude, v0)-এর মাধ্যমে সুপারফাস্ট ডেভেলপমেন্ট, Vercel ক্লাউড ডিপ্লয়মেন্ট এবং আন্তর্জাতিক ক্লায়েন্ট ডিলিংয়ের বাস্তব কৌশল শেখানো হবে।"
  ],
  credentials: [
    {
      titleEn: "Founder & CEO, NeexG",
      titleBn: "ফাউন্ডার ও সিইও, NeexG",
      orgEn: "neexg.com — Web & SaaS Agency",
      orgBn: "neexg.com — ওয়েব ও SaaS এজেন্সি",
      url: "https://neexg.com",
    },
    {
      titleEn: "Founder, Systomex",
      titleBn: "ফাউন্ডার, Systomex",
      orgEn: "systomex.com — Bulk Email Sender Platform",
      orgBn: "systomex.com — বাল্ক ইমেইল সেন্ডার প্ল্যাটফর্ম",
      url: "https://systomex.com",
    },
    {
      titleEn: "Co-Founder, Oregent",
      titleBn: "কো-ফাউন্ডার, Oregent",
      orgEn: "oregent.com — Modern Consumer Brand",
      orgBn: "oregent.com — মডার্ন কনজিউমার ব্র্যান্ড",
      url: "https://oregent.com",
    },
    {
      titleEn: "Dual International Gold Medalist",
      titleBn: "দ্বৈত আন্তর্জাতিক গোল্ড মেডেলিস্ট",
      orgEn: "IWC (Innovation World Cup) & I3C",
      orgBn: "IWC ও I3C আন্তর্জাতিক প্রতিযোগিতা",
      url: "https://abuhosain.dev#about",
    },
    {
      titleEn: "Diploma in CST",
      titleBn: "ডিপ্লোমা ইন সিএসটি",
      orgEn: "Bogura Polytechnic Institute",
      orgBn: "বগুড়া পলিটেকনিক ইনস্টিটিউট",
      url: "https://abuhosain.dev#about",
    },
    {
      titleEn: "Practical Experience",
      titleBn: "বাস্তব কাজের অভিজ্ঞতা",
      orgEn: "4 Years in Full-Stack & SaaS",
      orgBn: "ফুল-স্ট্যাক ও SaaS-এ প্রায় ৪ বছর",
      url: "https://abuhosain.dev#experience",
    },
  ],
  socials: {
    website: "https://abuhosain.dev",
    email: socialsData.email,
    whatsapp: socialsData.whatsappUrl,
    phone: socialsData.phone,
    facebook: "https://www.facebook.com/abuhosain25",
    youtube: "https://youtube.com/@hosainfo",
    neexg: "https://neexg.com",
    systomex: "https://systomex.com",
    oregent: "https://oregent.com",
  },
};

/**
 * Configurable Enrollment Link & Pricing details
 * Keeps enrollment URLs configurable instead of hardcoding non-working placeholders.
 */
export const enrollmentConfig = {
  // If external registration link is provided later, simply change this URL:
  directEnrollUrl: "#enroll-now",
  whatsappContactUrl: "https://wa.me/8801319539510?text=Hello%20Abu%20Hosain%2C%20I%20am%20interested%20in%20enrolling%20in%20your%20AI-Based%20Web%20Design%20%26%20Development%20course%20at%20E-LAE%20Ltd%20Bogura%20Branch.",
  whatsappPhoneFormatted: "+880 1319-539510",
  contactEmail: "abuhosainmin@gmail.com",
  batchInfo: {
    durationEn: "3 Months (12 Weeks)",
    durationBn: "৩ মাস (১২ সপ্তাহ)",
    modeEn: "In-Person Classroom & Lab (Bogura Branch) + Live Online & HD Archives",
    modeBn: "সরাসরি ক্লাসরুম ও কম্পিউটার ল্যাব (বগুড়া শাখা) + লাইভ অনলাইন ও স্থায়ী ব্যাকআপ",
    venueEn: "E-LAE Ltd, Bogura Branch (Subarna Tower, Khandar Bazar, Bogura - 5800)",
    venueBn: "ই-লার্নিং অ্যান্ড আর্নিং লিমিটেড, বগুড়া শাখা (সুবর্ণা টাওয়ার, খান্দার বাজার, বগুড়া - ৫৮০০)",
    seatsLimit: 15,
    supportEn: "Direct Mentorship, 1-on-1 Code Review & Lifetime Support",
    supportBn: "সরাসরি মেন্টরশিপ, ১-অন-১ কোড রিভিউ ও লাইফটাইম সাপোর্ট",
  },
};

/**
 * Official Host & Training Partner: E-Learning and Earning Ltd. (E-LAE Ltd.)
 * Over 65+ branches across Bangladesh with physical classes at Bogura Branch.
 */
export const partnerInstituteData = {
  nameEn: "E-Learning & Earning Ltd. (E-LAE Ltd.)",
  nameBn: "ই-লার্নিং অ্যান্ড আর্নিং লিমিটেড (E-LAE Ltd.)",
  shortName: "E-LAE Ltd.",
  websiteUrl: "https://e-laeltd.com/",
  facebookUrl: "https://www.facebook.com/elaeltd.official",
  taglineEn: "Premier Freelancing & IT Training Institute in Bangladesh (Since 2013)",
  taglineBn: "বাংলাদেশের শীর্ষস্থানীয় ফ্রিল্যান্সিং ও আইটি ট্রেনিং ইনস্টিটিউট (২০১৩ থেকে)",
  totalBranchesEn: "65+ Branches Nationwide",
  totalBranchesBn: "সারাদেশে ৬৫+ ব্রাঞ্চের বিশাল নেটওয়ার্ক",
  descriptionEn:
    "With over 65+ physical branches across Bangladesh, E-Learning & Earning Ltd. has been the premier IT training and freelancing institute since 2013, empowering over 100,000+ students and producing tens of thousands of successful freelancers and entrepreneurs.",
  descriptionBn:
    "সারাদেশে ৬৫টিরও বেশি ব্রাঞ্চের সুবিশাল নেটওয়ার্ক নিয়ে ২০১৩ সাল থেকে ই-লার্নিং অ্যান্ড আর্নিং লিমিটেড ১ লাখেরও বেশি শিক্ষার্থীকে বাস্তবমুখী আইটি প্রশিক্ষণ প্রদান করেছে এবং ৪২,১০০+ সফল ফ্রিল্যান্সার ও ৪,০০০+ উদ্যোক্তা তৈরি করেছে।",

  // 4 Verified Achievement metrics from official records
  achievements: [
    {
      count: "4,000 +",
      labelEn: "Entrepreneurs",
      labelBn: "উদ্যোক্তা তৈরি",
      descEn: "Successful digital founders & tech agency owners",
      descBn: "সফল ডিজিটাল বিজনেস ও এজেন্সি ফাউন্ডার",
    },
    {
      count: "42,100 +",
      labelEn: "Successful Freelancers",
      labelBn: "সফল ফ্রিল্যান্সার",
      descEn: "Active on Upwork, Fiverr & global remote contracts",
      descBn: "আপওয়ার্ক, ফাইভার ও গ্লোবাল রিমোট মার্কেটে কর্মরত",
    },
    {
      count: "18,000 +",
      labelEn: "Job Placement",
      labelBn: "জব প্লেসমেন্ট",
      descEn: "Employed in software firms & corporate tech sectors",
      descBn: "দেশ-বিদেশের শীর্ষ সফটওয়্যার কোম্পানি ও প্রতিষ্ঠানে নিযুক্ত",
    },
    {
      count: "100,000 +",
      labelEn: "Students Trained",
      labelBn: "প্রশিক্ষিত শিক্ষার্থী",
      descEn: "Quality practical IT education delivered since 2013",
      descBn: "বাস্তবমুখী প্রজেক্টভিত্তিক দক্ষতায় সমৃদ্ধ গ্র্যাজুয়েট",
    },
  ],

  // Bogura Branch Venue Details
  boguraBranch: {
    branchNameEn: "Bogura Branch Campus",
    branchNameBn: "বগুড়া শাখা ক্যাম্পাস",
    locationEn: "Subarna Tower (2 Towers), Khandar Bazar, Bogura Sadar, Bogura, Bangladesh - 5800",
    locationBn: "সুবর্ণা টাওয়ার (২ টাওয়ার্স), খান্দার বাজার, বগুড়া সদর, বগুড়া, বাংলাদেশ - ৫৮০০",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Subarna+Tower+Khandar+Bazar+Bogura",
    facebookPageUrl: "https://www.facebook.com/elaeltd.bogura/",
    phone: "01550-666900",
    labHighlightsEn: [
      "High-spec workstations with high-speed dedicated optical fiber",
      "Direct 1-on-1 desk mentoring & in-person code reviews with Abu Hosain",
      "Free offline lab practice hours outside of scheduled class times",
      "Fully air-conditioned presentation hall & modern dev environment",
    ],
    labHighlightsBn: [
      "উচ্চগতির ডেডিকেটেড ফাইবার অপটিক ইন্টারনেট ও হাই-কনফিগারেশন কম্পিউটার ল্যাব",
      "ক্লাসে আবু হোসাইনের সাথে সরাসরি ফেস-টু-ফেস ডেস্ক কোড রিভিউ ও গাইডেন্স",
      "ক্লাসের বাইরে শিক্ষার্থীদের জন্য উন্মুক্ত ফ্রি ল্যাব প্র্যাকটিস সুবিধা",
      "শীতাতপ নিয়ন্ত্রিত আধুনিক প্রেজেন্টেশন ও কোডিং কোলাবোরেশন পরিবেশ",
    ],
  },

  // Other In-Demand Courses Available at Bogura Branch
  otherCourses: [
    {
      id: "graphics-design",
      titleEn: "Professional Graphics Design",
      titleBn: "প্রফেশনাল গ্রাফিক্স ডিজাইন",
      categoryEn: "Creative & Branding",
      categoryBn: "ক্রিয়েটিভ ও ব্র্যান্ডিং",
      badgeEn: "Industry Standard",
      badgeBn: "জনপ্রিয় কোর্স",
      skillsEn: "Photoshop · Illustrator · Logo Design · Brand Identity · Print Media",
      skillsBn: "ফটোশপ · ইলাস্ট্রেটর · লোগো ও ব্র্যান্ড আইডেন্টিটি · সোশ্যাল মিডিয়া কিট",
      descriptionEn:
        "Master commercial visual communication, brand design guidelines, vector illustrations, and print collateral from scratch.",
      descriptionBn:
        "কমার্শিয়াল ভিজ্যুয়াল ডিজাইন, ব্র্যান্ড গাইডলাইন, ভেক্টর আর্ট ও প্রিন্ট মিডিয়ার প্রফেশনাল কাজ স্ক্র্যাচ থেকে শিখুন।",
    },
    {
      id: "ai-ad-making",
      titleEn: "AI Ad Making & Creative Media",
      titleBn: "AI অ্যাড মেকিং ও ক্রিয়েটিভ মিডিয়া",
      categoryEn: "Generative AI",
      categoryBn: "আধুনিক AI প্রোডাকশন",
      badgeEn: "High ROI",
      badgeBn: "লেটেস্ট টেক",
      skillsEn: "Midjourney · Runway Gen-3 · AI Video Generation · Prompting · CapCut Pro",
      skillsBn: "Midjourney · Runway Gen-3 · AI স্ক্রিপ্ট ও প্রম্পটিং · হাই-কনভার্সন ভিডিও অ্যাডস",
      descriptionEn:
        "Produce studio-grade commercial advertisements, product promos, and social media video ads using cutting-edge generative AI.",
      descriptionBn:
        "জেনারেটিভ এআই দিয়ে ফেসবুক ও ইউটিউবের জন্য হাই-কনভার্সন প্রফেশনাল ভিডিও ও ব্যানার অ্যাড মেকিং শিখুন।",
    },
    {
      id: "video-editing",
      titleEn: "Advanced Video Editing & Motion",
      titleBn: "অ্যাডভান্সড ভিডিও এডিটিং ও মোশন",
      categoryEn: "Post-Production",
      categoryBn: "পোস্ট-প্রোডাকশন",
      badgeEn: "High Demand",
      badgeBn: "হাই-ডিমান্ডিং",
      skillsEn: "Premiere Pro · After Effects · Sound FX · Color Science · Viral Reels Pacing",
      skillsBn: "প্রিমিয়ার প্রো · আফটার ইফেক্টস · সাউন্ড ডিজাইন · কালার গ্রেডিং · ভাইরাল রিলস পেসিং",
      descriptionEn:
        "Professional workflows for cinematic documentaries, viral YouTube short-form reels, sound mastering, and motion graphics.",
      descriptionBn:
        "ইউটিউব কনটেন্ট, রিলস/শর্টস, সিনেমেটিক কালার কারেকশন এবং মোশন গ্রাফিক্সের প্রফেশনাল পোস্ট-প্রোডাকশন মাস্টারি।",
    },
    {
      id: "digital-marketing",
      titleEn: "Performance Digital Marketing",
      titleBn: "পারফরম্যান্স ডিজিটাল মার্কেটিং",
      categoryEn: "Growth & Traffic",
      categoryBn: "গ্রোথ ও ই-কমার্স",
      badgeEn: "Career Ready",
      badgeBn: "মার্কেট লিডার",
      skillsEn: "Meta Ads Manager · Google PPC · SEO Strategy · Conversion Funnels · Retargeting",
      skillsBn: "মেটা ও গুগল অ্যাডস · কনভার্সন ট্র্যাকিং · এসইও স্ট্র্যাটেজি · সেলস ফানেল",
      descriptionEn:
        "Run high-ROI performance marketing campaigns, optimize ad spend, generate scalable B2B/B2C leads, and build client funnels.",
      descriptionBn:
        "টার্গেটেড অডিয়েন্স রিসার্চ, লিড জেনারেশন, অ্যাড বাজেট অপটিমাইজেশন ও বিজনেস গ্রোথ স্ট্র্যাটেজি দিয়ে ক্লায়েন্ট ক্যাম্পেইন।",
    },
    {
      id: "ai-automation",
      titleEn: "AI Automation & No-Code Systems",
      titleBn: "AI অটোমেশন ও নো-কোড সিস্টেমস",
      categoryEn: "Systems Engineering",
      categoryBn: "ওয়ার্কফ্লো অটোমেশন",
      badgeEn: "Future-Proof",
      badgeBn: "ফিউচার স্কিল",
      skillsEn: "Make.com · n8n · Zapier · Custom AI Chatbots · Webhooks · CRM Integration",
      skillsBn: "Make.com · n8n · Zapier · কাস্টম এআই চ্যাটবট · CRM অটোমেশন",
      descriptionEn:
        "Build autonomous enterprise workflows, intelligent customer care chatbots, and automated lead processing pipelines without writing code.",
      descriptionBn:
        "কোনো জটিল কোডিং ছাড়াই বিজনেস প্রসেস অটোমেশন, সেলস পাইপলাইন ও ইন্টেলিজেন্ট এআই চ্যাটবট সিস্টেম তৈরি।",
    },
  ],
};

/**
 * 3-Month Curriculum with Week-by-Week granularity
 */
export const curriculumMonths: CurriculumMonth[] = [
  {
    monthNumber: 1,
    titleEn: "Modern Web Foundations, Responsive Systems & JavaScript Mastery",
    titleBn: "মডার্ন ওয়েব ফাউন্ডেশন, রেসপনসিভ সিস্টেমস ও জাভাস্ক্রিপ্ট মাস্টারি",
    taglineEn: "Build high-conversion layouts, understand core DOM rendering, and write clean, modern ES6+ code.",
    taglineBn: "হাই-কনভার্সন লেআউট ডিজাইন, ব্রাউজার ইন্টারনালস এবং আধুনিক জাভাস্ক্রিপ্ট দিয়ে নিখুঁত কোডিং।",
    accentColor: "#3B82F6",
    badgeEn: "Month 1 · Foundations",
    badgeBn: "১ম মাস · বেসিক থেকে অ্যাডভান্সড",
    weeks: [
      {
        weekNumber: 1,
        titleEn: "Semantic HTML5, CSS3 Architecture & Fluid Layouts",
        titleBn: "সিম্যান্টিক HTML5, মডার্ন CSS3 ও ফ্লুইড রেসপনসিভ লেআউট",
        summaryEn: "Master modern document structuring, accessibility (WCAG), CSS Box Model, Flexbox, and CSS Grid systems for robust responsive foundations.",
        summaryBn: "সঠিক সিম্যান্টিক কাঠামো, অ্যাক্সেসিবিলিটি (WCAG), CSS বক্স মডেল, ফ্লেক্সবক্স এবং সিএসএস গ্রিড দিয়ে যেকোনো ডিভাইসে পারফেক্ট লেআউট আর্কিটেকচার।",
        topicsEn: [
          "Semantic tags, DOM structure & SEO-friendly document hierarchy",
          "Advanced Flexbox & 2D CSS Grid layouts from scratch",
          "Mobile-first responsive design, clamp(), and fluid typography",
          "CSS Custom Properties (Variables), BEM naming & maintainable styles",
        ],
        topicsBn: [
          "সিম্যান্টিক ট্যাগ, DOM আর্কিটেকচার ও সার্চ ইঞ্জিন ফ্রেন্ডলি ডকুমেন্ট হায়ারার্কি",
          "অ্যাডভান্সড ফ্লেক্সবক্স এবং 2D সিএসএস গ্রিড লেআউট মাস্টারি",
          "মোবাইল-ফার্স্ট রেসপনসিভ ডিজাইন, clamp() ও ফ্লুইড টাইপোগ্রাফি",
          "CSS ভেরিয়েবল, ডিজাইন টোকেন ও মেইনটেইনেবল আর্কিটেকচার",
        ],
        outcomeEn: "Design and code a pixel-perfect, fully responsive landing page without relying on heavy frameworks.",
        outcomeBn: "কোনো ভারী ফ্রেমওয়ার্ক ছাড়াই স্ক্র্যাচ থেকে একটি সম্পূর্ণ রেসপনসিভ আধুনিক ল্যান্ডিং পেজ তৈরি করা।",
      },
      {
        weekNumber: 2,
        titleEn: "Tailwind CSS Pro Workflows & Modern Design Systems",
        titleBn: "টেইলউইন্ড সিএসএস প্রো ওয়ার্কফ্লো ও আধুনিক ডিজাইন সিস্টেম",
        summaryEn: "Adopt the industry-standard utility-first CSS framework with custom theme tokens, dark mode toggle, and micro-interactions.",
        summaryBn: "বর্তমান গ্লোবাল ইন্ডাস্ট্রির সেরা ইউটিলিটি-ফার্স্ট সিএসএস ফ্রেমওয়ার্ক দিয়ে দ্রুত, কাস্টম থিম ও ডার্ক মোড সংবলিত আকর্ষণীয় ইন্টারফেস তৈরি।",
        topicsEn: [
          "Utility-first mindset vs traditional CSS, Tailwind configuration",
          "Custom design tokens: brand colors, typography scales, spacing & shadows",
          "Dark mode strategies (class-based & media-query based)",
          "Tailwind animation utilities, hover states, transitions & component extraction",
        ],
        topicsBn: [
          "ইউটিলিটি-ফার্স্ট কনসেপ্ট বনাম ট্র্যাডিশনাল সিএসএস এবং টেইলউইন্ড কনফিগ",
          "কাস্টম ডিজাইন টোকেন: ব্র্যান্ড কালার, ফন্ট স্কেল, স্পেসিং ও শ্যাডো সিস্টেম",
          "প্রফেশনাল ডার্ক মোড সিস্টেম ইমপ্লিমেন্টেশন",
          "ট্রানজিশন, স্মুথ অ্যানিমেশন এবং রিইউজেবল কম্পোনেন্ট স্ট্রাকচারিং",
        ],
        outcomeEn: "Build a sleek SaaS landing page UI using Tailwind CSS with instant dark/light mode toggle.",
        outcomeBn: "টেইলউইন্ড সিএসএস ব্যবহার করে একটি আধুনিক ডার্ক-মোড সমৃদ্ধ SaaS ইউজার ইন্টারফেস তৈরি করা।",
      },
      {
        weekNumber: 3,
        titleEn: "Modern JavaScript (ES6+), Asynchronous Logic & DOM Internals",
        titleBn: "মডার্ন জাভাস্ক্রিপ্ট (ES6+), অ্যাসিঙ্ক লজিক ও ব্রাউজার DOM ইন্টারনালস",
        summaryEn: "Develop real programming muscle: ES6 modules, scopes, closures, higher-order functions, event delegation, Promises, and async/await.",
        summaryBn: "জাভাস্ক্রিপ্টের কোর কনসেপ্ট: স্কোপ, ক্লোজার, হাইয়ার-অর্ডার মেথডস, ইভেন্ট ডেলিগেশন, প্রমিস ও অ্যাসিঙ্ক/অ্যাওয়েট দিয়ে রিয়েল-ওয়ার্ল্ড ডেটা ফেচিং।",
        topicsEn: [
          "Variables (let, const), Arrow Functions, Destructuring & Rest/Spread",
          "Array & Object transformations (map, filter, reduce, sort, find)",
          "DOM Manipulation, Event Delegation & Custom Event Dispatchers",
          "Async JavaScript: Event loop, Callbacks, Promises, and async/await API calls",
        ],
        topicsBn: [
          "লেটেস্ট ES6+ সিনট্যাক্স, ডিস্ট্রাকচারিং, স্প্রেড অপারেটর ও অ্যারো ফাংশন",
          "অ্যারে ও অবজেক্টের পাওয়ারফুল মেথডস (map, filter, reduce, sort)",
          "ব্রাউজার DOM ম্যানিপুলেশন, ইভেন্ট ডেলিগেশন ও কাস্টম ইভেন্টস",
          "অ্যাসিঙ্ক্রোনাস জাভাস্ক্রিপ্ট, ইভেন্ট লুপ এবং থার্ড-পার্টি REST API ইন্টিগ্রেশন",
        ],
        outcomeEn: "Build an interactive, real-time weather & currency conversion dashboard consuming live public APIs.",
        outcomeBn: "লাইভ API থেকে ডেটা এনে ইনস্ট্যান্ট সার্চ ও ফিল্টারিং সহ একটি ইন্টারেক্টিভ ড্যাশবোর্ড তৈরি করা।",
      },
      {
        weekNumber: 4,
        titleEn: "Git Version Control, GitHub Collaboration & Dev Tooling",
        titleBn: "গিট ভার্সন কন্ট্রোল, গিটহাব কলাবোরেশন ও মডার্ন ডেভেলপার টুলস",
        summaryEn: "Adopt professional software engineering habits: branching strategies, commits, pull requests, terminal shortcuts, and package managers (npm, pnpm).",
        summaryBn: "ইন্ডাস্ট্রি স্ট্যান্ডার্ড সফটওয়্যার ডেভেলপমেন্ট অভ্যাস: ব্রাঞ্চিং, গিট ওয়ার্কফ্লো, পুল রিকোয়েস্ট, টার্মিনাল কমান্ড এবং প্যাকেজ ম্যানেজার মাস্টারি।",
        topicsEn: [
          "Git core: init, stage, commit, branch, merge, rebase & conflict resolution",
          "GitHub workflows, remote repos, README documentation & release tagging",
          "Node.js environment, npm scripts, dependencies vs devDependencies",
          "Clean code principles, ESLint basics, Prettier formatting & commit conventions",
        ],
        topicsBn: [
          "গিট কোর কমান্ডস: ইনিট, কমিট, ব্রাঞ্চিং, মার্জ ও মার্জ কনফ্লিক্ট সমাধান",
          "গিটহাব ওয়ার্কফ্লো, প্রজেক্ট ডকুমেন্টেশন ও ওপেন সোর্স কলাবোরেশন",
          "Node.js এনভায়রনমেন্ট এবং আধুনিক প্যাকেজ ম্যানেজার কনফিগারেশন",
          "ক্লিন কোড প্র্যাকটিস, লিন্টিং, ফরম্যাটিং ও প্রফেশনাল কমিট মেসেজিং",
        ],
        outcomeEn: "Publish a clean, open-source repository on GitHub with detailed documentation and automated formatting.",
        outcomeBn: "গিটহাবে প্রফেশনাল ডকুমেন্টেশন ও ক্লিন কোড সহ একটি প্রজেক্ট রিপোজিটরি পাবলিশ করা।",
      },
    ],
  },
  {
    monthNumber: 2,
    titleEn: "React 19, Next.js App Router & AI-Powered Development (Vibe Coding)",
    titleBn: "রিঅ্যাক্ট ১৯, নেক্সট জেএস অ্যাপ রাউটার ও AI-পাওয়ার্ড ডেভেলপমেন্ট (ভাইব কোডিং)",
    taglineEn: "Build full-scale frontend architectures and supercharge your velocity 5x using modern AI workflows.",
    taglineBn: "আধুনিক ফ্রন্টএন্ড আর্কিটেকচার এবং Cursor, Antigravity, Claude-এর সমন্বয়ে ৫ গুণ দ্রুত সফটওয়্যার তৈরি।",
    accentColor: "#10B981",
    badgeEn: "Month 2 · Full-Stack & AI",
    badgeBn: "২য় মাস · ফুল-স্ট্যাক ও এআই",
    weeks: [
      {
        weekNumber: 5,
        titleEn: "React 19 Core: Components, State, Hooks & Data Flow",
        titleBn: "রিঅ্যাক্ট ১৯ কোর: কম্পোনেন্টস, স্টেট, হুকস ও ডেটা ফ্লো",
        summaryEn: "Transition from imperative to declarative UI: JSX syntax, component lifecycles, useState, useEffect, custom hooks, and lifting state up.",
        summaryBn: "ডিক্লেয়ারেটিভ UI ডেভেলপমেন্ট: JSX, কম্পোনেন্ট লাইফসাইকেল, useState, useEffect, কাস্টম হুক্স এবং কম্পোনেন্ট ভিত্তিক আর্কিটেকচার।",
        topicsEn: [
          "JSX paradigms, Virtual DOM & reactive component rendering",
          "State management with useState, useReducer, and Context API",
          "Side effects, dependency arrays, cleanup functions & memoization",
          "Building production-ready custom hooks for window resize, debouncing & local storage",
        ],
        topicsBn: [
          "JSX কনসেপ্ট, রিঅ্যাক্ট রেন্ডারিং মেকানিজম ও কম্পোনেন্ট কম্পোজিশন",
          "useState, useReducer এবং Context API দিয়ে স্টেট হ্যান্ডলিং",
          "useEffect, ডিপেন্ডেন্সি অ্যারে ও পারফরম্যান্স অপটিমাইজেশন (useMemo, useCallback)",
          "রিয়েল-লাইফ কাজের জন্য কাস্টম হুক্স ডেভেলপমেন্ট",
        ],
        outcomeEn: "Construct a multi-step interactive booking and calculation tool with responsive real-time state.",
        outcomeBn: "রিয়েল-টাইম ভ্যালিডেশন ও স্টেট কন্ট্রোল সহ একটি মাল্টি-স্টেপ ইন্টারেক্টিভ ফর্ম তৈরি করা।",
      },
      {
        weekNumber: 6,
        titleEn: "Next.js App Router: Server Components, Actions & SEO Engine",
        titleBn: "নেক্সট জেএস অ্যাপ রাউটার: সার্ভার কম্পোনেন্টস, অ্যাকশনস ও ফুল SEO ইঞ্জিন",
        summaryEn: "Build blazingly fast full-stack applications with React Server Components (RSC), Next.js nested layouts, Server Actions, Dynamic Metadata & Opengraph.",
        summaryBn: "নেক্সট জেএস-এর অ্যাপ রাউটার, সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্টস, সার্ভার অ্যাকশনস, নেস্টেড লেআউট এবং সর্বোচ্চ লেভেলের এসইও অপটিমাইজেশন।",
        topicsEn: [
          "React Server Components (RSC) vs Client Components ('use client')",
          "File-system based routing: nested routes, dynamic segments, error & loading states",
          "Server Actions for form submissions and database updates without boilerplate APIs",
          "Dynamic Metadata, Robots.txt, Sitemap.xml generation & OpenGraph social previews",
        ],
        topicsBn: [
          "সার্ভার কম্পোনেন্টস ও ক্লায়েন্ট কম্পোনেন্টের পার্থক্য এবং সঠিক আর্কিটেকচার",
          "নেস্টেড রাউটিং, ডায়নামিক রুটস, লোডিং ও এরর হ্যান্ডলিং বাউন্ডারি",
          "সার্ভার অ্যাকশনস দিয়ে ব্যাকএন্ড কল এবং ডেটা মিউটেশন",
          "ডায়নামিক মেটাডেটা, সাইটম্যাপ, robots.txt এবং ওশান-গ্রেড ওপেন-গ্রাফ সোশ্যাল প্রিভিউ",
        ],
        outcomeEn: "Build a production-grade content platform with sub-second page loads and automated SEO configuration.",
        outcomeBn: "সর্বোচ্চ স্পিড ও ১০০% সার্চ ইঞ্জিন ফ্রেন্ডলি কনটেন্ট প্ল্যাটফর্ম তৈরি ও ডিপ্লয় করা।",
      },
      {
        weekNumber: 7,
        titleEn: "AI Tools, Prompt Engineering & Production 'Vibe Coding'",
        titleBn: "AI টুলস, প্রম্পট ইঞ্জিনিয়ারিং ও প্রোডাকশন 'ভাইব কোডিং' ওয়ার্কফ্লো",
        summaryEn: "Learn how senior engineers harness AI: Cursor IDE, Google Antigravity, Claude 3.7 Sonnet, v0 by Vercel, and deep system prompting to ship 10x faster.",
        summaryBn: "সিনিয়র ইঞ্জিনিয়ারদের মতো AI টুলস ব্যবহারের সঠিক গাইডলাইন: Cursor, Google Antigravity, Claude 3.7, v0 এবং সুনির্দিষ্ট সিস্টেম প্রম্পটিং টেকনিক।",
        topicsEn: [
          "The 'Vibe Coding' philosophy: guiding AI with architectural discipline, not blind generation",
          "Cursor AI setup: Composer, .cursorrules, codebase indexing & multi-file refactoring",
          "Google Antigravity & Claude: multi-agent pair programming, deep debugging & testing",
          "v0 by Vercel: rapid UI prototyping, turning design ideas into clean React/Tailwind code",
        ],
        topicsBn: [
          "'ভাইব কোডিং' দর্শন: অন্ধভাবে কপি-পেস্ট নয়, আর্কিটেকচারাল ডিসিপ্লিনের মাধ্যমে AI ড্রাইভ করা",
          "Cursor IDE সেটআপ: কম্পোজার, .cursorrules কনফিগ, মাল্টি-ফাইল অটোমেশন",
          "Google Antigravity ও Claude: মাল্টি-এজেন্ট পেয়ার প্রোগ্রামিং এবং ডিপ ডিবাগিং টেকনিক",
          "v0 দিয়ে ইনস্ট্যান্ট UI আইডিয়া থেকে ক্লিন প্রোডাকশন কোড জেনারেশন",
        ],
        outcomeEn: "Develop a complete interactive SaaS feature from scratch in under 3 hours using an integrated AI toolchain.",
        outcomeBn: "এআই টুলচেইনের সাহায্যে মাত্র ৩ ঘণ্টায় স্ক্র্যাচ থেকে একটি সম্পূর্ণ ফিচার সমৃদ্ধ ওয়েব মডিউল তৈরি করা।",
      },
      {
        weekNumber: 8,
        titleEn: "Backend Foundations: Node.js, REST APIs & Database Schemas",
        titleBn: "ব্যাকএন্ড ফাউন্ডেশন: Node.js, RESTful API এবং ডেটাবেস স্কিমা ডিজাইন",
        summaryEn: "Connect your frontends to persistent backends: Express.js, PostgreSQL/Supabase, MongoDB, JWT authentication, and secure API routes.",
        summaryBn: "ফ্রন্টএন্ডের সাথে রিয়েল ব্যাকএন্ডের মেলবন্ধন: Express.js, PostgreSQL/Supabase, MongoDB, সিকিউর JWT অথেনটিকেশন ও ডাটাবেজ রিলেশনশিপ।",
        topicsEn: [
          "Node.js architecture, Express middleware & REST API endpoint design",
          "Relational databases (PostgreSQL/Supabase) vs Document databases (MongoDB)",
          "Database modeling, foreign keys, migrations & CRUD operations",
          "User Authentication (JWT, secure HTTP-only cookies, password hashing with bcrypt)",
        ],
        topicsBn: [
          "Node.js ও Express দিয়ে স্কেলেবল REST API ডিজাইন ও মিডলওয়্যার",
          "PostgreSQL/Supabase এবং MongoDB ডেটাবেস স্কিমা প্ল্যানিং",
          "CRUD অপারেশনস, রিলেশনশিপস এবং কুয়েরি অপটিমাইজেশন",
          "JWT এবং সিকিউর কুকি দিয়ে ইউজার লগইন/রেজিস্ট্রেশন অথেনটিকেশন",
        ],
        outcomeEn: "Build a secured REST API backend with user registration, login, and protected resources.",
        outcomeBn: "সম্পূর্ণ সুরক্ষিত ইউজার অথেনটিকেশন সহ একটি ফুল-ফাংশনাল REST API ব্যাকএন্ড তৈরি করা।",
      },
    ],
  },
  {
    monthNumber: 3,
    titleEn: "Building a SaaS, Production Vercel Deployment & Freelance Business",
    titleBn: "রিয়েল SaaS তৈরি, Vercel ক্লাউড ডিপ্লয়মেন্ট এবং ফ্রিল্যান্সিং বিজনেস",
    taglineEn: "Take an ambitious idea all the way to cloud production on Vercel, launch, monetize, and land high-paying clients.",
    taglineBn: "একটি আইডিয়াকে Vercel ক্লাউডে ডিপ্লয় করা, SaaS তৈরি, মনিটাইজেশন এবং আন্তর্জাতিক ক্লায়েন্ট হ্যান্ডলিং।",
    accentColor: "#F59E0B",
    badgeEn: "Month 3 · Launch & Monetize",
    badgeBn: "৩য় মাস · লঞ্চ ও ক্যারিয়ার",
    weeks: [
      {
        weekNumber: 9,
        titleEn: "Building a SaaS Product: Idea to MVP Launch",
        titleBn: "আইডিয়া থেকে রিয়েল SaaS প্রোডাক্ট তৈরি ও MVP লঞ্চ",
        summaryEn: "Architect a multi-tenant micro-SaaS: subscription billing, user credits, tenant data isolation, onboarding workflows, and dashboard UI.",
        summaryBn: "একটি ফুল-ফিচার্ড মাইক্রো-SaaS আর্কিটেকচার: সাবস্ক্রিপশন প্ল্যান, ক্রেডিট সিস্টেম, মাল্টি-টেন্যান্ট লজিক ও ড্যাশবোর্ড ম্যানেজমেন্ট।",
        topicsEn: [
          "SaaS architecture fundamentals & user workspace separation",
          "Credit consumption engines & API rate-limiting per customer",
          "Payment gateway integration logic (Stripe, SSLCommerz, bKash API gateways)",
          "Customer onboarding, transactional emails & analytics instrumentation",
        ],
        topicsBn: [
          "SaaS আর্কিটেকচার এবং মাল্টি-ইউজার ওয়ার্কস্পেস স্ট্রাকচার",
          "ক্রেডিট সিস্টেম এবং কাস্টমার-ওয়াইজ API রেট লিমিটিং",
          "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন (Stripe, লোকাল ও ইন্টারন্যাশনাল গেটওয়ে)",
          "ইউজার অনবোর্ডিং, স্বয়ংক্রিয় ইমেইল ও ইউজার অ্যানালিটিক্স সেটআপ",
        ],
        outcomeEn: "Launch a functional SaaS MVP with user signup, payment tier gating, and active dashboard controls.",
        outcomeBn: "পেমেন্ট গেটওয়ে ও ড্যাশবোর্ড সহ একটি সম্পূর্ণ কার্যকর লাইভ SaaS MVP লঞ্চ করা।",
      },
      {
        weekNumber: 10,
        titleEn: "Production Cloud Deployment, Domains, DNS & Vercel Edge CI/CD",
        titleBn: "প্রোডাকশন ক্লাউড ডিপ্লয়মেন্ট, কাস্টম ডোমেইন, DNS ও Vercel এজ CI/CD",
        summaryEn: "Master modern deployment: automated GitHub-to-Vercel CI/CD pipelines, preview branch staging, custom domain DNS (A/CNAME records), SSL certificates, and production environment variables.",
        summaryBn: "বাস্তব প্রোডাকশন ডিপ্লয়মেন্ট: Vercel-এ গিটহাব পুশ-টু-ডিপ্লয় অটোমেশন, স্টেজিং প্রিভিউ ব্রাঞ্চ, কাস্টম ডোমেইন ও DNS কনফিগারেশন, অটো-রিনিউ SSL এবং এনভায়রনমেন্ট ভ্যারিয়েবল প্রটেকশন।",
        topicsEn: [
          "Modern Edge Hosting: Serverless execution, edge caching & global CDN on Vercel",
          "Automated Git CI/CD: Push-to-deploy pipelines, preview environments & branch testing",
          "Custom Domain DNS routing: Connecting .com/.dev domains via CNAME & A records",
          "Production Environment Security: Managing secret keys (.env.production) & zero-leak hygiene",
          "Vercel Analytics & Performance: Monitoring Core Web Vitals and sub-second response times",
        ],
        topicsBn: [
          "মডার্ন এজ হোস্টিং: Vercel-এর সার্ভারলেস এক্সিকিউশন, এজ ক্যাশিং ও গ্লোবাল CDN",
          "গিটহাব অটোমেটেড CI/CD: পুশ-টু-ডিপ্লয় পাইপলাইন, প্রিভিউ ব্রাঞ্চ ও টিম রিভিউ ফ্লো",
          "কাস্টম ডোমেইন DNS রাউটিং: CNAME ও A রেকর্ডস দিয়ে নিজস্ব ব্র্যান্ড ডোমেইন যুক্ত করা",
          "সিকিউর এনভায়রনমেন্ট ভ্যারিয়েবল: প্রোডাকশন সিক্রেট কি হ্যান্ডলিং ও লিকেজ প্রিভেনশন",
          "Vercel অ্যানালিটিক্স ও পারফরম্যান্স: কোর ওয়েব ভাইটালস মনিটরিং ও অপটিমাইজেশন",
        ],
        outcomeEn: "Deploy your full-stack Next.js app to Vercel production connected to a real custom domain with automated SSL.",
        outcomeBn: "কাস্টম ডোমেইন ও ফ্রি SSL সহ আপনার ফুল-স্ট্যাক প্রজেক্টটি Vercel-এর গ্লোবাল এজ ক্লাউডে সফলভাবে লাইভ লঞ্চ।",
      },
      {
        weekNumber: 11,
        titleEn: "Product Validation, Conversion Copywriting & Monetization",
        titleBn: "প্রোডাক্ট ভ্যালিডেশন, কনভার্সন কপিরাইটিং ও প্রফিটেবল মনিটাইজেশন",
        summaryEn: "Turn code into business: validating demand before coding, high-converting landing page copywriting, pricing strategies, and organic distribution.",
        summaryBn: "কোডিংকে সফল বিজনেসে রূপান্তর: প্রোডাক্ট ভ্যালিডেশন, কনভার্টিং কপিরাইটিং, সঠিক প্রাইসিং স্ট্র্যাটেজি এবং অর্গানিক মার্কেটিং ফানেল।",
        topicsEn: [
          "How to validate product ideas with real potential users before writing code",
          "High-converting landing page psychology: headline formulas, benefit-driven sections & social proof",
          "SaaS and agency pricing models: one-time vs recurring vs value-based pricing",
          "Organic launch channels: Product Hunt, Twitter/X build-in-public, LinkedIn & niche communities",
        ],
        topicsBn: [
          "কোড করার আগেই কীভাবে আইডিয়ার রিয়েল মার্কেট ডিমান্ড ভ্যালিডেট করবেন",
          "হাই-কনভার্সন ল্যান্ডিং পেজ কপিরাইটিং: হেডলাইন, বেনিফিট ফোকাসড সেকশন ও সোশ্যাল প্রুফ",
          "প্রাইসিং মডেল: ওয়ান-টাইম বনাম মান্থলি রিকারিং এবং ভ্যালু-বেসড প্রাইসিং",
          "প্রোডাক্ট লঞ্চিং স্ট্র্যাটেজি ও অর্গানিক কাস্টমার অ্যাকুইজিশন",
        ],
        outcomeEn: "Create a persuasive, launch-ready product landing page with clear pricing tiers and conversion funnels.",
        outcomeBn: "ক্লিয়ার প্রাইসিং ও সেলস ফানেল সহ একটি আকর্ষণীয় প্রোমোশনাল ল্যান্ডিং পেজ তৈরি করা।",
      },
      {
        weekNumber: 12,
        titleEn: "Freelancing, International Client Acquisition & Repeat Contracts",
        titleBn: "ফ্রিল্যান্সিং, আন্তর্জাতিক ক্লায়েন্ট পাওয়া, প্রপোজাল ও রিপিট বিজনেস",
        summaryEn: "Master the business of client work: Upwork/Fiverr optimization, direct cold outreach, high-converting proposals, scope protection, delivery, and retainers.",
        summaryBn: "সফল ফ্রিল্যান্সিং ক্যারিয়ার: মার্কেটপ্লেস ও ডিরেক্ট ক্লায়েন্ট হান্টিং, উইনিং প্রপোজাল লেখা, প্রজেক্ট প্রাইসিং, প্রজেক্ট হ্যান্ডওভার ও মান্থলি রিটেইনার।",
        topicsEn: [
          "Positioning yourself as a high-value Product Engineer rather than a cheap coder",
          "Upwork & direct outreach: writing irresistible, customized client proposals that get replies",
          "Project pricing & estimation: hourly vs fixed price vs milestone milestones",
          "Professional project delivery: Git handover, staging environments, documentation & video walkthroughs",
          "Turning one-time projects into monthly maintenance retainers ($500–$2,000/mo) and referral engines",
        ],
        topicsBn: [
          "মার্কেটে নিজেকে লো-পেইড কোডার নয়, হাই-ভ্যালু প্রোডাক্ট ইঞ্জিনিয়ার হিসেবে পজিশনিং",
          "উইনিং প্রপোজাল লেখার প্রমাণিত কৌশল যা ক্লায়েন্টদের বাধ্য করে রিপ্লাই দিতে",
          "সঠিক প্রজেক্ট প্রাইসিং ও এস্টিমেশন: মাইলস্টোন ভিত্তিক পেমেন্ট ও কন্ট্রাক্ট",
          "প্রফেশনাল প্রজেক্ট ডেলিভারি ও হ্যান্ডওভার গাইডলাইন (ডকুমেন্টেশন ও ভিডিও ওয়াকথ্রু)",
          "ক্লায়েন্ট থেকে মান্থলি মেইনটেন্যান্স রিটেইনার ও রিপিট প্রজেক্ট পাওয়ার পরীক্ষিত স্ট্র্যাটেজি",
        ],
        outcomeEn: "Draft a personalized client proposal, contract agreement, and project scope document ready for international pitching.",
        outcomeBn: "আন্তর্জাতিক ক্লায়েন্টকে পাঠানোর উপযোগী একটি সম্পূর্ণ প্রপোজাল, কন্ট্রাক্ট ও প্রজেক্ট স্কোপ রেডি করা।",
      },
    ],
  },
];

/**
 * Key learning outcomes
 */
export const learningOutcomes: CourseOutcome[] = [
  {
    id: "outcome-1",
    icon: "Code2",
    titleEn: "Production-Grade Full-Stack Engineering",
    titleBn: "প্রোডাকশন-গ্রেড ফুল-স্ট্যাক ইঞ্জিনিয়ারিং",
    descriptionEn: "Master modern HTML5, CSS3, JavaScript (ES6+), React 19, and Next.js App Router to craft lightning-fast web applications.",
    descriptionBn: "HTML5, CSS3, জাভাস্ক্রিপ্ট, রিঅ্যাক্ট ১৯ এবং নেক্সট জেএস দিয়ে যেকোনো কমপ্লেক্স ওয়েব অ্যাপ্লিকেশন তৈরির সম্পূর্ণ দক্ষতা।",
    highlightEn: "React 19 & Next.js",
    highlightBn: "রিঅ্যাক্ট ১৯ ও নেক্সট জেএস",
  },
  {
    id: "outcome-2",
    icon: "Sparkles",
    titleEn: "AI-Augmented Development & Vibe Coding",
    titleBn: "AI-অগমেন্টেড ডেভেলপমেন্ট ও ভাইব কোডিং",
    descriptionEn: "Harness Cursor AI, Google Antigravity, Claude 3.7, and v0 to architect, write, debug, and test code 5x to 10x faster with architectural precision.",
    descriptionBn: "Cursor, Google Antigravity, Claude এবং v0 ব্যবহার করে কোড কোয়ালিটি বজায় রেখে ৫ থেকে ১০ গুণ দ্রুত সফটওয়্যার ডেভেলপ করার টেকনিক।",
    highlightEn: "5x–10x Faster Output",
    highlightBn: "৫-১০ গুণ দ্রুত কাজ",
  },
  {
    id: "outcome-3",
    icon: "Rocket",
    titleEn: "SaaS Product Architecture & Monetization",
    titleBn: "রিয়েল SaaS প্রোডাক্ট আর্কিটেকচার ও লঞ্চ",
    descriptionEn: "Learn how to turn ambitious ideas into profitable SaaS products with authentication, database models, payment gateways, and tier gating.",
    descriptionBn: "আইডিয়া ভ্যালিডেশন থেকে শুরু করে অথেনটিকেশন, ডেটাবেস, পেমেন্ট গেটওয়ে এবং সাবস্ক্রিপশন সহ লাইভ SaaS তৈরি।",
    highlightEn: "Idea to Launch",
    highlightBn: "আইডিয়া থেকে রিয়েল প্রোডাক্ট",
  },
  {
    id: "outcome-4",
    icon: "Server",
    titleEn: "Production Cloud, Vercel & Custom Domains",
    titleBn: "প্রোডাকশন ক্লাউড, Vercel ও কাস্টম ডোমেইন",
    descriptionEn: "Master modern Next.js production deployments: connect GitHub repositories to Vercel, configure custom domain DNS, secure environment variables, and manage staging previews.",
    descriptionBn: "Next.js প্রজেক্ট সরাসরি Vercel-এ ডিপ্লয়, গিটহাব অটোমেটেড CI/CD, কাস্টম ডোমেইন DNS রাউটিং এবং সিকিউর এনভায়রনমেন্ট ভ্যারিয়েবল হ্যান্ডলিং।",
    highlightEn: "Vercel Edge & Zero Config",
    highlightBn: "Vercel এজ ও ইনস্ট্যান্ট লঞ্চ",
  },
  {
    id: "outcome-5",
    icon: "Briefcase",
    titleEn: "High-Ticket Freelancing & Client Workflows",
    titleBn: "হাই-টিকেট ফ্রিল্যান্সিং ও ক্লায়েন্ট বিজনেস",
    descriptionEn: "Craft winning proposals, negotiate high-value project fees, manage client expectations, and establish long-term monthly retainers.",
    descriptionBn: "ক্লায়েন্ট প্রপোজাল তৈরি, প্রজেক্ট প্রাইসিং, প্রফেশনাল হ্যান্ডওভার এবং ওয়ান-টাইম ক্লায়েন্ট থেকে মান্থলি রিটেইনার জেনারেট করার কৌশল।",
    highlightEn: "Global Client Dealing",
    highlightBn: "হাই-ভ্যালু ক্লায়েন্ট ডিলিং",
  },
  {
    id: "outcome-6",
    icon: "Layers",
    titleEn: "4+ Real Production Capstone Projects",
    titleBn: "৪+ লাইভ প্রোডাকশন পোর্টফোলিও প্রজেক্ট",
    descriptionEn: "Graduate with a standout portfolio of live, deployable applications rather than toy clones that impress employers and international clients.",
    descriptionBn: "কোনো খেলনা প্রজেক্ট নয়; ক্লায়েন্ট ও চাকরিদাতাদের মুগ্ধ করার মতো ৪টি লাইভ প্রোডাকশন-রেডি প্রজেক্ট যা আপনার পোর্টফোলিওকে করবে অসাধারণ।",
    highlightEn: "Real Live Proof",
    highlightBn: "প্রমাণিত লাইভ পোর্টফোলিও",
  },
];

/**
 * 4 Core Learning Pillars (Editorial Split Hierarchy)
 */
export const learningPillars: LearningPillar[] = [
  {
    number: "01",
    titleEn: "Modern Full-Stack Foundations",
    titleBn: "মডার্ন ফুল-স্ট্যাক ফাউন্ডেশন",
    taglineEn: "Semantic HTML5, CSS3, Tailwind CSS, JavaScript ES6+, React 19, and Next.js App Router.",
    taglineBn: "সিম্যান্টিক HTML5, মডার্ন CSS3, জাভাস্ক্রিপ্ট ES6+, রিঅ্যাক্ট ১৯ এবং নেক্সট জেএস অ্যাপ রাউটার।",
    skillsEn: ["Semantic Accessibility", "Component Architecture", "Server Components & SSR", "TypeScript Typing"],
    skillsBn: ["অ্যাক্সেসিবল মার্কআপ", "কম্পোনেন্ট আর্কিটেকচার", "সার্ভার কম্পোনেন্টস ও SSR", "টাইপস্ক্রিপ্ট টাইপিং"],
    outcomeEn: "Write clean, scalable frontend code that outperforms cookie-cutter templates in speed and structure.",
    outcomeBn: "টেম্পলেট নির্ভরতা ছাড়া স্ক্র্যাচ থেকে হাই-স্পিড ও স্কেলেবল ওয়েব ফ্রন্টএন্ড তৈরির পারদর্শিতা।",
    accent: "#3B82F6",
  },
  {
    number: "02",
    titleEn: "Disciplined AI Vibe Coding",
    titleBn: "ডিসিপ্লিন্ড AI ভাইব কোডিং",
    taglineEn: "Cursor AI (.cursorrules), Google Antigravity, Claude 3.7 Sonnet, and v0 Generative UI.",
    taglineBn: "Cursor AI (.cursorrules), Google Antigravity, Claude 3.7 Sonnet এবং v0 জেনারেটিভ UI।",
    skillsEn: ["Context Optimization (.cursorrules)", "Multi-File Automated Refactoring", "Autonomous Background Tasks", "Prompt Engineering for Systems"],
    skillsBn: [".cursorrules কনফিগারেশন", "মাল্টি-ফাইল অটোমেটেড কোডিং", "অটোনোমাস ব্যাকগ্রাউন্ড টাস্ক", "আর্কিটেকচারাল প্রম্পট ডিজাইন"],
    outcomeEn: "Build at 5x–10x velocity while retaining 100% architectural control and code review discipline.",
    outcomeBn: "অন্ধ কপি-পেস্ট নয়; আর্কিটেকচার নিয়ন্ত্রণে রেখে সিনিয়র ইঞ্জিনিয়ারের মতো ৫x–১০x স্পিডে কোড ডেলিভারি।",
    accent: "#00D2FE",
  },
  {
    number: "03",
    titleEn: "Production Cloud & Vercel Deployment",
    titleBn: "প্রোডাকশন ক্লাউড ও Vercel ডিপ্লয়মেন্ট",
    taglineEn: "Vercel edge deployment, automated GitHub CI/CD, custom domains, automated SSL, and environment configs.",
    taglineBn: "Vercel এজ ডিপ্লয়মেন্ট, অটোমেটেড গিটহাব CI/CD, কাস্টম ডোমেইন সেটআপ, ফ্রি SSL ও সিকিউর কনফিগারেশন।",
    skillsEn: ["Vercel Edge Network & Production Builds", "Automated GitHub CI/CD & Preview Branches", "Custom Domain Routing (A & CNAME Records)", "Environment Variables Security Hygiene"],
    skillsBn: ["Vercel এজ নেটওয়ার্ক ও প্রোডাকশন বিল্ড", "অটোমেটেড গিটহাব CI/CD ও প্রিভিউ ব্রাঞ্চ", "কাস্টম ডোমেইন রাউটিং (A ও CNAME রেকর্ডস)", "সিকিউর এনভায়রনমেন্ট ভ্যারিয়েবল প্রটেকশন"],
    outcomeEn: "Take apps beyond localhost: deploy production Next.js apps to Vercel's global edge network with custom domains.",
    outcomeBn: "লোকালহোস্টের গণ্ডি পেরিয়ে Vercel-এর গ্লোবাল এজ নেটওয়ার্কে কাস্টম ডোমেইন সহ নিমেষে লাইভ প্রজেক্ট ডিপ্লয়মেন্ট।",
    accent: "#10B981",
  },
  {
    number: "04",
    titleEn: "Client Engineering & Business",
    titleBn: "ক্লায়েন্ট ইঞ্জিনিয়ারিং ও বিজনেস",
    taglineEn: "Value-based proposals, milestone agreements, client communication, and recurring monthly retainers.",
    taglineBn: "ভ্যালু-বেসড প্রপোজাল, মাইলস্টোন চুক্তি, ক্লায়েন্ট কমিউনিকেশন এবং মান্থলি রিকারিং রিটেইনার।",
    skillsEn: ["Client Discovery & Problem Scoping", "Milestone Contracts & Pricing", "Post-Launch Handovers & Documentation", "Retainer Conversion ($500–$2,000/mo)"],
    skillsBn: ["ক্লায়েন্ট রিকোয়ারমেন্টস ম্যাপিং", "মাইলস্টোন কন্ট্রাক্ট ও প্রাইসিং", "প্রজেক্ট হ্যান্ডওভার ও ডকস", "মান্থলি রিটেইনার কনভার্সন"],
    outcomeEn: "Learn the exact client delivery systems used daily at NeexG to secure paying international clients.",
    outcomeBn: "NeexG এজেন্সিতে প্রতিদিন ব্যবহৃত ক্লায়েন্ট অনবোর্ডিং ও হাই-ভ্যালু প্রজেক্ট ক্লোজিংয়ের বাস্তব কৌশল।",
    accent: "#F59E0B",
  },
];

/**
 * Visual Deployment Pipeline (Code to Production)
 */
export const deploymentSteps: DeploymentStep[] = [
  {
    step: "01",
    titleEn: "Local Code & Build Hygiene",
    titleBn: "লোকাল কোড ও বিল্ড হাইজিন",
    commandSnippet: "npm run build && git status",
    descriptionEn: "Enforce strict TypeScript checks, bundle optimizations, and verify zero build errors before committing.",
    descriptionBn: "টাইপস্ক্রিপ্ট চেকিং, বান্ডেল অপটিমাইজেশন এবং এররবিহীন প্রোডাকশন বিল্ড ভ্যালিডেশন নিশ্চিত করা।",
    keyDeliverableEn: "Zero-error production build",
    keyDeliverableBn: "এররবিহীন প্রোডাকশন বিল্ড",
  },
  {
    step: "02",
    titleEn: "GitHub Version Control",
    titleBn: "গিটহাব ভার্সন কন্ট্রোল ও পুশ",
    commandSnippet: "git push origin main",
    descriptionEn: "Establish clean Git branch hygiene, commit conventions, and trigger automated webhook sync to Vercel.",
    descriptionBn: "ক্লিন গিট ব্রাঞ্চিং, প্রফেশনাল কমিট হিস্ট্রি এবং রিমোট রিপোজিটরিতে কোড পুশের সাথে সাথে অটো-বিল্ড ট্রিগার।",
    keyDeliverableEn: "Automated webhook trigger",
    keyDeliverableBn: "প্রটেক্টেড রিপোজিটরি ও অটো-সিঙ্ক",
  },
  {
    step: "03",
    titleEn: "Vercel Edge CI/CD Pipeline",
    titleBn: "Vercel এজ CI/CD পাইপলাইন",
    commandSnippet: "vercel --prod",
    descriptionEn: "Zero-config serverless build on Vercel: instant preview deployments, PR testing, and global edge network distribution.",
    descriptionBn: "Vercel-এ জিরো-কনফিগ সার্ভারলেস ক্লাউড বিল্ড, ক্লায়েন্টদের জন্য ইনস্ট্যান্ট প্রিভিউ লিংক এবং গ্লোবাল এজ ডিস্ট্রিবিউশন।",
    keyDeliverableEn: "Global edge CDN distribution",
    keyDeliverableBn: "গ্লোবাল এজ নেটওয়ার্ক ও প্রিভিউ ব্রাঞ্চ",
  },
  {
    step: "04",
    titleEn: "Automated SSL & Security",
    titleBn: "অটোমেটেড SSL ও সিকিউরিটি",
    commandSnippet: "https://your-app.vercel.app",
    descriptionEn: "Automatic wildcard SSL provisioning, HTTP/2 & HTTP/3 acceleration, and encrypted production environment variables.",
    descriptionBn: "অটো-জেনারেটেড ফ্রি SSL সার্টিফিকেট, HTTP/3 স্পিড অ্যাকসিলারেশন এবং সিকিউর এনভায়রনমেন্ট ভ্যারিয়েবল প্রটেকশন।",
    keyDeliverableEn: "A+ SSL & encrypted environment",
    keyDeliverableBn: "সম্পূর্ণ সুরক্ষিত HTTPS ও এনক্রিপশন",
  },
  {
    step: "05",
    titleEn: "Custom Domain & Global Live Launch",
    titleBn: "কাস্টম ডোমেইন ও ইনস্ট্যান্ট গ্লোবাল লঞ্চ",
    commandSnippet: "cname.vercel-dns.com",
    descriptionEn: "Connect your branded custom domain (.com, .dev) via DNS CNAME records with instant worldwide TTL propagation.",
    descriptionBn: "Cloudflare বা ডোমেইন প্রোভাইডারে DNS CNAME রেকর্ডস যুক্ত করে নিজস্ব ব্র্যান্ডের ডোমেইনে সেকেন্ডের মধ্যে লাইভ লঞ্চ।",
    keyDeliverableEn: "Live on custom domain worldwide",
    keyDeliverableBn: "আন্তর্জাতিকভাবে লাইভ কাস্টম ডোমেইন",
  },
];

/**
 * Freelancing & Client Management Workflow
 */
export const clientWorkflowSteps: ClientWorkflowStep[] = [
  {
    step: "01",
    phaseEn: "Client Discovery",
    phaseBn: "রিকোয়ারমেন্টস অ্যানালাইসিস",
    actionEn: "Uncover Business Bottlenecks",
    actionBn: "সমস্যা ও বিজনেসের গোল চিহ্নিত করা",
    detailEn: "Ask structured diagnostic questions to understand what the client actually needs (leads, sales, credibility), not just visual requests.",
    detailBn: "ক্লায়েন্ট শুধু কি চাইছে তা নয়, বরং তার বিজনেসের আসল সমস্যা ও আয়ের লক্ষ্য ডায়াগনোস করা।",
  },
  {
    step: "02",
    phaseEn: "Value Proposal",
    phaseBn: "উইনিং ভ্যালু প্রপোজাল",
    actionEn: "Frame Return on Investment",
    actionBn: "ROI-ফোকাসড প্রপোজাল তৈরি",
    detailEn: "Deliver a 2-page concise proposal framing the solution as an investment with clear deliverables, timeline, and value-based pricing.",
    detailBn: "কম্পিটিটরদের চেয়ে আলাদাভাবে ক্লায়েন্টের লাভ ও সমাধান তুলে ধরে নিখুঁত প্রপোজাল পাঠানো।",
  },
  {
    step: "03",
    phaseEn: "Milestone Agreement",
    phaseBn: "মাইলস্টোন চুক্তি ও ডিপোজিট",
    actionEn: "Protect Project Boundaries",
    actionBn: "অগ্রিম ডিপোজিট ও স্কোপ সুরক্ষা",
    detailEn: "Secure a 50% upfront milestone deposit before starting work, backed by a clear scope definition that prevents unpaid scope creep.",
    detailBn: "কাজ শুরুর আগেই ৫০% অগ্রিম ডিপোজিট নিশ্চিত করা এবং স্কোপ ক্রিপ প্রতিরোধে চুক্তি স্পষ্ট রাখা।",
  },
  {
    step: "04",
    phaseEn: "AI-Augmented Build",
    phaseBn: "এআই-অগমেন্টেড ডেভেলপমেন্ট",
    actionEn: "Execute at 5x–10x Velocity",
    actionBn: "দ্রুত ও নির্ভুল কোডিং এক্সিকিউশন",
    detailEn: "Leverage Cursor and Claude to build the complete production system in days rather than weeks, sharing staged preview links regularly.",
    detailBn: "Cursor ও Claude ব্যবহার করে কয়েক সপ্তাহের কাজ কয়েক দিনে শেষ করে স্টেজড প্রিভিউ দেওয়া।",
  },
  {
    step: "05",
    phaseEn: "Delivery & Handover",
    phaseBn: "কোয়ালিটি হ্যান্ডওভার ও ডকস",
    actionEn: "Create Unmatched Goodwill",
    actionBn: "ক্লায়েন্টকে ট্রেনিং ও হ্যান্ডওভার",
    detailEn: "Record a 5-minute Loom walkthrough explaining the dashboard, supply handover documentation, and collect the final 50% balance.",
    detailBn: "ভিডিও ওয়াকথ্রু ও সহজ ডকস দিয়ে প্রজেক্ট বুঝিয়ে দিয়ে ১০০% সন্তুষ্টির সাথে ফাইনাল পেমেন্ট গ্রহণ।",
  },
  {
    step: "06",
    phaseEn: "Recurring Retainer",
    phaseBn: "মান্থলি রিকারিং রিটেইনার",
    actionEn: "Secure Recurring Income",
    actionBn: "দীর্ঘমেয়াদী পার্টনারশিপ গঠন",
    detailEn: "Pitch ongoing maintenance, server monitoring, SEO tweaks, and feature iterations as a $300–$1,500/month recurring service.",
    detailBn: "সাইট মেইনটেন্যান্স, সার্ভার মনিটরিং ও নতুন ফিচার আপডেটের জন্য মান্থলি রিটেইনার পার্টনারশিপ।",
  },
];

/**
 * SaaS Product Development Journey
 */
export const saasJourneySteps: SaaSJourneyStep[] = [
  {
    step: "01",
    phaseEn: "Idea Validation",
    phaseBn: "আইডিয়া ভ্যালিডেশন",
    titleEn: "Solve a Painful, Recurring Need",
    titleBn: "বাস্তব সমস্যার সুনির্দিষ্ট সমাধান",
    descriptionEn: "Identify a specific operational headache for a niche group of users who already spend money trying to solve it.",
    descriptionBn: "ইউজারদের দৈনন্দিন এমন একটি সমস্যা খুঁজে বের করা যার জন্য তারা ইতিমধ্যে টাকা খরচ করতে প্রস্তুত।",
    milestoneEn: "Customer validation & clear value hook",
    milestoneBn: "কাস্টমার কনফার্মেশন ও ভ্যালু প্রপোজিশন",
  },
  {
    step: "02",
    phaseEn: "Razor-Thin MVP Scope",
    phaseBn: "রেজর-থিন MVP স্কোপিং",
    titleEn: "Cut Features Down to the Core 20%",
    titleBn: "অপ্রয়োজনীয় ফিচার বাদ দিয়ে মূল ফিচারে ফোকাস",
    descriptionEn: "Strip away vanity features: define the single core workflow that delivers 80% of the customer's perceived value on Day 1.",
    descriptionBn: "অতিরিক্ত ফিচার বাদ দিয়ে শুধু সেই কোর ফিচারটি সিলেক্ট করা যা ইউজারের প্রধান চাহিদা মেটাবে।",
    milestoneEn: "Single-workflow PRD & schema blueprint",
    milestoneBn: "একমুখী ওয়্যারফ্রেম ও ডেটা স্কিমা",
  },
  {
    step: "03",
    phaseEn: "AI-Accelerated Engineering",
    phaseBn: "AI-অ্যাক্সিলারেটেড ইঞ্জিনিয়ারিং",
    titleEn: "Ship the Core Engine in 72 Hours",
    titleBn: "৭২ ঘণ্টায় কোর আর্কিটেকচার তৈরি",
    descriptionEn: "Direct Cursor AI and Claude to scaffold Next.js App Router endpoints, Prisma/Supabase models, and Stripe/bKash webhooks.",
    descriptionBn: "Cursor ও Claude দিয়ে দ্রুত নেক্সট জেএস ব্যাকএন্ড, ডেটাবেস স্কিমা ও পেমেন্ট ওয়েবহুক রেডি করা।",
    milestoneEn: "Functional prototype with auth & database",
    milestoneBn: "অথেনটিকেশন ও ডেটাবেস সহ লাইভ প্রোটোটাইপ",
  },
  {
    step: "04",
    phaseEn: "Production Cloud Launch",
    phaseBn: "প্রোডাকশন ক্লাউড লঞ্চ",
    titleEn: "Deploy on Vercel Global Edge Network",
    titleBn: "Vercel এজ ক্লাউডে ইনস্ট্যান্ট লাইভ ডিপ্লয়মেন্ট",
    descriptionEn: "Deploy the SaaS on Vercel with automated preview branches, edge caching, encrypted production secrets, and custom domain routing.",
    descriptionBn: "Vercel ক্লাউড প্ল্যাটফর্মে অটোমেটেড ডিপ্লয়মেন্ট, এজ ক্যাশিং, সিকিউর ডেটাবেস কানেকশন এবং কাস্টম ডোমেইন সেটআপ দিয়ে লাইভ করা।",
    milestoneEn: "Production URL with sub-second latency",
    milestoneBn: "হাই-স্পিড সাব-সেকেন্ড লাইভ লিঙ্ক",
  },
  {
    step: "05",
    phaseEn: "Monetization & Feedback",
    phaseBn: "প্রথম ১০০ ইউজার ও আয়",
    titleEn: "Acquire the First 100 Paying Users",
    titleBn: "ইউজার ফিডব্যাক ও রিকারিং রেভিনিউ",
    descriptionEn: "Distribute through targeted communities, observe user analytics, iterate based on actual complaints, and optimize conversion.",
    descriptionBn: "টার্গেটেড কমিউনিটিতে শেয়ার, ইউজারদের অভিজ্ঞতা পর্যবেক্ষণ এবং ফিডব্যাকের ভিত্তিতে প্রোডাক্টের উন্নয়ন।",
    milestoneEn: "First dollar earned & recurring subscriptions",
    milestoneBn: "প্রথম পেইড সাবস্ক্রিপশন ও সক্রিয় ইউজারবেস",
  },
];

/**
 * AI Tools covered in the course
 */
export const aiToolsList: AIToolFeature[] = [
  {
    name: "Cursor AI",
    categoryEn: "AI Code Editor",
    categoryBn: "AI কোড এডিটর",
    roleEn: "Multi-file editing, codebase indexing, .cursorrules & full-repo refactoring",
    roleBn: "মাল্টি-ফাইল অটোমেশন, কোডবেস ইনডেক্সিং এবং প্রফেশনাল রিফ্যাক্টরিং",
    icon: "Cpu",
    tag: "Core Daily Driver",
  },
  {
    name: "Google Antigravity",
    categoryEn: "Agentic IDE & Tooling",
    categoryBn: "এজেন্টিক ডেভেলপমেন্ট টুল",
    roleEn: "Autonomous agent execution, automated web testing & deep code exploration",
    roleBn: "অটোনোমাস এজেন্ট এক্সেকিউশন, অটোমেটেড ওয়েব টেস্টিং ও ডিপ ডিবাগিং",
    icon: "Bot",
    tag: "Next-Gen Agentic Tool",
  },
  {
    name: "Claude 3.7 Sonnet",
    categoryEn: "Advanced Reasoning LLM",
    categoryBn: "অ্যাডভান্সড রিজনিং মডেল",
    roleEn: "System architecture, high-context debugging & complex logic generation",
    roleBn: "সিস্টেম আর্কিটেকচার প্ল্যানিং, জটিল লজিক ও নির্ভুল কোড রাইটিং",
    icon: "Brain",
    tag: "Architectural Engine",
  },
  {
    name: "v0 by Vercel",
    categoryEn: "Generative UI Studio",
    categoryBn: "জেনারেটিভ ইউআই স্টুডিও",
    roleEn: "Instant UI component synthesis, React + Tailwind prototypes in seconds",
    roleBn: "ইনস্ট্যান্ট UI কম্পোনেন্ট তৈরি, রিঅ্যাক্ট ও টেইলউইন্ডের ক্লিন প্রোডাকশন কোড",
    icon: "Layout",
    tag: "Rapid Prototyping",
  },
  {
    name: "ChatGPT & Prompt Engineering",
    categoryEn: "System Prompting",
    categoryBn: "সিস্টেম প্রম্পটিং ফ্রেমওয়ার্ক",
    roleEn: "Structured prompting frameworks, schema planning & workflow documentation",
    roleBn: "স্ট্রাকচার্ড প্রম্পট ফ্রেমওয়ার্ক, স্কিমা ডিজাইন ও ডকুমেন্টেশন",
    icon: "Terminal",
    tag: "Prompt Architecture",
  },
];

/**
 * Verified Real-World Projects by Abu Hosain (Distinguished from student projects!)
 */
export const verifiedMentorProjects = [
  {
    id: "neexg",
    title: "NeexG (neexg.com)",
    taglineEn: "Founder & CEO · Digital Product & Web Engineering Agency",
    taglineBn: "ফাউন্ডার ও সিইও · ডিজিটাল প্রোডাক্ট ও ওয়েব ইঞ্জিনিয়ারিং এজেন্সি",
    descriptionEn: "Abu Hosain's primary agency engineering bespoke SaaS platforms, multi-tenant portals, e-commerce storefronts, and AI automation systems for international and local businesses.",
    descriptionBn: "আবু হোসাইনের মূল প্রতিষ্ঠান, যার মাধ্যমে আন্তর্জাতিক ও লোকাল ক্লায়েন্টদের জন্য কাস্টম SaaS প্ল্যাটফর্ম, ই-কমার্স ও AI অটোমেশন সমাধান তৈরি করা হয়।",
    link: "https://neexg.com",
    badge: "Agency & SaaS",
    accentColor: "#2563EB",
  },
  {
    id: "systomex",
    title: "Systomex (systomex.com)",
    taglineEn: "Founder · High-Volume Bulk Email Sender & Email Infrastructure Platform",
    taglineBn: "ফাউন্ডার · হাই-ভলিউম বাল্ক ইমেইল সেন্ডার ও ইমেইল ইনফ্রাস্ট্রাকচার প্ল্যাটফর্ম",
    descriptionEn: "A high-performance bulk email sender engineered for automated bulk email marketing campaigns, cold outreach delivery, and contact list segmentation at scale.",
    descriptionBn: "আবু হোসাইনের তৈরি হাই-পারফরম্যান্স বাল্ক ইমেইল সেন্ডিং প্ল্যাটফর্ম—যার মাধ্যমে স্বয়ংক্রিয় বাল্ক ইমেইল ক্যাম্পেইন, ইনবক্স ডেলিভারেবিলিটি অপ্টিমাইজেশন এবং বৃহৎ কন্টাক্ট লিস্ট পরিচালনা করা যায়।",
    link: "https://systomex.com",
    badge: "Bulk Email SaaS",
    accentColor: "#059669",
  },
  {
    id: "obiram",
    title: "Obiram (obiram.io)",
    taglineEn: "Founding Engineer · Multi-Tenant E-Commerce SaaS Platform",
    taglineBn: "ফাউন্ডিং ইঞ্জিনিয়ার · মাল্টি-টেন্যান্ট ই-কমার্স SaaS প্ল্যাটফর্ম",
    descriptionEn: "A scalable multi-tenant SaaS where independent merchants instantly spin up branded online storefronts with unified product management, orders, and payment integrations.",
    descriptionBn: "একটি পূর্ণাঙ্গ মাল্টি-টেন্যান্ট SaaS যেখানে মার্চেন্টরা খুব সহজেই নিজেদের ব্র্যান্ডেড অনলাইন স্টোর তৈরি ও পরিচালনা করতে পারে।",
    link: "https://obiram.io",
    badge: "Multi-Tenant SaaS",
    accentColor: "#3B82F6",
  },
  {
    id: "evanio",
    title: "Evanio AI (evanio.ai)",
    taglineEn: "Full-Stack Engineer & AI Architect · Generative AI Creative Suite",
    taglineBn: "ফুল-স্ট্যাক ইঞ্জিনিয়ার ও এআই আর্কিটেক্ট · জেনারেটিভ এআই ক্রিয়েটিভ স্টুডিও",
    descriptionEn: "A generative AI suite engineered for creators with async job queue orchestration, user credit wallets, and subscription tiers.",
    descriptionBn: "ক্রিয়েটরদের জন্য জেনারেটিভ AI ইমেজ ও ভিডিও সিন্থেসিস প্ল্যাটফর্ম, যেখানে রয়েছে ক্রেডিট ওয়ালেট ও সাবস্ক্রিপশন সিস্টেম।",
    link: "https://evanio.ai",
    badge: "Generative AI SaaS",
    accentColor: "#8B5CF6",
  },
  {
    id: "flykorun",
    title: "FlyKorun (flykorun.com)",
    taglineEn: "Full-Stack Architect · Flight & Travel Booking Engine",
    taglineBn: "ফুল-স্ট্যাক আর্কিটেক্ট · ফ্লাইট ও ট্রাভেল বুকিং ইঞ্জিন",
    descriptionEn: "A modern travel tech platform engineered to streamline sub-second flight search, price aggregation, instant reservations, and admin operations.",
    descriptionBn: "সাব-সেকেন্ড সার্চ, মাল্টি-এয়ারলাইন ডেটা এবং ইনস্ট্যান্ট প্যাসেঞ্জার বুকিং সহ একটি রিয়েল-ওয়ার্ল্ড ট্রাভেল প্ল্যাটফর্ম।",
    link: "https://flykorun.com",
    badge: "Travel Tech",
    accentColor: "#0284C7",
  },
  {
    id: "typingboss",
    title: "TypingBoss (typingboss.com)",
    taglineEn: "Creator & Frontend Architect · High-Performance Typing Platform",
    taglineBn: "ক্রিয়েটর ও ফ্রন্টএন্ড আর্কিটেক্ট · হাই-পারফরম্যান্স টাইপিং প্ল্যাটফর্ম",
    descriptionEn: "Low-latency keystroke detection, real-time WPM/accuracy tracking, custom practice modules, and visual progress analytics built with React & TypeScript.",
    descriptionBn: "জিরো-ল্যাগ কি-স্ট্রোক ডিটেকশন এবং লাইভ অ্যাকুরেসি অ্যানালিটিক্স সংবলিত এডটেক প্ল্যাটফর্ম।",
    link: "https://typingboss.com",
    badge: "Interactive EdTech",
    accentColor: "#10B981",
  },
];

/**
 * Hands-On Projects Students will build during this course
 */
export const studentCapstoneProjects: StudentProject[] = [
  {
    id: "student-capstone-1",
    titleEn: "Modern High-Conversion Corporate & Portfolio Web Platform",
    titleBn: "হাই-কনভার্সন আধুনিক করপোরেট ও পোর্টফোলিও ওয়েব প্ল্যাটফর্ম",
    categoryEn: "Frontend & Design System",
    categoryBn: "ফ্রন্টএন্ড ও ডিজাইন সিস্টেম",
    descriptionEn: "Build a responsive, accessible portfolio and agency website with fluid typography, dark mode, smooth micro-interactions, contact forms, and 95+ Lighthouse scores.",
    descriptionBn: "ফ্লুইড টাইপোগ্রাফি, ডার্ক মোড, মসৃণ মাইক্রো-অ্যানিমেশন এবং ১০০% এসইও অপটিমাইজেশন সহ একটি সম্পূর্ণ রেসপনসিভ পোর্টফোলিও ও এজেন্সি ওয়েবসাইট তৈরি।",
    deliverablesEn: [
      "Custom Tailwind design tokens and accessible typography hierarchy",
      "Dynamic dark/light mode toggle with system preference detection",
      "Interactive project filtering, modal views & validated contact form",
      "Full SEO configuration: OpenGraph tags, sitemap, and robots.txt",
    ],
    deliverablesBn: [
      "কাস্টম টেইলউইন্ড ডিজাইন টোকেন এবং প্রফেশনাল টাইপোগ্রাফি",
      "সিস্টেম ডিটেকশন সহ ডার্ক/লাইট মোড টগল",
      "ইন্টারেক্টিভ প্রজেক্ট ফিল্টার, মডেল ভিউ এবং ভ্যালিডেটেড কনট্যাক্ট ফর্ম",
      "সম্পূর্ণ SEO মেটাডেটা, সাইটম্যাপ ও ওপেন-গ্রাফ প্রিভিউ",
    ],
    techStack: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    badgeEn: "Project 01 · Foundations",
    badgeBn: "প্রজেক্ট ০১ · ফাউন্ডেশনস",
    accentColor: "#3B82F6",
  },
  {
    id: "student-capstone-2",
    titleEn: "Full-Stack D2C E-Commerce Storefront & Admin Portal",
    titleBn: "ফুল-স্ট্যাক ই-কমার্স স্টোরফ্রন্ট ও অ্যাডমিন পোর্টাল",
    categoryEn: "Full-Stack Commerce",
    categoryBn: "ফুল-স্ট্যাক ই-কমার্স",
    descriptionEn: "Engineer a high-speed e-commerce storefront with category navigation, real-time cart state, checkout validation, payment gateway simulation, and an admin management dashboard.",
    descriptionBn: "মাল্টি-লেভেল ক্যাটাগরি, শপিং কার্ট, স্মুথ চেকআউট, পেমেন্ট গেটওয়ে এবং প্রোডাক্ট/অর্ডার ম্যানেজমেন্টের জন্য অ্যাডমিন ড্যাশবোর্ড সংবলিত ই-কমার্স প্ল্যাটফর্ম।",
    deliverablesEn: [
      "Catalog browsing with instant search, debounce filters & stock badges",
      "Client-side persistent cart synchronized with backend checkout session",
      "Payment gateway integration logic (Stripe & Local Gateway workflows)",
      "Admin panel to create, edit, delete products and view customer orders",
    ],
    deliverablesBn: [
      "ইনস্ট্যান্ট ফিল্টারিং ও সার্চ সহ ক্যাটাগরি ব্রাউজিং",
      "পারসিস্টেন্ট কার্ট ম্যানেজমেন্ট ও সুরক্ষিত চেকআউট ফ্লো",
      "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন লজিক (ইন্টারন্যাশনাল ও লোকাল গেটওয়ে)",
      "অর্ডার ও প্রোডাক্ট নিয়ন্ত্রণের পূর্ণাঙ্গ অ্যাডমিন প্যানেল",
    ],
    techStack: ["React 19", "Next.js", "Node.js", "PostgreSQL / MongoDB", "Tailwind CSS"],
    badgeEn: "Project 02 · Full-Stack",
    badgeBn: "প্রজেক্ট ০২ · ফুল-স্ট্যাক",
    accentColor: "#10B981",
  },
  {
    id: "student-capstone-3",
    titleEn: "AI-Powered Multi-Tenant Micro-SaaS with Credit Engine",
    titleBn: "AI-পাওয়ার্ড মাল্টি-টেন্যান্ট মাইক্রো-SaaS ও ক্রেডিট ইঞ্জিন",
    categoryEn: "AI & SaaS Engineering",
    categoryBn: "এআই ও SaaS ইঞ্জিনিয়ারিং",
    descriptionEn: "Build a real software-as-a-service application integrating LLM APIs (Claude/OpenAI), user credit wallet billing, authentication, and team workspaces built via Cursor & Antigravity vibe coding workflows.",
    descriptionBn: "Cursor এবং Google Antigravity-এর সাহায্যে দ্রুত কোড করে একটি রিয়েল মাইক্রো-SaaS তৈরি, যাতে থাকবে AI API ইন্টিগ্রেশন, ক্রেডিট সিস্টেম ও অথেনটিকেশন।",
    deliverablesEn: [
      "Secure user authentication (JWT / Session cookies) and workspace tenancy",
      "LLM streaming text/media generation endpoint with credit cost calculation",
      "Credit wallet recharge checkout flow & subscription tier gating",
      "User dashboard with generation history, export to PDF/Markdown, and analytics",
    ],
    deliverablesBn: [
      "সুরক্ষিত ইউজার লগইন/রেজিস্ট্রেশন এবং ওয়ার্কস্পেস সেপারেশন",
      "AI স্ট্রিমিং জেনারেশন এবং প্রতি রিকোয়েস্টে ক্রেডিট কাটার অটোমেশন",
      "ক্রেডিট রিচার্জ পেমেন্ট ফ্লো এবং সাবস্ক্রিপশন প্ল্যান রেস্ট্রিকশন",
      "ইউজার হিস্ট্রি, এক্সপোর্ট অপশন এবং ড্যাশবোর্ড অ্যানালিটিক্স",
    ],
    techStack: ["Next.js App Router", "TypeScript", "LLM APIs", "PostgreSQL / Supabase", "Cursor AI"],
    badgeEn: "Project 03 · SaaS Capstone",
    badgeBn: "প্রজেক্ট ০৩ · ফ্ল্যাগশিপ SaaS",
    accentColor: "#8B5CF6",
  },
  {
    id: "student-capstone-4",
    titleEn: "Production Vercel Cloud, Custom Domain & CI/CD Deployment",
    titleBn: "প্রোডাকশন Vercel ক্লাউড, কাস্টম ডোমেইন ও CI/CD ডিপ্লয়মেন্ট",
    categoryEn: "Cloud & Edge Deployment",
    categoryBn: "ক্লাউড ও এজ ডিপ্লয়মেন্ট",
    descriptionEn: "Connect GitHub repositories to Vercel, configure production environment variables (.env.production), attach a branded custom domain via DNS CNAME, and enable automated preview deployments for clients.",
    descriptionBn: "Next.js প্রজেক্ট সরাসরি Vercel-এ ডিপ্লয়, গিটহাব অটোমেটেড CI/CD, সিকিউর এনভায়রনমেন্ট ভ্যারিয়েবল এবং কাস্টম ডোমেইন যুক্ত করে বিশ্বজুড়ে লাইভ লঞ্চ।",
    deliverablesEn: [
      "Automated GitHub-to-Vercel CI/CD pipeline on push",
      "Branded custom domain (.com/.dev) DNS CNAME routing & instant SSL",
      "Production environment variables encryption and security isolation",
      "Staging preview branches for seamless client feedback workflows",
    ],
    deliverablesBn: [
      "গিট পুশ করার সাথে সাথে অটোমেটিক লাইভ বিল্ড ও CI/CD ডিপ্লয়মেন্ট",
      "কাস্টম ডোমেইন DNS CNAME ম্যাপিং ও অটোমেটেড ফ্রি SSL",
      "প্রোডাকশন এনভায়রনমেন্ট ভ্যারিয়েবল সিকিউরিটি ও আইসোলেশন",
      "ক্লায়েন্টদের প্রিভিউ দেখানোর জন্য স্টেজিং ব্রাঞ্চ রিভিউ ফ্লো",
    ],
    techStack: ["Vercel", "Next.js App Router", "GitHub CI/CD", "Custom DNS", "Edge Network"],
    badgeEn: "Project 04 · Production Cloud",
    badgeBn: "প্রজেক্ট ০৪ · ক্লাউড ডিপ্লয়মেন্ট",
    accentColor: "#F59E0B",
  },
];

/**
 * Realistic Student Benefits & Resources
 */
export const studentBenefits: BenefitItem[] = [
  {
    id: "benefit-1",
    titleEn: "Live Interactive Classes & Recorded Archives",
    titleBn: "লাইভ ইন্টারঅ্যাক্টিভ ক্লাস ও রেকর্ডেড আর্কাইভ",
    descriptionEn: "Participate in hands-on live code sessions with real-time question answering, backed up by permanent video recordings.",
    descriptionBn: "সরাসরি লাইভ সেশন যেখানে স্ক্রিন শেয়ারে হাতে-কলমে কোড করা শেখানো হবে, সাথে থাকবে লাইফটাইম রেকর্ডেড ক্লাসের অ্যাক্সেস।",
    badgeEn: "12 Weeks Live",
    badgeBn: "১২ সপ্তাহ লাইভ",
    icon: "Video",
  },
  {
    id: "benefit-2",
    titleEn: "Direct Mentorship by Abu Hosain",
    titleBn: "আবু হোসাইনের সরাসরি মেন্টরশিপ ও গাইডেন্স",
    descriptionEn: "Get your code reviewed directly by an experienced founder and engineer who has shipped live SaaS platforms and agency products.",
    descriptionBn: "কোনো থার্ড-পার্টি জুনিয়র ট্রেইনার নয়; সরাসরি আবু হোসাইনের কাছ থেকে কোড রিভিউ এবং প্রজেক্টের সমাধান পাবেন।",
    badgeEn: "1-on-1 Guidance",
    badgeBn: "সরাসরি সাপোর্ট",
    icon: "UserCheck",
  },
  {
    id: "benefit-3",
    titleEn: "Ready-to-Ship Production Boilerplates",
    titleBn: "প্রোডাকশন-রেডি স্টার্টার কিট ও বয়লারপ্লেট",
    descriptionEn: "Save dozens of hours with pre-configured Next.js, Tailwind, authentication, and database starter repositories built with strict TypeScript.",
    descriptionBn: "Next.js, Tailwind, ডাটাবেজ এবং অথেনটিকেশন সেটআপ করা রেডিমেড প্রোডাকশন রিপোজিটরি যা আপনার ডেভেলপমেন্টকে করবে সুপারফাস্ট।",
    badgeEn: "Boilerplates Included",
    badgeBn: "রেডি বয়লারপ্লেট",
    icon: "FileCode",
  },
  {
    id: "benefit-4",
    titleEn: "AI Coding Playbooks & Tested Prompts",
    titleBn: "টেস্টেড AI প্রম্পট লাইব্রেরি ও ভাইব কোডিং প্লেবুক",
    descriptionEn: "Access Abu Hosain's proprietary system prompts and .cursorrules templates for Cursor, Antigravity, and Claude to build software at 5x speed.",
    descriptionBn: "Cursor, Antigravity ও Claude-এর জন্য তৈরি স্পেশাল সিস্টেম প্রম্পট ও .cursorrules কনফিগ ফাইল যা দিয়ে আপনি যেকোনো ফিচার নিমেষে নামাতে পারবেন।",
    badgeEn: "AI Playbooks",
    badgeBn: "প্রাইভেট প্রম্পট প্যাক",
    icon: "Sparkles",
  },
  {
    id: "benefit-5",
    titleEn: "Freelance Proposal & Contract Templates",
    titleBn: "আন্তর্জাতিক ক্লায়েন্ট প্রপোজাল ও কন্ট্রাক্ট টেমপ্লেট",
    descriptionEn: "Battle-tested proposal documents, client discovery sheets, and milestone agreements used by NeexG to win high-ticket contracts.",
    descriptionBn: "NeexG এজেন্সিতে ব্যবহৃত প্রমাণিত ক্লায়েন্ট প্রপোজাল, এস্টিমেশন শীট এবং কন্ট্রাক্ট টেমপ্লেট যা দিয়ে আপনি সহজেই প্রজেক্ট ক্লোজ করতে পারবেন।",
    badgeEn: "Business Assets",
    badgeBn: "বিজনেস টেমপ্লেটস",
    icon: "Briefcase",
  },
  {
    id: "benefit-6",
    titleEn: "Private Student Developer Community",
    titleBn: "প্রাইভেট স্টুডেন্ট ডেভেলপার নেটওয়ার্ক",
    descriptionEn: "Join an ambitious circle of builders for peer review, project collaboration, job referrals, and post-course networking.",
    descriptionBn: "একটি সক্রিয় ও আন্তরিক ডেভেলপার কমিউনিটি যেখানে আইডিয়া শেয়ারিং, প্রজেক্ট রিভিউ এবং ভবিষ্যতের কোলাবোরেশনের সুযোগ রয়েছে।",
    badgeEn: "Lifetime Access",
    badgeBn: "লাইফটাইম নেটওয়ার্ক",
    icon: "Users",
  },
];

/**
 * Frequently Asked Questions (Bilingual)
 */
export const courseFAQs: FAQItem[] = [
  {
    id: "faq-1",
    category: "prerequisites",
    questionEn: "Who is this course suitable for? Do I need prior coding experience?",
    questionBn: "এই কোর্সটি কাদের জন্য প্রযোজ্য? আগে থেকে কি কোডিং জানা বাধ্যতামূলক?",
    answerEn: "This course is crafted for ambitious beginners, polytechnic/university students, junior developers, and designers who want to bridge the gap between basic coding and real-world product building. While having basic computer literacy and curiosity is essential, we start Month 1 from modern semantic foundations and guide you progressively all the way to cloud-deployed SaaS and client business.",
    answerBn: "কোর্সটি বিগিনার, পলিটেকনিক বা সিএসই শিক্ষার্থী, ফ্রন্টএন্ড ডেভেলপার এবং ডিজাইনার—সবার জন্যই উপযোগী। আপনার যদি কম্পিউটারের সাধারণ ধারণা এবং নতুন কিছু শেখার আগ্রহ থাকে, তবে ১ম মাসের বেসিক থেকে শুরু করে ধাপে ধাপে অ্যাডভান্সড AI ভাইব কোডিং, সার্ভার ডিপ্লয়মেন্ট এবং ক্লায়েন্ট ডিলিং পর্যন্ত নিখুঁতভাবে শেখানো হবে।",
  },
  {
    id: "faq-2",
    category: "curriculum",
    questionEn: "What is 'Vibe Coding' and how will AI tools be used?",
    questionBn: "'ভাইব কোডিং' কী এবং কোর্সে কীভাবে AI টুলস ব্যবহার শেখানো হবে?",
    answerEn: "Vibe Coding is a modern engineering methodology where developers direct advanced AI models (such as Cursor AI, Google Antigravity, Claude 3.7, and v0) to write, refactor, and iterate on code at superhuman speeds while keeping tight architectural control. You will not learn blind copy-pasting; you will learn how to write precise architectural instructions, configure .cursorrules, conduct automated multi-file edits, and debug edge cases like an engineering lead.",
    answerBn: "'ভাইব কোডিং' হলো আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ের সেই নতুন যুগ, যেখানে ডেভেলপাররা সঠিক আর্কিটেকচারাল গাইডলাইন দিয়ে Cursor, Antigravity ও Claude-এর মতো AI টুলস দিয়ে অতি দ্রুত নিখুঁত কোড তৈরি করান। আমরা কোনো অন্ধ কপি-পেস্ট শেখাব না; বরং কীভাবে সিনিয়র ইঞ্জিনিয়ারের মতো প্রম্পট ডিজাইন করতে হয়, সিস্টেম আর্কিটেকচার ঠিক রাখতে হয় এবং এআই জেনারেটেড কোড নিরাপদে ডিবাগ করতে হয় তা শেখাব।",
  },
  {
    id: "faq-3",
    category: "curriculum",
    questionEn: "How does this course handle deployment? Why focus on Vercel and Custom Domains?",
    questionBn: "কোর্সে ডিপ্লয়মেন্ট কীভাবে শেখানো হয়? কেন Vercel এবং কাস্টম ডোমেইনে ফোকাস করা হয়েছে?",
    answerEn: "Most courses leave you stranded on localhost with no live portfolio to show employers or clients. In this course, we teach you production deployment using Vercel—the industry standard for modern Next.js and full-stack web engineering. You will learn automated Git CI/CD pipelines, preview branches for client review, encrypted environment secrets, and connecting custom branded domains with instant worldwide SSL.",
    answerBn: "বেশিরভাগ কোর্সে কেবল লোকালহোস্টে কোড করে শেষ করা হয়, ফলে স্টুডেন্টদের কোনো লাইভ পোর্টফোলিও থাকে না। এই কোর্সে আমরা Next.js-এর জন্য বিশ্বের সেরা প্ল্যাটফর্ম Vercel-এর মাধ্যমে প্রোডাকশন ডিপ্লয়মেন্ট শেখাই। গিট পুশের সাথে সাথে অটো-বিল্ড, ক্লায়েন্টকে প্রিভিউ লিংক পাঠানো, সিকিউর এনভায়রনমেন্ট ভ্যারিয়েবল এবং কাস্টম ডোমেইন যুক্ত করে বিশ্বমানের স্পিডে লাইভ করা—সবকিছুই হাতে-কলমে শেখানো হবে।",
  },
  {
    id: "faq-4",
    category: "career",
    questionEn: "How will this course help me start freelancing or get international clients?",
    questionBn: "এই কোর্সটি আমাকে কীভাবে ফ্রিল্যান্সিং বা আন্তর্জাতিক ক্লায়েন্ট পেতে সাহায্য করবে?",
    answerEn: "In Month 3, we specifically focus on the business of software engineering: crafting irresistible proposals, pricing your projects for maximum value, managing milestone contracts, handling handover documentation, and converting one-time buyers into recurring monthly retainers ($500–$2,000/month). You will use the actual methodologies Abu Hosain applies at NeexG.",
    answerBn: "৩য় মাসে আমরা সরাসরি ফ্রিল্যান্সিং ও ক্লায়েন্ট বিজনেসের ওপর ফোকাস করব: উইনিং প্রপোজাল লেখা, ভ্যালু-বেসড প্রাইসিং, ক্লায়েন্ট হ্যান্ডওভার ডকুমেন্টেশন এবং ওয়ান-টাইম ক্লায়েন্টকে কীভাবে মান্থলি রিকারিং রিটেইনারে কনভার্ট করা যায়। NeexG এজেন্সিতে আবু হোসাইন নিজে যে টেকনিকগুলো ফলো করেন, সেটাই আপনাদের হাতে-কলমে শেখানো হবে।",
  },
  {
    id: "faq-5",
    category: "logistics",
    questionEn: "How do I enroll and secure my seat?",
    questionBn: "আমি কীভাবে কোর্সে এনরোল করব এবং সিট কনফার্ম করব?",
    answerEn: "You can click any 'Enroll Now' button on this page to submit your details or message Abu Hosain directly via WhatsApp (+880 1319-539510) with your background. Since batch seats are strictly capped to ensure 1-on-1 mentorship quality, admissions are processed on a first-come, first-served basis.",
    answerBn: "আপনি এই পেজের 'Enroll Now' বাটনে ক্লিক করে ফর্ম পূরণ করতে পারেন অথবা সরাসরি হোয়াটসঅ্যাপে (+880 1319-539510) মেসেজ দিয়ে সিট কনফার্ম করতে পারেন। মেন্টরশিপের সর্বোচ্চ কোয়ালিটি বজায় রাখতে প্রতি ব্যাচে সীমিত সংখ্যক সিট রাখা হয়।",
  },
];
