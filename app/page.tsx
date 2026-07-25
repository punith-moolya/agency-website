
import Hero from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { MissionVision } from "@/components/MissionVision";
import { Services } from "@/components/Services";
// import { Portfolio } from "@/components/Portfolio";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Team } from "@/components/Team";
import { Values } from "@/components/Values";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import About from "@/components/About";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero />
        <About/>
        <OurStory />
        <MissionVision />
        <Services />
        {/* <Portfolio /> */}
        <WhyChooseUs />
        <Team />
        <Values />
        <Contact />
      </main>
      <Footer/>
    </>
  );
}
