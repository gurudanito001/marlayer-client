import Sidebar from "./sidebar";
import RegisterForm from "./loginForm";

const SignUp = () =>{

  return (
    <section className="bg-white lg:p-2 w-screen h-screen flex">
      <Sidebar />
      <RegisterForm />
    </section>
  )
}

export default SignUp