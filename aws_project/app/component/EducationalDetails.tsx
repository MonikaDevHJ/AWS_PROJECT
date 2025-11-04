"use client";
import React from "react";
import { useCandidateForm } from "../context/CandidateFormContext";

const EducationalDetails = ({
  gotoStep,
}: {
  gotoStep: (step: number) => void;
}) => {
  const { state, dispatch } = useCandidateForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_EDUCATIONAL_DETAILS",
      payload: { ...state.education, [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
        <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
          Educational Details
        </p>

        {/* Degree */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Degree
          </label>
          <input
            name="degree"
            type="text"
            value={state.education.degree}
            onChange={handleChange}
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Graduation (e.g., B.Tech, B.Sc)"
          />
        </div>

        {/* Stream */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Stream
          </label>
          <input
            name="stream"
            type="text"
            value={state.education.stream}
            onChange={handleChange}
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Stream (e.g., Computer Science)"
          />
        </div>

        {/* University */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            University
          </label>
          <input
            name="university"
            type="text"
            value={state.education.university}
            onChange={handleChange}
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your University"
          />
        </div>

        {/* College */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            College Name
          </label>
          <input
            name="college"
            type="text"
            value={state.education.college}
            onChange={handleChange}
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your College Name"
          />
        </div>

        {/* Score */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            CGPA / Percentage
          </label>
          <input
            name="score"
            type="text"
            value={state.education.score}
            onChange={handleChange}
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="e.g., 8.5 CGPA / 85%"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:justify-between">
          <button
            onClick={() => gotoStep(1)}
            className="w-full sm:w-auto rounded-xl bg-fuchsia-500 px-6 py-2 text-lg font-semibold text-white hover:bg-fuchsia-600"
          >
            Back
          </button>

          <button
            onClick={() => gotoStep(3)}
            className="w-full sm:w-auto rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white hover:bg-fuchsia-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationalDetails;
