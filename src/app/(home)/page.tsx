import NavBar from "./navbar";
import Footer from "./footer";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home | Marlayer',
  description: '',
};


export default function Home() {
  return (
    <main className="bg-white">
    <NavBar/>
    <Footer />
    </main>
  );
}
