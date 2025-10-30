"use client"

import PersonalDeatils from "../app/component/PersonalDetails"
import EducationalDetails from "../app/component/EducationalDetails"
import Experience from "../app/component/Experience"
import Preview from "./component/Preview";
import { useState } from "react";

export default function Home() {

  const [step, setStep] = useState(1)

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalDeatils nextStep={nextStep} />;

      // case 2:
      //   return <EducationalDetails nextStep={nextStep} prevStep={prevStep} />;
      // case 3:
      //   return <Experience nextstep={nextStep} prevStep={prevStep} />;
      // case 4:
      //   return <Preview prevStep={prevStep} />
      // default:
        return <PersonalDeatils nextStep={nextStep} />
    }
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <p className="text-2xl font-bold mb-6">Candidate Multi-Step Form</p>
      {renderStep()}
      <p className="mt-4 text-gray-500">step {step} of 4</p>













    
    </div>
  );
}
