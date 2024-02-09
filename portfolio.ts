import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
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
    "I'm a software engineer with experience in web design, cloud infrastructure, and data. In addition to my technical experience, I'm also a skilled communicator, with work experience in public speaking and a passion for cultivating meaningful relationships. If you'd like to talk, send me an email! I am always looking for the opportunity to learn more! My greatest interest is enabling others to grow right along with me!",
  resumeLink: "https://drive.google.com/file/d/1cL76R_VfPZSwpostg0flWjkd6mwLzdIC/view?usp=sharing",
};

export const openSource = {
  githubUserName: "vcavanna",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:vin100.cav@gmail.com",
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
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building websites in React.js"),
        emoji("⚡ Building data wrangling scripts and ETL jobs in Python and Scala"),
        emoji("⚡ Building cloud architecture from the ground up using my own designs"),
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
      lottieAnimationFile: "/lottie/skills/publicSpeaking.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Teaching and practicing public speaking skills"),
        emoji("⚡ Writing guides and documentation to support others"),
        emoji("⚡ Giving feedback through mentorship programs and peer support groups"),
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

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Dallas",
    subHeader: "Bachelor of Arts in Computer Science",
    duration: "September 2019 - May 2023",
    desc: "",
    // grade: "Grade A",
    descBullets: [
      "Vice President of Association for Computing Machinery chapter for two years",
      "Awarded Dean's list six times",
      "Awarded Computer Science Departmental Scholarship",
      "Awarded National Merit Scholar",
      "Awarded Resident Assistant of the Year"
    ], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Independent Contractor",
    company: "Ace",
    companyLogo: "/img/icons/common/ace_logo.jpeg",
    date: "June 2023 - July 2023",
    desc: "I worked as the point person for resolving warehouse issues, analyzed for process improvements, and fulfilled orders.",
  },
  {
    role: "Resident Assistant",
    company: "University of Dallas",
    companyLogo: "/img/icons/common/university_of_dallas_logo.jpeg",
    date: "August 2022 - May 2023",
    desc: "I supported the resident community across all functions, from administration to engagements",
    descBullets: [
      "Planned, promoted, and executed 20+ events to increase cross campus engagement",
      "Responded to resident issues and communicated to residence life leaders",
      "Initiated campus beautification efforts"
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Amazon",
    companyLogo: "/img/icons/common/amazon_logo.jpeg",
    date: "May 2022 - August 2022",
    desc: "I designed a robust ETL job to process 6 millions of logs a second into analytics services",
    descBullets: [
    	"I built this design out using AWS, Java, Spark, Python, and command line tools.",
    	"My six-page high-level design document passed peer review in one try",
    ],
  },
  {
    role: "Web & Tech Team Leader",
    company: "National STEM Honor Society",
    companyLogo: "/img/icons/common/national_stem_honor_society_logo.jpeg",
    date: "May 2021 - August 2021",
    desc: "I managed a team of 5 in making improvements to the Wordpress website.",
    descBullets: [
      "I created HTML and CSS pages and adopted new technologies to improve the website",
      "I set strategic goals for the redesign of the website, presenting to the entire organization",
      "I onboarded and provided feedback to each member of my team"
    ]
  },
  {
    role: "Head Team Policy Debate Coach",
    company: "Zenith Speech and Debate Academy",
    companyLogo: "/img/icons/common/zenithLogo.png",
    date: "May 2021 - August 2021",
    desc: "I managed a team of 6, taught 40 students speech and debate, and created +60 pages of research documents",
    descBullets: [
      "I taught critical thinking and public speaking skills to groups of +20 students in summer camps",
      "I managed the camp schedule and ensured satisfaction across the student body",
      "I mentored the junior coaches in leadership skills and provided feedback across the organization"
    ]
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

export const feedbacks: FeedbackType[] = [
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
