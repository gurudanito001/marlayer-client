import NavBar from "./home/navbar";
import HeroSection from "./home/heroSection";
import CoursePackages from "./home/course-packages";
import HowToEnroll from "./home/how-to-enroll";
import JoinACohort from "./home/join-a-cohort";
import StudentDiscount from "./home/studentDiscount";
import ForEnterprises from "./home/forEnterprises";
import FAQs from "./home/faqs";
import Footer from "./footer"
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Learning | Marlayer',
  description: '',
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
