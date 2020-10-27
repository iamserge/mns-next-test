import React, { useEffect, useState } from "react";
import { getUser } from "../api/user";
import { LOGGEDIN_USER_KEY } from "../utils/constants";
export const defaultUser = {
    id: 0,
    offers: {},
    available_badges: [],
    userOffers: {}
}
const defaultContext = {
    isLoggedIn: false,
    user: defaultUser,
    incorrectUser: false,
    cachedUserId: "",
    logIn: async (_id:string) => {},
    logOut: async () => {},
}

const AuthContext = React.createContext(defaultContext);

const AuthProvider = ({ children }) => {
    const [cachedUserId, setCachedUserId] = useState("");
    const [user, setUser] = useState(defaultUser);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [incorrectUser, setIncorrectUser] = useState(false);

    useEffect(() => {
        let loggedInUser = localStorage.getItem(LOGGEDIN_USER_KEY);
        if (loggedInUser) {
            logIn(loggedInUser);
            setCachedUserId(loggedInUser);
        }
    }, []);
    async function logIn(id: string) {
        const user = await getUser(id);
        if (user.errors) {
            setIncorrectUser(true);
        } else {
            setUser(user);
            setIncorrectUser(false);
        }
        
        setIsLoggedIn(true);
        localStorage.setItem(LOGGEDIN_USER_KEY, id);
        
    }

    async function logOut() {
        setUser(defaultUser)
        setIsLoggedIn(false);
        localStorage.removeItem(LOGGEDIN_USER_KEY);
    }
    const context = {
        user,
        cachedUserId,
        isLoggedIn,
        incorrectUser,
        logIn: logIn,
        logOut: logOut,
    };
 
    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth, AuthContext };
