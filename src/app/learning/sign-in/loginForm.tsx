import Link from "next/link";



const RegisterForm = () =>{

  return(
    <section className="bg-white lg:px-24 lg:py-24 w-full lg:w-8/12 h-full overflow-y-scroll ">
      <header className="py-8 bg-primary text-white px-5 lg:hidden">
        <Link href="/learning" className="text-xl font-semibold">Marlayer</Link>
      </header>
      

      <form className="my-10 max-w-3xl px-5 lg:px-0">
        <h3 className="text-4xl font-semibold mb-3">Sign in</h3>
        <p className=" font-550 text-gray-600">Provide email and password to sign in</p>
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
          <Link href="" className="text-secondary font-550 underline text-right text-sm w-full mt-2">Forgot Password</Link>
        </label>

        <div className="mt-12">
          <button className="btn btn-lg bg-primary text-white border-primary shadow-sm rounded-lg px-20">Sign in</button>
        </div>

        <div>
          <span>Don&apos;t have an account? <Link href="/learning/sign-up" className="btn btn-link text-secondary">Create Account</Link></span>
        </div>
        
      </form>
    </section>
  )
}

export default RegisterForm;