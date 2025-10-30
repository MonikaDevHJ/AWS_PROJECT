"use client";
import { useCandidateForm } from "../context/CandidateFormContext";

const PersonalDeatils = ({ nextStep }: { nexStep: () => void }) => {
  const { state, dispatch } = useCandidateForm();
  
  return (
  <div>Personal Details</div>
  )
};
export default PersonalDeatils;
