


import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";



const Pricing = ()=>{

  return (
    <section id="coursePackages" className="bg-white py-14 lg:py-28 px-5 xl:px-28 flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 align-bottom gap-5 w-full rounded-3xl md:rounded-none">

        <div>
          <div className="bg-primary text-white text-center py-2 rounded-t-lg font-bold w-full max-w-md invisible">Best Value</div>
          <article className="text-black flex flex-col px-4 py-7 border border-primary-2 rounded-lg hover:shadow-xl max-w-md">
            <header className=" flex flex-col mb-7">
              <h3 className="mb-3 leading-5 font-bold text-2xl text-primary-2">Standard</h3>
              <p className="font-light">Entry level features. Sufficient for most users.  </p>
            </header>

            <div className="flex flex-col mb-10 gap-2">
              <span className="text-4xl font-bold text-primary-2">$20 <span className="text-lg ">USD/mo</span></span>
              <Link className="btn btn-lg px-10 hover:border-2 border-primary-2 bg-primary-2 text-white font-bold w-full rounded-lg" href="">Get Started</Link>
            </div>

            <ul className=" list-none list-outside flex flex-col gap-3">
              <li className="flex items-center text-black"> <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span> Access to Core Curriculum: Comprehensive coverage of essential tech skills</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Live Q&A Sessions: Weekly sessions to address questions and clarify concepts.</li>
              <li className="flex items-center">  <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Basic Course Materials: Downloadable resources, including slides and notes.</li>
              <li className="flex items-center">  <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Community Access: Join a basic forum or group for peer support and networking.</li>
              <li className="flex items-center">  <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Completion Certificate: Official certificate upon finishing the course.</li>
              <li className="flex items-center">  <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Networking Events: Access to exclusive virtual</li>


              <li className="flex items-center opacity-30">  <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Personalized Feedback: One-on-one feedback on assignments and projects.</li>
              <li className="flex items-center opacity-30">  <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Recorded Sessions: Access to recorded lectures for review and study.</li>
              <li className="flex items-center opacity-30">  <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Monthly Reviews: Your progress will be reviewed monthly and you&apos;ll be assisted where needed</li>

              <li className="flex items-center opacity-30">  <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Unlimited Mentorship: Ongoing access to one-on-one mentorship sessions.</li>
              <li className="flex items-center opacity-30">  <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Exclusive Content: Advanced workshops and tutorials on emerging technologies.</li>
              <li className="flex items-center opacity-30">  <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Priority Support: Fast-track responses to inquiries and technical support.</li>
              <li className="flex items-center opacity-30">  <span><CheckIcon className="w-5 text-primary-2 mr-3" /></span>Lifetime Access: Permanent access to course materials and updates.</li>
            </ul>
          </article>
        </div>
        

        <div>
          <div className="bg-primary text-white text-center py-2 rounded-t-lg font-bold w-full max-w-md glass">Best Value</div>
          <article className="text-black flex flex-col px-4 py-7 border border-primary rounded-lg rounded-t-none hover:shadow-xl max-w-md">
            
            <header className=" flex flex-col mb-7">
              <h3 className="mb-3 leading-5 font-bold text-2xl text-primary">Premium</h3>
              <p className="font-light">Everything In Standard with upgraded features </p>
            </header>
            
            <div className="flex flex-col mb-10 gap-2">
              <span className="text-4xl font-bold text-primary">$30 <span className="text-lg ">USD/mo</span></span>
              <Link className="btn btn-lg px-10 hover:border-2 border-primary bg-primary text-white font-bold w-full rounded-lg" href="">Get Started</Link>
            </div>

            <ul className=" list-none list-outside flex flex-col gap-3">
              <li className="flex items-center text-black"> <span><CheckIcon className="w-5 text-primary mr-3" /></span> Access to Core Curriculum: Comprehensive coverage of essential tech skills</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-primary mr-3" /></span>Live Q&A Sessions: Weekly sessions to address questions and clarify concepts.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-primary mr-3" /></span>Basic Course Materials: Downloadable resources, including slides and notes.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-primary mr-3" /></span>Community Access: Join a basic forum or group for peer support and networking.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-primary mr-3" /></span>Completion Certificate: Official certificate upon finishing the course.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-primary mr-3" /></span>Networking Events: Access to exclusive virtual</li>


              <li className="flex items-center"> <span><CheckIcon className="w-5 text-primary mr-3" /></span>Personalized Feedback: One-on-one feedback on assignments and projects.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-primary mr-3" /></span>Recorded Sessions: Access to recorded lectures for review and study.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-primary mr-3" /></span>Monthly Reviews: Your progress will be reviewed monthly and you&apos;ll be assisted where needed</li>

              <li className="flex items-center opacity-30"><span><CheckIcon className="w-5 text-primary mr-3" /></span>Unlimited Mentorship: Ongoing access to one-on-one mentorship sessions.</li>
              <li className="flex items-center opacity-30"> <span><CheckIcon className="w-5 text-primary mr-3" /></span>Exclusive Content: Advanced workshops and tutorials on emerging technologies.</li>
              <li className="flex items-center opacity-30"> <span><CheckIcon className="w-5 text-primary mr-3" /></span>Priority Support: Fast-track responses to inquiries and technical support.</li>
              <li className="flex items-center opacity-30"> <span><CheckIcon className="w-5 text-primary mr-3" /></span>Lifetime Access: Permanent access to course materials and updates.</li>
            </ul>
          </article>
        </div>
        
        <div>
          <div className="bg-primary text-white text-center py-2 rounded-t-lg font-bold w-full max-w-md invisible">Best Value</div>
          <article className="text-black flex flex-col px-4 py-7 border border-primary rounded-lg hover:shadow-xl max-w-md">
            <header className=" flex flex-col mb-7">
              <h3 className="mb-3 leading-5 font-bold text-2xl text-secondary">Platinum</h3>
              <p className="font-light">Everything in premium with upgraded features  </p>
            </header>
            
            <div className="flex flex-col mb-10 gap-2">
              <span className="text-4xl font-bold text-secondary">$40 <span className="text-lg ">USD/mo</span></span>
              <Link className="btn btn-lg px-10 hover:border-2 border-secondary text-white font-bold w-full bg-secondary rounded-lg" href="">Get Started</Link>
            </div>

            <ul className=" list-none list-outside flex flex-col gap-3">
              <li className="flex items-center text-black"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span> Access to Core Curriculum: Comprehensive coverage of essential tech skills</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Live Q&A Sessions: Weekly sessions to address questions and clarify concepts.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Basic Course Materials: Downloadable resources, including slides and notes.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Community Access: Join a basic forum or group for peer support and networking.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Completion Certificate: Official certificate upon finishing the course.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Networking Events: Access to exclusive virtual</li>


              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Personalized Feedback: One-on-one feedback on assignments and projects.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Recorded Sessions: Access to recorded lectures for review and study.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Monthly Reviews: Your progress will be reviewed monthly and you&apos;ll be assisted where needed</li>

              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Unlimited Mentorship: Ongoing access to one-on-one mentorship sessions.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Exclusive Content: Advanced workshops and tutorials on emerging technologies.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Priority Support: Fast-track responses to inquiries and technical support.</li>
              <li className="flex items-center"> <span><CheckIcon className="w-5 text-secondary mr-3" /></span>Lifetime Access: Permanent access to course materials and updates.</li>
            </ul>
          </article>
        </div>
        
      </div>
    </section>
  )
}

export default Pricing;
