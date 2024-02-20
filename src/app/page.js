import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-10 py-4">
        <HeroSection />
        <AchievementsSection/>
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
    </main>
  );
}
