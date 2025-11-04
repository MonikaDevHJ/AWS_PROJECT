"use client";

import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Children
} from "react";

// 1️⃣ Define the Shape of our form Data
interface PersonalDeatils {
  name: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
}
interface EducationalDetails {
  degree: string;
  stream: string;
  university: string;
  college: string;
  score: string;
}

interface Experience {
  company: string;
  designation: string;
  location: string;
  years: string;
}

// 2️⃣ combine Them all in to one big state type
interface CandidateFormSatate {
  personal: PersonalDeatils;
  education: EducationalDetails;
  experience: Experience;
}

// 3️⃣ Create initial default values

const initialState: CandidateFormSatate = {
  personal: {
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: ""
  },
  education: {
    degree: "",
    stream: "",
    university: "",
    college: "",
    score: ""
  },
  experience: {
    company: "",
    designation: "",
    location: "",
    years: ""
  }
};

// 4️⃣ Define all possible actions
type Action =
  | { type: "SET_PERSONAL_DETAILS"; payload: PersonalDeatils }
  | { type: "SET_EDUCATIONAL_DETAILS"; payload: EducationalDetails }
  | { type: "SET_EXPERIENCE_DETAILS"; Payload: Experience };

// 5️⃣ Reducer function
function formReducer(
  state: CandidateFormSatate,
  action: Action
): CandidateFormSatate {
  switch (action.type) {
    case "SET_PERSONAL_DETAILS":
      return { ...state, personal: action.payload };
    case "SET_EDUCATIONAL_DETAILS":
      return { ...state, education: action.payload };
    case "SET_EXPERIENCE_DETAILS":
      return { ...state, experience: action.Payload };
    default:
      return state;
  }
}

// 6️⃣ Create Context
const CandidateFormContext = createContext<{
  state: CandidateFormSatate;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {}
});

// 7️⃣ Provider component
export const CandidateFormProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <CandidateFormContext.Provider value={{ state, dispatch }}>
      {children}
    </CandidateFormContext.Provider>
  );
};


// // 8️⃣ Custom Hook

export const useCandidateForm = () => useContext(CandidateFormContext)