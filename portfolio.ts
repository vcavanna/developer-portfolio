import {
  ProjectType,
  SkillsSectionType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

// Production is the default, but any deployment can override it so that staging
// and preview builds describe themselves instead of claiming to be the live site.
// Vercel injects VERCEL_URL per-deployment, which covers previews for free.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "https://vincentcavanna.com");

export const greetings: GreetingsType = {
  name: "Vincent Cavanna",
  title: "Hi all, I'm Vincent",
  description:
    "I'm a software engineer who builds full-stack web applications, mostly around payments, ecommerce, and CRMs. My day to day work is in PHP and Laravel, with regular detours into cloud infrastructure and developer tooling. Aside from my work, I'm interested in Municipal government, real estate, and philosophy, which I write about occasionally in my blog.",
};

export const openSource = {
  githubUserName: "vcavanna",
};

export const socialLinks: SocialLinksType = {
  linkedin: "https://www.linkedin.com/in/vincent-cavanna/",
  github: "https://github.com/vcavanna",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle:
    "",
  data: [
    {
      title: "Software Engineering",
      skills: [
        "Building full-stack web application features in Laravel and the TALL stack",
        "Integrating payments, tax, and compliance systems across checkouts, portals, and receipts",
        "Designing and rebuilding cloud infrastructure and the data pipelines that run on it",
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "Laravel",
          iconifyTag: "logos:laravel",
        },
        {
          skillName: "Livewire",
          iconifyTag: "simple-icons:livewire",
        },
        {
          skillName: "Tailwind",
          iconifyTag: "logos:tailwindcss-icon",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Postgres",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Redis",
          iconifyTag: "logos:redis",
        },
        {
          skillName: "Google Cloud",
          iconifyTag: "logos:google-cloud",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
      ],
    },
  ],
};

export const projects: ProjectType[] = [
  {
    name: "Cloud Relational Database for Car Research",
    desc: "An end-to-end ETL job that webscrapes car offers, cleans them for analysis, and loads them into a Redshift Serverless database — along with the AWS infrastructure underneath it, built from scratch with Lambda, S3, and IAM Identity Center.",
    github: "https://github.com/vcavanna/scrapers",
  },
  {
    name: "Forum 56 Networking Platform",
    desc: "A networking and development platform where liberal arts students and alumni can form strong professional relationships.",
    github: "https://github.com/vcavanna/forum56",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Vincent Cavanna",
  description: greetings.description,
  author: "Vincent Cavanna",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: siteUrl,
  keywords: [
    "Vincent Cavanna",
    "software engineer",
    "full-stack engineer",
    "Laravel",
    "PHP",
    "payments engineering",
    "cloud infrastructure",
  ],
};
