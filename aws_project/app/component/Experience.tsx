"use client";

import { useCandidateForm } from "../context/CandidateFormContext";

const Experience = () => {
  const { state, dispatch } = useCandidateForm();
  return (
    <div className="flex flex-col gap-4 w-80">
      <p>Experince Details</p>
    </div>
  );
};
export default Experience;
