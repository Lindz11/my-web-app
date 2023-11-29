import KeebNavbar from '../components/navbar';
import Hero from '../components/hero';
import AboutImg from '../assets/2.avif';
import AboutInfo from '../components/aboutus';
function About () {
    return(
        <>
        <KeebNavbar/>
        <Hero
        cName = "hero-mid"
        heroImg = {AboutImg}
        title = "About"
        url = "/about"
        btnClass="hide"
        />
        <AboutInfo/>
        </>
    )
}

export default About;