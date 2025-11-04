"use client";
import { useCandidateForm } from "../context/CandidateFormContext";

const Experience = ({ gotoStep }: { gotoStep: (step: number) => void }) => {
  const { state, dispatch } = useCandidateForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_PERSONAL_DETAILS",
      payload: { ...state.personal, [e.target.name]: e.target.value }
    });
  };

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
              name="company"
              type="text"
              value={state.experience.company}
              onChange={handleChange}
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Infosys"
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-semibold sm:text-lg">
              Designation
            </label>
            <input
              name="manager"
              type="text"
              value={state.experience.designation}
              onChange={handleChange}
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Software Deveoper / Sales Manager"
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-semibold sm:text-lg">
              Company Location
            </label>
            <input
              name="Loaction"
              type="text"
              value={state.experience.location}
              onChange={handleChange}
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Bengalore"
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-semibold sm:text-lg">
              Year of Experience
            </label>
            <input
              name="year"
              type="text"
              value={state.experience.years}
              onChange={handleChange}
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="2.2"
            />
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:justify-between">
            <div className="w-full rounded-xl bg-fuchsia-500 px-6 py-2 text-lg font-semibold text-white sm:w-auto">
              <button onClick={() => gotoStep(2)}>Back</button>
            </div>

            <div className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto">
              <button onClick={() => gotoStep(4)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
