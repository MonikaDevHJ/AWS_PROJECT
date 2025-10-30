"use client";

import { Duru_Sans } from "next/font/google";
import React, { createContext, useReducer, useContext, ReactNode, Children } from "react";

// Define form data shape
interface CandidateFormState {
    personalDetails: {
        name: string;
        email: string;
        phone: string;
    };
    educationaleDetails: {
        degree: string;
        college: string;
        year: string;
    };
    experienceDetails: {
        company: string;
        role: string;
        duration: string;
    };
}

// Define All action (What can chnage the state)

type CandidateFormAction =
    | {
        type: "SET_PERSONAL_DETAILS";
        payload: CandidateFormState["personalDetails"];
    }
    | {
        type: "SET_EDUCATIONAL_DETAILS ";
        payload: CandidateFormState["educationaleDetails"];
    }
    | {
        type: "SET_EXPERIENCE_DETAILS";
        payload: CandidateFormState["experienceDetails"];
    };

// initial state (empty value)
const initialState: CandidateFormState = {
    personalDetails: { name: "", email: "", phone: "" },
    educationaleDetails: { degree: "", college: "", year: "" },
    experienceDetails: { company: "", role: "", duration: "" }
};

// Reducer  fucntion - control how state chenges

function CandidateFormReducer(state: CandidateFormState, action: CandidateFormAction): CandidateFormState {
    switch (action.type) {
        case "SET_PERSONAL_DETAILS":
            return { ...state, personalDetails: action.payload };
        case "SET_EDUCATIONAL_DETAILS ":
            return { ...state, educationaleDetails: action.payload };
        case "SET_EXPERIENCE_DETAILS":
            return { ...state, experienceDetails: action.payload };
        default:
            return state;

    }


}

// create Context 

const CandidateFormContext = createContext <{
    state : CandidateFormState;
    dispatch : React.Dispatch<CandidateFormAction>;
}>({
    state: initialState,
    dispatch : ()=> null
});


// Provider to wrap enitre app

export const CandidateFormProvider  = ({children}:{children:ReactNode})=>{
    const [state, dispatch] = useReducer(
        CandidateFormReducer, initialState
    );

    return (
        <CandidateFormContext.Provider value={{state,dispatch}}>
            {children}
        </CandidateFormContext.Provider>
    );
};


// custom Hook for  easy acces
 export const useCandidateForm = ()=> useContext(CandidateFormContext);