import FooterSection from "../../components/footer/footer";
import ProjectsHeader from "../../components/project_comp/proj_comp2/procomp2.jsx";
import { motion } from "framer-motion";
export default function Project(){

    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: "easeOut" },
      };
      
      const zoomIn = {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.9, ease: "easeOut" },
      };

    return (
        <>
        {/* <ProjectsHeader/>
        <FooterSection/> */}

<motion.div {...fadeInUp} viewport={{ once: true }}>
        <ProjectsHeader />
      </motion.div>

      <motion.div {...zoomIn} viewport={{ once: true }}>
        <FooterSection />
      </motion.div>
        </>
    );
}