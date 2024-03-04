import { createContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginContextProvider() {
        const [isAuth,setAuth] = useState(false);

        
}