import dynamic from "next/dynamic";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import SocialLinks from "../components/SocialLinks";
import { greetings, openSource } from "../portfolio";
import { GithubUserType } from "../types";

const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));

export default function About({ githubProfileData }: { githubProfileData: GithubUserType }) {
  return (
    <div>
      <SEO title="About" />
      <Navigation />
      <header className="page-header">
        <h1 className="page-header__title">About</h1>
        <p className="page-header__lead">{greetings.description}</p>
        <div className="mt-4">
          <SocialLinks />
        </div>
      </header>
      <main className="about-sections">
        <Skills />
        <Proficiency />
        <Projects />
        <GithubProfileCard {...githubProfileData} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then(res => res.json());

  return {
    props: { githubProfileData },
  };
}
