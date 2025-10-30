"use client";
import { useCandidateForm } from "../context/CandidateFormContext";

const EducationalDetails = ({nextStep} : {nextStep : ()=> void}) => {
  const { state, dispatch } = useCandidateForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_EDUCATIONAL_DETAILS ",
      payload: { ...state.educationaleDetails, [e.target.name]: e.target.value }
    });
  };
  return (
    <div className="flex flex-col gap-4 w-80">
      <p className="text-lg font-semibold">Education Deatils</p>

      <input
        type="text"
        name="Degree"
        value={state.educationaleDetails.degree}
        placeholder="Enter You Graduation"
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="College"
        value={state.educationaleDetails.college}
        placeholder="Enter Your Graduation"
        onChange={handleChange}
        className="border p-2 rouded"
      />
      <input
        type="text"
        name="Year of Passout "
        value={state.educationaleDetails.year}
        placeholder="Enter Your Gradution is year "
        onChange={handleChange}
        className="border p-2 rounded"
      />
    </div>
  );
};
export default EducationalDetails;
