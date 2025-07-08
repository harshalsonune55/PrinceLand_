import AboutBanner from "../../components/Aboutpage/bannerab/banner";
import FooterSection from "../../components/footer/footer";
import WhatWeDo from "../../components/Aboutpage/what_we/whatwedo";
import TeamSection from "../../components/Aboutpage/teamsection/team";
import AchievementsSection from "../../components/Aboutpage/teamsection/team2";
import { motion } from "framer-motion";
export default function About(){

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
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
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.9, ease: "easeOut" },
      };


    return(
        <>
        {/* <AboutBanner/>
        <WhatWeDo/>
        <TeamSection/>
        <AchievementsSection/>
        <FooterSection/> */}

<motion.div {...fadeInUp} viewport={{ once: true }}>
        <AboutBanner />
      </motion.div>

      <motion.div {...fadeInLeft} viewport={{ once: true }}>
        <WhatWeDo />
      </motion.div>

      <motion.div {...zoomIn} viewport={{ once: true }}>
        <TeamSection />
      </motion.div>

      <motion.div {...fadeInRight} viewport={{ once: true }}>
        <AchievementsSection />
      </motion.div>

      <motion.div {...fadeInUp} viewport={{ once: true }}>
        <FooterSection />
      </motion.div>
     
        </>
    );
}