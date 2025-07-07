import Banner from "../../components/banner/banner";
import AboutDaxx from "../../components/About-PL/anoutpl";
import ProjectHighlight from "../../components/About-PL/projectHigh";
import Testimonial from "../../components/advice/advice";
import LuxuryVideoBanner from "../../components/banner2/banner2";
import Timeline from "../../components/Timeline/timeline";
import ApartmentTabs from "../../components/ammanity/amminity";
import ImageSlider from "../../components/image_slider/slider";
import BenefitsSection from "../../components/benefits/benefit";
import StatsSection from "../../components/contact_Sec/con";
import LatestProject from "../../components/LT_pro/lt";
import FooterSection from "../../components/footer/footer";

export default function Home() {
    return (
        <>
            <Banner />
            <AboutDaxx/>
            <ProjectHighlight/>
            <Testimonial/>
            <LuxuryVideoBanner/>
            <Timeline/>
            <ApartmentTabs/>
            <ImageSlider/>
            <BenefitsSection/>
            <StatsSection/>
            <LatestProject/>
            <FooterSection/>
        </>
    );
}