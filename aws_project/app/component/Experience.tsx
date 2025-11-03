"use client";

import { useCandidateForm } from "../context/CandidateFormContext";

const Experience = () => {
  const { state, dispatch } = useCandidateForm();
  return (
    <div>
      <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
          <div>
            <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
              Experience Details
            </p>
          </div>


          {/* name field */}
          <div>
            <label className="mb-2 block text-base font-semibold sm:text-lg">
              Company Name
            </label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Infosys"
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-semibold sm:text-lg">
              Designation
            </label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Software Deveoper / Sales Manager"
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-semibold sm:text-lg">
              Company Location
            </label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Bengalore"
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-semibold sm:text-lg">
              Year of Experience
            </label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="2.2"
            />
          </div>

         


          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:justify-between">
            <div className="w-full rounded-xl bg-fuchsia-500 px-6 py-2 text-lg font-semibold text-white sm:w-auto">

              <button>
              Back
              </button>
            </div>

            <div className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto">
              <button>
                Next
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
