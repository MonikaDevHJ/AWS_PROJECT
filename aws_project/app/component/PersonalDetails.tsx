"use client";
import { useCandidateForm } from "../context/CandidateFormContext";

const PersonalDeatils = ({ nextStep }: { nextStep: () => void }) => {
  const { state, dispatch } = useCandidateForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_PERSONAL_DETAILS",
      payload: { ...state.personalDetails, [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="flex flex-col gap-4 w-80">
      <p className="text-lg font-semibold">Personal Details</p>
      <input type="text"
        name="name"
        value={state.personalDetails.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="border p-2 rounded"


      />
      <input type="email" name="email" value={state.personalDetails.email}
        onChange={handleChange}
        placeholder="Enter Your email"
        className="broder p-2 rounded"

      />

      <input
        type="text"
        name="phone"
        value={state.personalDetails.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="border p-2 rounded"
      />
      <button
        onClick={nextStep}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Next
      </button>


    </div>
  )
};
export default PersonalDeatils;

