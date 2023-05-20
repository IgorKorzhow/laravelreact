import {createContext, useContext, useState} from "react";


const StateContext = createContext({
    token: null,
    setToken: () => {},
});

export const ContextProvider = ({children}) => {
    const [token, _setToken] = useState(localStorage.getItem('Access_token'));

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('Access_token', token);
        } else {
            localStorage.removeItem('Access_token');
        }
    }

    return (
        <StateContext.Provider value={{
            token,
            setToken,

        }}>
            {children}
        </StateContext.Provider>)
}

export const useStateContext = () => {
    return useContext(StateContext);
}
