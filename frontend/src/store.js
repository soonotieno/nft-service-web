import React, { createContext, useContext } from "react";
import useReducerWithSideEffects, { UpdateWithSideEffect, } from 'use-reducer-with-side-effects'; // https://www.npmjs.com/package/use-reducer-with-side-effects
import { getStorageItem, setStorageItem } from "utils/useLocalStorage";

const AppContext = createContext();

const reducer = (prevState, action) => {
    const { type } = action;

    if ( type === SET_TOKEN ) {
        const { payload: jwtToken } = action;
        const newState = { ...prevState, jwtToken};
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            setStorageItem("jwtToken", jwtToken);
        });
    }
    else if ( type === DELETE_TOKEN ) {
        const newState = { ...prevState, jwtToken: "" };
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            setStorageItem("jwtToken", "");
        });
    }
    return prevState;
};

export const AppProvider = ({children}) => {
    const [store, dispatch] = useReducerWithSideEffects(reducer, {
        jwtToken: getStorageItem("jwtToken", ""),
    });
    return(
        <AppContext.Provider value={{ store, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);

// Actions
export const SET_TOKEN = "APP/SET_TOKEN";
export const DELETE_TOKEN = "APP/DELETE_TOKEN";

// Action Creators
export const setToken = token => ({ type:SET_TOKEN, payload: token });
export const deleteToken = () => ({ type: DELETE_TOKEN });