import { createContext, useReducer } from "react";

export const LanguageContext = createContext();

const INITIAL_STATE = { bosnian: false };

const LanguageReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                bosnian: !state.bosnian
            };
        default:
            return state;
    };
};

export const LanguageProvider = (props) => {
    const [state, dispatch] = useReducer(LanguageReducer, INITIAL_STATE);

    return (
        <LanguageContext.Provider value={{ state, dispatch }}>
            {props.children}
        </LanguageContext.Provider>
    );
};