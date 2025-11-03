import React from 'react'

const EducationalDetails = () => {
  return (
    <div>
       <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
        <div>
          <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
            Eduucational Details
          </p>
        </div>


        {/* name field */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Education
          </label>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Graduation"
          />
        </div>

        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Stream
          </label>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Stream"
          />
        </div>

        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            University
          </label>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your University"
          />
        </div>

        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            College Name
          </label>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="SSCW"
          />
        </div>

        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            CGPA
          </label>

          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="85 / 6.6"
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
  )
}

export default EducationalDetails
