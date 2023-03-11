import React, { createContext, useState } from "react";

export const UserContext = createContext();

const AuthContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  return (
    <UserContext.Provider value={{ isLoading, userToken }}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
