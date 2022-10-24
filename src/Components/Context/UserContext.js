import React, { createContext } from "react";
// import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import App from "../../App";

export const AuthContext = createContext();
// const auth = getAuth(App);
const UserContext = ({ children }) => {
  const authInfo = {};
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
