import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ['latin'] });



const RegisterForm = () => {

  return (
    <section className="bg-white lg:px-24 lg:py-24 w-full lg:w-8/12 h-full overflow-y-scroll ">

      <header className="py-8 bg-primary text-white px-5 lg:hidden">
        <Link href="/learning" className="flex items-center gap-3">
          <Image src="/images/marlayer-logo.svg" width={40} height={40} alt="Marlayer Logo" />
          <h1 className={`font-extrabold text-xl ${dmSans.className}`}>Marlayer Academy</h1>
        </Link>
      </header>



      <form className="my-10 max-w-3xl px-5 lg:px-0">
        <h3 className="text-4xl font-semibold mb-5">Sign up</h3>

        <div className=" grid grid-cols-2 gap-3 mt-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Firstname</span>
            </div>
            <input type="text" placeholder="John" className="input input-bordered rounded-lg w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Lastname</span>
            </div>
            <input type="text" placeholder="Doe" className="input input-bordered rounded-lg w-full" />
          </label>
        </div>

        <label className="form-control w-full mt-5">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
          </div>
          <input type="email" placeholder="johndoe@email.com" className="input input-bordered rounded-lg w-full" />
        </label>

        <label className="form-control w-full mt-5">
          <div className="label">
            <span className="label-text font-semibold">Password</span>
          </div>
          <input type="password" placeholder="**********" className="input input-bordered rounded-lg w-full" />
        </label>

        <label className="form-control w-full mt-5">
          <div className="label">
            <span className="label-text font-semibold">Phone Number</span>
          </div>
          <div className="flex gap-1">
            <select className="select select-bordered w-full max-w-28 rounded-lg">
              <option selected>+1</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <input type="text" placeholder="**********" className="input input-bordered rounded-lg w-full" />
          </div>
        </label>

        <label className="form-control w-full mt-5">
          <div className="label">
            <span className="label-text font-semibold">Gender</span>
          </div>
          <select className="select select-bordered w-full rounded-lg">
            <option disabled selected>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>

        <div className="mt-12">
          <button className="btn btn-lg bg-primary w-full md:w-auto text-white border-primary shadow-sm rounded-lg px-20">Create Account</button>
        </div>

        <div className="flex justify-center md:justify-start">
          <span>Already have an account? <Link href="/learning/sign-in" className="btn btn-link text-secondary">Sign in</Link></span>
        </div>

      </form>
    </section>
  )
}

export default RegisterForm;