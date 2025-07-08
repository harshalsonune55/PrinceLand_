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
import BrandShowcase from "../../components/barnd/brand";
import TimelineIntro from "../../components/Timeline/timeline1";
import TestimonialsSectionREview from "../../components/reviews/review";
import { motion } from "framer-motion";

export default function Home() {
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: "easeOut" },
      };
      
      const fadeInDown = {
        initial: { opacity: 0, y: -50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: "easeOut" },
      };
      
      const fadeInLeft = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.9, ease: "easeOut" },
      };
      
      const fadeInRight = {
        initial: { opacity: 0, x: 100 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.9, ease: "easeOut" },
      };
      
      const zoomIn = {
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.9, ease: "easeOut" },
      };

    return (
        <>
            {/* <Banner />
            <AboutDaxx/>
            <ProjectHighlight/>
            <Testimonial/>
            <LuxuryVideoBanner/>
            <TimelineIntro/>
            <Timeline/>
            <ApartmentTabs/>
            <ImageSlider/>
            <BenefitsSection/>
            <StatsSection/>
            <LatestProject/>
            <TestimonialsSectionREview/>
            <BrandShowcase/>
            <FooterSection/> */}

<Banner />

<motion.div {...fadeInUp} viewport={{ once: true }}>
  <AboutDaxx />
</motion.div>

<motion.div {...fadeInRight} viewport={{ once: true }}>
  <ProjectHighlight />
</motion.div>

<motion.div {...fadeInLeft} viewport={{ once: true }}>
  <Testimonial />
</motion.div>

<motion.div {...zoomIn} viewport={{ once: true }}>
  <LuxuryVideoBanner />
</motion.div>

<motion.div {...fadeInUp} viewport={{ once: true }}>
  <TimelineIntro />
</motion.div>

<motion.div {...fadeInDown} viewport={{ once: true }}>
  <Timeline />
</motion.div>

<motion.div {...fadeInRight} viewport={{ once: true }}>
  <ApartmentTabs />
</motion.div>

<motion.div {...fadeInLeft} viewport={{ once: true }}>
  <ImageSlider />
</motion.div>

<motion.div {...zoomIn} viewport={{ once: true }}>
  <BenefitsSection />
</motion.div>

<motion.div {...fadeInUp} viewport={{ once: true }}>
  <StatsSection />
</motion.div>

<motion.div {...fadeInRight} viewport={{ once: true }}>
  <LatestProject />
</motion.div>

<motion.div {...fadeInLeft} viewport={{ once: true }}>
  <TestimonialsSectionREview />
</motion.div>

<motion.div {...fadeInUp} viewport={{ once: true }}>
  <BrandShowcase />
</motion.div>

<motion.div {...fadeInDown} viewport={{ once: true }}>
  <FooterSection />
</motion.div>
        </>
    );
}