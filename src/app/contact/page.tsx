import HeroSection from './heroSection';
import ContactFormSection from './contactForm';
import ContactServices from './ourServices';
import FaqSection from './faq';
import Footer from '../(home)/footer';
import CtaSection from './bookMeeting';


export default function Contact() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ContactFormSection />
      <ContactServices />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

