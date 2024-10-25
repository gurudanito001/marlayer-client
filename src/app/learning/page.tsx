import NavBar from "./home/navbar";
import HeroSection from "./home/heroSection";
import CoursePackages from "./home/course-packages";
import LearningPlans from "./home/learningPlans";
import HowToEnroll from "./home/how-to-enroll";
import JoinACohort from "./home/join-a-cohort";
import StudentDiscount from "./home/studentDiscount";
import ForEnterprises from "./home/forEnterprises";
import FAQs from "./home/faqs";
import Footer from "../(home)/footer";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Learning | Quales Consulting',
  description: 'Quales Consulting comprises an elite network of the finest freelance Software Developers, Designers, Business Analysts, Product Managers, and Scrum Masters, Data Analysts globally. Leading companies engage freelancers from Quales Consulting for their critical projects.',
};


export default function Home() {
  return (
    <main className="bg-white">
    <NavBar />
    <HeroSection />
    <CoursePackages />
    <StudentDiscount />
    <HowToEnroll />
    <JoinACohort />
    <FAQs />
    <ForEnterprises />
    <Footer />
    </main>
  );
}
