import NavBar from "./navbar";
import HeroSection from "./heroSection";
import CoursePackages from "./course-packages";
import HowToEnroll from "./how-to-enroll";
import JoinACohort from "./join-a-cohort";
import StudentDiscount from "./studentDiscount";
import ForEnterprises from "./forSchools";
import FAQs from "./faqs";
import Footer from "./footer"
import { Metadata } from 'next';
import VideoSection from "./intro-video";
import TestimonialsSection from "./testimonials";
import CTASection from "./ctaSection";
import TutorsSlider from "./ourTutors";
 
export const metadata: Metadata = {
  title: 'Learning | Marlayer',
  description: '',
};


export default function Home() {
  return (
    <main>
    <HeroSection />
    <VideoSection />
    <CoursePackages />
    <TestimonialsSection />
    <TutorsSlider />
    <FAQs />
    <Footer />
    </main>
  );
}
