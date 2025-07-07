import ProDetail from "../../../components/project_comp/proj_compDetail/ProDet_";
import FooterSection from "../../../components/footer/footer";
import ProjectOverviewO from "../../../components/project_comp/proj_compDetail/overview/overciew";
import PropertyFeatures from "../../../components/project_comp/proj_compDetail/propdetailFeTURE/featuresDetail";
import ApartmentTabs from "../../../components/ammanity/amminity";
import VideoTour from "../../../components/project_comp/proj_compDetail/video_tour/videotour";
export default function ProjectDetail(){
    return (
        <>
        <ProDetail/>
        <ProjectOverviewO/>
        <PropertyFeatures/>
        <ApartmentTabs/>
        <VideoTour/>
        <FooterSection/>
        </>
    );
}