import ContactHeader from "../../components/contact/conbanner/conbanner";
import FooterSection from "../../components/footer/footer";
import ContactFormSection from "../../components/contact/contactform/conform";
import ProjectCards from "../../components/contact/coninfo/coninfo";

export default function Contact(){
    return(
        <>
        <ContactHeader/>
        <ContactFormSection/>
        <ProjectCards/>
        <FooterSection/>
        </>
    );
}