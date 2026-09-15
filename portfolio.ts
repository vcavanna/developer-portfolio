import {
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Vincent Cavanna",
  title: "Hi all, I'm Vincent",
  description:
    "I'm a software engineer with experience in web design, cloud infrastructure, and data. In addition to my technical experience, I'm also a skilled communicator, with work experience in public speaking and a passion for cultivating meaningful relationships. I am always looking for the opportunity to learn more! My greatest interest is enabling others to grow right along with me!",
};

export const openSource = {
  githubUserName: "vcavanna",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: "https://www.linkedin.com/in/vincent-cavanna/",
  github: "https://github.com/vcavanna",
  // instagram: "#!",
  // facebook: 'https://www.facebook.com/1Vincent100',
  // twitter: 'https://twitter.com/1Vincent100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "I love to do anything from data wrangling and analysis to cloud solutions and web design!",
  data: [
    {
      title: "Software Engineering",
      skills: [
        "Building websites in React.js",
        "Building data wrangling scripts and ETL jobs in Python and Scala",
        "Building cloud architecture from the ground up using my own designs",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "SQL",
          iconifyTag: "devicon:mysql",
        },
        {
          skillName: "Tableau",
          iconifyTag: "logos:tableau-icon",
        },
      ],
    },
    {
      title: "Communication and Leadership",
      skills: [
        "Teaching and practicing public speaking skills",
        "Writing guides and documentation to support others",
        "Giving feedback through mentorship programs and peer support groups",
      ],
      softwareSkills: [
        {
          skillName: "Public Speaking",
          iconifyTag: "mingcute:speech-fill",
        },
        {
          skillName: "Writing",
          iconifyTag: "oi:copywriting",
        },
        {
          skillName: "Feedback",
          iconifyTag: "codicon:feedback",
        },
        {
          skillName: "Collaboration",
          iconifyTag: "fluent-mdl2:teamwork",
        },
        {
          skillName: "Analysis",
          iconifyTag: "ep:data-analysis",
        }
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "70", //Insert relative proficiency in percentage
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Scraping Edmunds Site",
    desc: "A data engineering project based in the cloud to extract and analyze ecommerce entries from car websites",
    github: "https://github.com/vcavanna/scrapers",
    // link: "https://developer-portfolio-1Vincent100.vercel.app/",
  },
  {
    name: "Forum 56 Networking Platform",
    desc: "A networking and development platform where liberal arts students and alumni can form strong professional relationships.",
    github: "https://github.com/vcavanna/forum56",
    // link: "https://gibeo.io/",
  },
  {
    name: "Automating Data Entry on Unilog Platform",
    desc: "Software to automate a data entry task that takes weeks of analysts time, built using Python and the pandas library.",
    github: "https://github.com/vcavanna/vendor-to-unilog-poc",
  },
  {
    name: "IOT Device for Student Attendance",
    desc: "Developed the backend database and REST API together with frontend and device teams",
    github: "https://github.com/vcavanna/studentAttendanceMiddleware",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Vincent Cavanna",
  description: greetings.description,
  author: "Vincent Cavanna",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1Vincent100.vercel.app",
  keywords: [
    "Vincent",
    "Vincent Cavanna",
    "@1Vincent100",
    "1Vincent100",
    "Portfolio",
    "Vincent Portfolio ",
    "Vincent Cavanna Portfolio",
  ],
};
