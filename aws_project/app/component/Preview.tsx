"use client"

import { useCandidateForm } from "../context/CandidateFormContext";

const Preview = () => {

  const {state} = useCandidateForm();

  return (
    <div className="mt-10 px-4 sm:px-10 md:px-24">
      <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-fuchsia-700">
          Preview Your Details
        </h2>

        {/* Personal Info */}
        <div className="mb-6">
          <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="mb-2 text-xl font-semibold">
                👤 Personal Information
              </p>
              <button className="text-sm text-blue-600 underline hover:text-blue-800">
                ✏️Edit
              </button>
            </div>
            <div className="mt-3 ml-8 space-y-2">
              <p>
                <strong>Name:</strong>{state.personal.name}
              </p>
              <p>
                <strong>Phone:</strong>{state.personal.phone}
              </p>
              <p>
                <strong>Email:</strong>{state.personal.email}
              </p>
              <p>
                <strong>Gender:</strong>{state.personal.gender}
              </p>
             
            </div>
          </div>
        </div>

        {/* Education Info */}
        <div className="mb-6">
          <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="mb-2 text-xl font-semibold">🎓 Education Details</p>
              <button className="text-sm text-blue-600 underline hover:text-blue-800">
                ✏️Edit
              </button>
            </div>
            <div className="mt-3 ml-8 space-y-2">
              <p>
                <strong>Degree:</strong>{state.education.degree}
              </p>
              <p>
                <strong>Stream:</strong>{state.education.stream}
              </p>
              <p>
                <strong>University:</strong>{state.education.university}
              </p>
              <p>
                <strong>College:</strong>{state.education.college}
              </p>
              <p>
                <strong>Score:</strong>{state.education.score}
              </p>
            </div>
          </div>
        </div>

        {/* Experience Info */}
        <div className="mb-6">
          <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="mb-2 text-xl font-semibold">
                💼 Experience Details
              </p>
              <button className="text-sm text-blue-600 underline hover:text-blue-800">
                ✏️Edit
              </button>
            </div>
            <div className="mt-3 ml-8 space-y-2">
              <p>
                <strong>Company:</strong>{state.experience.company}
              </p>
              <p>
                <strong>Role:</strong>{state.experience.company}
              </p>
              <p>
                <strong>Years:</strong>{state.experience.years}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-12">
          <button className="rounded-2xl border border-gray-500 bg-white px-6 py-2 text-xl font-semibold text-gray-700 hover:bg-gray-100">
            Back
          </button>

          <button className="rounded-2xl border border-green-600 bg-green-600 px-6 py-2 text-xl font-semibold text-white hover:bg-green-500">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Preview;
