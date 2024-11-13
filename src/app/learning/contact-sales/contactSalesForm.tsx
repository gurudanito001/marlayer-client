import Link from "next/link";
import FAQs from "../home/faqs";



const ContactSalesForm = () => {

  return (

      <form className="xl:max-w-3xl bg-white text-black p-5 pb-14 lg:p-10 xl:shadow-lg order-1 xl:order-2 h-auto"> 
        <div className=" grid grid-cols-2 gap-3 mt-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Firstname <span className="text-secondary font-bold">*</span></span>
            </div>
            <input type="text" placeholder="John" className="input input-bordered rounded-lg w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Lastname <span className="text-secondary font-bold">*</span></span>
            </div>
            <input type="text" placeholder="Doe" className="input input-bordered rounded-lg w-full" />
          </label>
        </div>

        <div className=" grid grid-cols-2 gap-3 mt-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Email <span className="text-secondary font-bold">*</span></span>
            </div>
            <input type="email" placeholder="johndoe@email.com" className="input input-bordered rounded-lg w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Company Name </span>
            </div>
            <input type="text" placeholder="Alphabet Inc." className="input input-bordered rounded-lg w-full" />
          </label>
        </div>

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
            <span className="label-text font-semibold">Message <span className="text-secondary font-bold">*</span></span>
          </div>
          <textarea className="textarea textarea-bordered rounded-lg" rows={3} placeholder="What else would you like us to know"></textarea>
        </label>
        <p className="text-secondary text-sm mt-5">Fields marked with an asterisk (*) are required.</p>

        <div className="mt-7">
          <button className="btn btn-lg bg-primary text-white border-primary shadow-sm rounded-lg px-20">Submit</button>
        </div>
      </form>

  )
}

export default ContactSalesForm;