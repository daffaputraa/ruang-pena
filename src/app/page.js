import { BlogSection, HeroSection } from "@/components";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <div className="top-content">
          <HeroSection/>
          <BlogSection/>
        </div>
      </div>
    </>
  );
}
