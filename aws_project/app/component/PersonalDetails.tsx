import React from "react";
import { useCandidateForm } from "../context/CandidateFormContext";

const PersonalDetails = ({
  gotoStep
}: {
  gotoStep: (step: number) => void;
}) => {
  const { state, dispatch } = useCandidateForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_PERSONAL_DETAILS",
      payload: { ...state.personal, [e.target.name]: e.target.value }
    });
  };

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
        <div>
          <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
            Perosnal Details
          </p>
        </div>

        {/*  */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Profile Photo
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
        </div>

        {/* name field */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Name
          </label>
          <input
            name="name"
            type="text"
            value={state.personal.name}
            onChange={handleChange}
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Name"
          />
        </div>

        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Email
          </label>
          <input
            name="email"
            type="text"
            value={state.personal.email}
            onChange={handleChange}
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Email"
          />
        </div>

        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Phone Number
          </label>
          <input
            name="phone"
            type="text"
            value={state.personal.phone}
            onChange={handleChange}
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Phone Number"
          />
        </div>

        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Address
          </label>
          <input
            name="address"
            type="text"
            value={state.personal.address}
            onChange={handleChange}
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Address"
          />
        </div>

        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Gender
          </label>

          <input
            name="gender"
            type="text"
            value={state.personal.gender}
            onChange={handleChange}
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Gender"
          />
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:justify-between">
          <div className="w-full rounded-xl bg-fuchsia-500 px-6 py-2 text-lg font-semibold text-white sm:w-auto">
            <button    onClick={()=> gotoStep(1)}>Back</button>
          </div>

          <div className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto">
            <button
            onClick={() => gotoStep(2)}
            >Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
