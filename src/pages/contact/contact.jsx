import ContactHeader from "../../components/contact/conbanner/conbanner";
import FooterSection from "../../components/footer/footer";
import ContactFormSection from "../../components/contact/contactform/conform";
import ProjectCards from "../../components/contact/coninfo/coninfo";
import { motion } from "framer-motion";

export default function Contact(){

    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
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
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.9, ease: "easeOut" },
      };


    return(
        <>
        {/* <ContactHeader/>
        <ContactFormSection/>
        <ProjectCards/>
        <FooterSection/> */}

    <motion.div {...fadeInUp} viewport={{ once: true }}>
        <ContactHeader />
      </motion.div>

      <motion.div {...fadeInLeft} viewport={{ once: true }}>
        <ContactFormSection />
      </motion.div>

      <motion.div {...fadeInRight} viewport={{ once: true }}>
        <ProjectCards />
      </motion.div>

      <motion.div {...zoomIn} viewport={{ once: true }}>
        <FooterSection />
      </motion.div>

        </>
    );
}