import Link from "next/link"




const Sidebar = () =>{

 return(
    <aside className="bg-primary px-5 xl:px-14 py-16 text-white hidden lg:block lg:w-4/12 h-full rounded-xl ">
      <Link href="/learning" className="text-xl font-semibold">Marlayer</Link>

      <h1 className=" text-3xl md:text-5xl text-white font-semibold mt-32">Welcome Back </h1>
      <p className=" text-lg mt-7 max-w-2xl text-white font-normal">Access a world of knowledge and resources tailored just for you. Please enter your credentials to unlock personalized learning paths, interactive courses, and a vibrant community of learners.</p>

      <p></p>
    </aside>
 ) 
}

export default Sidebar