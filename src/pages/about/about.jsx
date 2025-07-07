import AboutBanner from "../../components/Aboutpage/bannerab/banner";
import FooterSection from "../../components/footer/footer";
import WhatWeDo from "../../components/Aboutpage/what_we/whatwedo";
import TeamSection from "../../components/Aboutpage/teamsection/team";
import AchievementsSection from "../../components/Aboutpage/teamsection/team2";
export default function About(){
    return(
        <>
        <AboutBanner/>
        <WhatWeDo/>
        <TeamSection/>
        <AchievementsSection/>
        <FooterSection/>
     
        </>
    );
}