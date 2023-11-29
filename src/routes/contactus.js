import KeebNavbar from '../components/navbar';
import Hero from '../components/hero';
import ContactImg from '../assets/8.avif';
import ContactForm from '../components/contactform';
function ContactUs () {
  return(
    <>
    <KeebNavbar/>
    <Hero
    cName = "hero-mid"
    heroImg = {ContactImg}
    title = "Contact Us"
    url = "/contact"
    btnClass="hide"
    />
    <ContactForm/>
    </>
)
}

export default ContactUs;