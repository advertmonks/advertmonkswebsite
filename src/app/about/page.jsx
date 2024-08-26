import HeroSection from "@/components/abouthero";
import CurvedBackground from "@/components/aboutservices";
import AboutMeSection from "@/components/aboutabout";
import ContactPage from "@/components/aboutconnet";

export default function Page() {
    return (
        <>
            <HeroSection/>
            <CurvedBackground/>
            <AboutMeSection/>
            <ContactPage/>
        </>
    );
}