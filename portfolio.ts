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
    "I'm a software engineer who builds full-stack web applications, mostly around payments, commerce, and the systems that keep them running. Day to day I work in PHP and Laravel, with regular detours into cloud infrastructure, data pipelines, and developer tooling. I care about leaving behind code and documentation that the next engineer can pick up and extend, and I'm always looking for the next thing to learn.",
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
    "I build full-stack web applications, from payment integrations and APIs down to the cloud infrastructure underneath.",
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
    {
      title: "Developer Experience & Collaboration",
      skills: [
        "Writing documentation and static analysis rules that keep a codebase legible",
        "Building deployment tooling and CI pipelines that shorten the feedback loop",
        "Working with stakeholders to scope and migrate business-critical systems",
      ],
      softwareSkills: [
        {
          skillName: "Documentation",
          iconifyTag: "oi:copywriting",
        },
        {
          skillName: "GitHub Actions",
          iconifyTag: "logos:github-actions",
        },
        {
          skillName: "Code Review",
          iconifyTag: "codicon:feedback",
        },
        {
          skillName: "Collaboration",
          iconifyTag: "fluent-mdl2:teamwork",
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
