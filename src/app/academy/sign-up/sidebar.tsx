import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ['latin'] });




const Sidebar = () =>{

 return(
    <aside className="bg-primary px-5 xl:px-14 py-16 text-white hidden lg:block w-4/12 h-full rounded-xl ">
      <Link href="/academy" className="flex items-center gap-3">
        <Image src="/images/marlayer-logo.svg" width={40} height={40} alt="Marlayer Logo" />
        <h1 className={`font-extrabold text-xl ${dmSans.className}`}>Marlayer Academy</h1>
      </Link>

      <h1 className=" text-3xl md:text-5xl text-white font-semibold mt-32">Your learning <br/> journey starts here! </h1>
      <p className=" text-lg mt-7 max-w-2xl text-white font-normal">Join our platform to access courses, resources, and a supportive learning community today!</p>

      <p></p>
    </aside>
 ) 
}

export default Sidebar