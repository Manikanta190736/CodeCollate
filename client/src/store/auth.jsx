import {createContext, useContext, useState} from "react";

export const AuthContext = createContext();

export const  AuthProvider = ({children}) =>{

    const [token,setToken ]= useState(localStorage.getItem("token"));


    const storetokenInLS = (serverToken)=>{
        return localStorage.setItem('token',serverToken);

    };

    let isLoggedIn = !!token;
    console.log('isLoggedIn', isLoggedIn);

    //logout functionality

    const  LogoutUser= () =>{
        setToken("");
        return localStorage.removeItem("token");
    };
    return( <AuthContext.Provider value={{ isLoggedIn,storetokenInLS,LogoutUser}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth =() =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue) {
    throw new Error("useAuth must be used within the AuthProvider");
    }
    return authContextValue ;
};