import AboutSection from "@/Components/AboutSection";
import Blog from "@/Components/Blog";
import FAQ from "@/Components/FAQ";
import FeaturesSection from "@/Components/FeatureSection";
import Footer from "@/Components/Footer";
import Hero from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import Team from "@/Components/Team";
import Testimonial from "@/Components/Testimoinal";


export default function Home() {
  return (
    <>
        
        <Hero/>
        <FeaturesSection/>
        <AboutSection/>
        <Services/>
        <FAQ/>
        <Blog/>
        <Team/>
        <Testimonial/>
        
    </>
  );
}
