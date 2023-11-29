import KeebNavbar from '../components/navbar';
import Hero from '../components/hero';
import HomeImg from '../assets/7.avif';
import Footer from '../components/footer';
import Cards from '../components/cards';
function Home () {
    return(
        <>
        <KeebNavbar/>
        <Hero
        cName = "hero"
        heroImg = {HomeImg}
        title = "Solve Your Problems Key By Key"
        text = "Choose Keebhub as your destination for all your keyboard needs"
        buttonText = "Learn More"
        url = "/about"
        btnClass="show"
        />
        <Cards/>
        <Footer/>
        </>
    )
}

export default Home;