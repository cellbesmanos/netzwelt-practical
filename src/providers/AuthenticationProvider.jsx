import React, { createContext, useState } from "react";

export const authenticationContext = createContext(null);

export default function AuthenticationProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <authenticationContext.Provider value={[user, setUser]}>
      {children}
    </authenticationContext.Provider>
  );
}
