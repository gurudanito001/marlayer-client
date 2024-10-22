"use client"


import NavBar from "../home/navbar";
import { Metadata } from 'next';
import RegisterForCohortSlider from "./registerForCohortSlider";
import PersonalInfoForm from "./personalInfoForm";
import CourseInfoForm from "./courseInfoForm";
import { useState } from "react";
 
/* export const metadata: Metadata = {
  title: 'Learning | Quales Consulting',
  description: 'Quales Consulting comprises an elite network of the finest freelance Software Developers, Designers, Business Analysts, Product Managers, and Scrum Masters, Data Analysts globally. Leading companies engage freelancers from Quales Consulting for their critical projects.',
}; */

export interface data {
  firstname: string, lastname: string, email: string, phone: string, gender: string, course: string, university: string, programType: "scrum-mastery" | "software-quality-assurance" | "", cohort: string, currentlyWorking: string, plan: "basic" | "standard" | "premium" | "gold" | "platinum" | "", howDoYouIntendToPay: string, whyTakeCourse: string, howDidYouHearAboutUs: string, refererNameAndPhone: string
}

export default function Home() {

  const [formData, setFormData] = useState <data>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    course: "",
    university: "",
    programType: "",
    plan: "",
    cohort: "",
    currentlyWorking: "",
    howDoYouIntendToPay: "",
    whyTakeCourse: "",
    howDidYouHearAboutUs: "",
    refererNameAndPhone: "",
  })

  const [currentScreen, setCurrentScreen] = useState("personalInfo")
  return (
    <>
      <div className="w-screen z-50 absolute top-0 left-0"><NavBar /></div>


      <section className="grid grid-cols-1 xl:grid-cols-2 max-h-screen">
        <RegisterForCohortSlider />
        { currentScreen === "personalInfo" && <PersonalInfoForm formData={formData} setFormData={setFormData} setCurrentScreen = {setCurrentScreen} />}
        { currentScreen === "courseInfo" && <CourseInfoForm formData={formData} setFormData={setFormData} />}
      </section>
    </>
  );
}
