import {createContext, useContext, useState} from "react";


const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('Access_token'));

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('Access_token', token);
        } else {
            localStorage.removeItem('Access_tokens');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>)
}

export const useStateContext = () => {
    return useContext(StateContext);
}
