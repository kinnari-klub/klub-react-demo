import React, { useEffect, useState } from 'react';
interface Props {
    children: React.ReactNode
}

export const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email: any, password: any) => {
        console.log("email", email, password);
    },
});

export const AuthContextProvider = (props: Props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const userLogin = localStorage.getItem('isLoggedIn');
        if(userLogin === '1') {
            console.log("isLoggedIn", isLoggedIn);
          setIsLoggedIn(true);
        }
      }, []);
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }
    const loginHandler = () => {
        console.log("login handler");
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }
    return <AuthContext.Provider value={
        {
            isLoggedIn: isLoggedIn, 
            onLogout: logoutHandler, 
            onLogin: loginHandler
        }
    }>{props.children}</AuthContext.Provider>
}

export default AuthContext;