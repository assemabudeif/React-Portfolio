import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core'


import HeroSectionClass from "./HeroSectionClass";
import AboutMeSectionClass from "./AboutMeSectionClass";
import SkillsSectionClass from "./SkillsSectionClass";
import PortfolioSectionClass from "./PortfolioSectionClass";
import FooterSectionClass from "./FooterSectionClass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function App() {
    return (
        <>
            <FontAwesomeIcon icon={"fa-solid fa-envelope"}/>
            
            <HeroSectionClass/>
            <AboutMeSectionClass/>
            <SkillsSectionClass/>
            <PortfolioSectionClass/>
            <FooterSectionClass/>
        </>
    );
}

export default App;
