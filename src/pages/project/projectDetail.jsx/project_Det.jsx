import ProDetail from "../../../components/project_comp/proj_compDetail/ProDet_";
import FooterSection from "../../../components/footer/footer";
import ProjectOverviewO from "../../../components/project_comp/proj_compDetail/overview/overciew";
import PropertyFeatures from "../../../components/project_comp/proj_compDetail/propdetailFeTURE/featuresDetail";
import ApartmentTabs from "../../../components/ammanity/amminity";
import VideoTour from "../../../components/project_comp/proj_compDetail/video_tour/videotour";
import { motion } from "framer-motion";
export default function ProjectDetail(){
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: "easeOut" },
      };
      
      const fadeInLeft = {
        initial: { opacity: 0, x: -80 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.9, ease: "easeOut" },
      };
      
      const fadeInRight = {
        initial: { opacity: 0, x: 80 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.9, ease: "easeOut" },
      };
      
      const zoomIn = {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.9, ease: "easeOut" },
      };
    return (
        <>
        {/* <ProDetail/>
        <ProjectOverviewO/>
        <PropertyFeatures/>
        <ApartmentTabs/>
        <VideoTour/>
        <FooterSection/> */}
              <motion.div {...fadeInUp} viewport={{ once: true }}>
        <ProDetail />
      </motion.div>

      <motion.div {...fadeInLeft} viewport={{ once: true }}>
        <ProjectOverviewO />
      </motion.div>

      <motion.div {...fadeInRight} viewport={{ once: true }}>
        <PropertyFeatures />
      </motion.div>

      <motion.div {...zoomIn} viewport={{ once: true }}>
        <ApartmentTabs />
      </motion.div>

      <motion.div {...fadeInUp} viewport={{ once: true }}>
        <VideoTour />
      </motion.div>

      <motion.div {...fadeInUp} viewport={{ once: true }}>
        <FooterSection />
      </motion.div>
        </>
    );
}