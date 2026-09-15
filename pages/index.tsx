import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { greetings } from "../portfolio";

export default function Home() {
  return (
    <div>
      <SEO />
      <Navigation />
      <main className="home">
        <p className="home__eyebrow">Software Engineer</p>
        <h1 className="home__title">{greetings.name}</h1>
        <hr className="home__rule" />
        <p className="home__lead">{greetings.description}</p>
        <div className="home__actions">
          <Link className="home__action home__action--primary" href="/about">
            About me
          </Link>
          <a className="home__action" href="/blog">
            Read the blog
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
