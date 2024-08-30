import HeroSection from "@/components/abouthero";
import CurvedBackground from "@/components/aboutservices";
import AboutMeSection from "@/components/aboutabout";
import ContactPage from "@/components/aboutconnet";

export default function Page() {
    return (
        <>
            <HeroSection/>
            <section id='services'>
            <CurvedBackground/>
            </section>
            <AboutMeSection/>
            <ContactPage/>
        </>
    );
}