// import { createContext, useEffect, useReducer } from "react";
// import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//     user: {
//         user:JSON.parse(localStorage.getItem("user")) || null,
//     },
//     isFetching:false,
//     error:false
// };

// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContextProvider = ({children}) =>{
//     const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//     useEffect(()=>{
//         localStorage.setItem("user", JSON.stringify(state.user))
//       },[state.user])

//     return (
//         <AuthContext.Provider
//          value={{
//              user: state.user,
//              isFetching:state.isFetching,
//               error:state.error,
//               dispatch,
//             }}
//             >{children}</AuthContext.Provider>
//     );
// };

import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const userFromLocalStorage = localStorage.getItem("user");

let parsedUser = null;
try {
  parsedUser = JSON.parse(userFromLocalStorage);
} catch (err) {
  // Gérer l'erreur de parsing JSON ici
  console.error("Erreur lors de l'analyse JSON :", err);
}

const INITIAL_STATE = {
  user: parsedUser || null,
  isFetching: false,
  error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
