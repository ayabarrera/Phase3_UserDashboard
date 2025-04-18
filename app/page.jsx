import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Link from "next/link";
import "./landingpage.css";
import Button from "./components/Button";

async function getGlobalData() {
  return directus.request(readItems("global"));
}

export default async function LandingPage() {
  const globalData = await getGlobalData();

  return (
    <section className="landing-container">
      <div className="hero-background"></div>

      <article className="hero-content">
        <header>
          <h1 className="site-title">Pen & Pixel</h1>
          <h2 className="dynamic-message">
            {globalData.welcome_message || "Stay creative with us!"}
          </h2>
        </header>

        <p className="static-info">
          Explore the latest articles, insights, and discussions on design,
          creativity, and digital storytelling.
        </p>

        <nav>
          <Link href="/dashboard">
            <Button variant="primary" aria-label="Get started with Pen & Pixel">
             Get Started
            </Button>
          </Link>
        </nav>
      </article>
    </section>
  );
}
