import NavBar from "./navbar";
import Footer from "./footer";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home | Quales Consulting',
  description: 'Quales Consulting comprises an elite network of the finest freelance Software Developers, Designers, Business Analysts, Product Managers, and Scrum Masters, Data Analysts globally. Leading companies engage freelancers from Quales Consulting for their critical projects.',
};


export default function Home() {
  return (
    <main className="bg-white">
    <NavBar/>
    <Footer />
    </main>
  );
}
