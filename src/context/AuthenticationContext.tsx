import {createContext, ReactNode, useContext, useState} from "react";

interface AuthenticationContextType {
    isLoggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
}

const AuthenticationContext = createContext<AuthenticationContextType | undefined>(undefined);

export const AuthenticationContextProvider = ({children}: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const logIn = () => {}

    const logOut = () => {}

    return (
        <AuthenticationContext.Provider value={{isLoggedIn: false}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export const useAuthenticationContext = () :AuthenticationContextType => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useAuthenticationContext must be used within an AuthenticationContextProvider');
    }
    return context;
}