"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { data } from "./page";


const PersonalInfoForm = ({formData, setFormData, setCurrentScreen}: {formData: data, setFormData: (state: any)=>void, setCurrentScreen: (screen: string)=>void}) =>{

  


  const handleChangeFormData = (prop: string) => (event: any)=>{
    setFormData( (prevState: any) => ({
      ...prevState,
      [prop]: event.target.value
    }))
  }

  const disableSubmitButton = () =>{
    if(formData?.firstname === "" || formData?.lastname === "" || formData?.email === "" || formData?.phone === "" || formData?.gender === "" || formData?.course === "" || formData?.university === "" || formData?.programType === "" || formData?.cohort === ""){
      return true
    }else{
      return false
    }
  }
  return (
    <section className="bg-white py-32 px-5 lg:px-24 flex flex-col items-center h-screen overflow-y-auto">
      <h1 className="text-primary text-3xl mb-10 w-full max-w-550">Register for a Cohort</h1>
      <div className="flex items-center mb-5 w-full max-w-550">
        <h2 className="text-primary text-lg font-light mr-auto">Let&apos;s help choose the best plan for you, click here to find out. </h2>
        <Link href="/learning/learningplans"  className="btn bg-green-600 text-white rounded-full px-8 h-12">View Learning Plans</Link>
      </div>
      

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <input type="text" value={formData?.firstname} onChange={handleChangeFormData("firstname")} className="grow px-5 placeholder:text-sm placeholder:text-red-900 h-12" placeholder="First Name" />
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550 ">
        <input type="text" value={formData?.lastname} onChange={handleChangeFormData("lastname")} className="grow px-5 placeholder:text-sm placeholder:text-red-900 h-12" placeholder="Last Name" />
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <input type="email"  value={formData?.email} onChange={handleChangeFormData("email")}  className="grow px-5 placeholder:text-sm placeholder:text-red-900 h-12" placeholder="Email Address" />
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <input type="text"  value={formData?.phone} onChange={handleChangeFormData("phone")}  className="grow px-5 placeholder:text-sm placeholder:text-red-900 h-12" placeholder="Phone Number (WhatsApp Number)" />
      </label>


      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.gender} onChange={handleChangeFormData("gender")} className={`select bg-transparent focus:border-none w-full ${formData?.gender === "" ? "text-red-900" : "text-black"}`}>
          <option disabled value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>


      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg w-full max-w-550">
        <input type="email"  value={formData?.course} onChange={handleChangeFormData("course")}  className="grow px-5 placeholder:text-sm placeholder:text-red-900 h-12" placeholder="Course of Study" />
      </label>
      <span className="text-xs text-gray-400 mb-5 w-full px-8 max-w-550">(please write in full)</span>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <input type="text"  value={formData?.university} onChange={handleChangeFormData("university")}  className="grow px-5 placeholder:text-sm placeholder:text-red-900 h-12" placeholder="University Attended" />
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.programType} onChange={handleChangeFormData("programType")} className={`select bg-transparent focus:border-none w-full ${formData?.programType === "" ? "text-red-900" : "text-black"}`}>
          <option disabled value="">Program Type</option>
          <option value="software-quality-assurance">Software Quality Assurance</option>
          <option value="scrum-mastery">Scrum Mastery</option>
        </select>
      </label>

      {formData?.programType && <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.cohort} onChange={handleChangeFormData("cohort")} className={`select bg-transparent focus:border-none w-full ${formData?.cohort === "" ? "text-red-900" : "text-black"}`}>
          <option disabled value="">Cohort</option>
          <option value="cohort-19">Cohort 19</option>
          <option value="cohort-20">Cohort 20</option>
          <option value="cohort-21">Cohort 21</option>
        </select>
      </label>}


      <button disabled={disableSubmitButton()} className="btn bg-primary text-white rounded-full mx-auto mt-10 px-14 h-12" onClick={(e) => {
        e.preventDefault();
        setCurrentScreen("courseInfo")
      }}>Next</button>
    </section>
  )
}

export default PersonalInfoForm;