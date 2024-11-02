import Link from "next/link"




const Sidebar = () =>{

 return(
    <aside className="bg-primary px-5 xl:px-14 py-16 text-white hidden lg:block w-4/12 h-full rounded-xl ">
      <Link href="/learning" className="text-xl font-semibold">Marlayer</Link>

      <h1 className=" text-3xl md:text-5xl text-white font-semibold mt-32">Your learning <br/> journey starts here! </h1>
      <p className=" text-lg mt-7 max-w-2xl text-white font-normal">Join our platform to access courses, resources, and a supportive learning community today!</p>

      <p></p>
    </aside>
 ) 
}

export default Sidebar