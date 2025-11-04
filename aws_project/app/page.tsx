"use client";

import PersonalDeatils from "../app/component/PersonalDetails";
import EducationalDetails from "../app/component/EducationalDetails";
import Experience from "../app/component/Experience";
import Preview from "./component/Preview";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CandidateFormProvider } from "./context/CandidateFormContext";

export default function Home() {
  const searchParams = useSearchParams();

  const stepFromurl = parseInt(searchParams.get("step") || "4", 10);
  const [step, setStep] = useState(stepFromurl);


  useEffect(() => {
    setStep(stepFromurl)
  }, [])   // run when url step changes


  // it is tool to move any steps
  const gotoStep = (stepNumber: number) => {
    setStep(stepNumber);
  }

  return (
    <CandidateFormProvider>
      <div className="min-h-screen bg-gray-200">
        <div className="flex items-center justify-center px-4 pt-16 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
          <p className="text-fuchsia-700">Candidate Form</p>
        </div>

        {/* Multi stage form  */}
        <div className="mt-10 px- sm:px-10 md:px-24">
          {step === 1 && <PersonalDeatils />}
          {step === 2 && <EducationalDetails />}
          {step === 3 && <Experience />}
          {step === 4 && <Preview />}
        </div>
      </div>
    </CandidateFormProvider>
  );
}
