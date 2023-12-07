"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";


const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
  // State to store the current user
  const [user, setUser] = useState(null);

  // Function to sign in with GitHub
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Function to sign out
  const firebaseSignOut = () => {
    return signOut(auth);
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    
    return () => unsubscribe();
  }, []); 

  
  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useUserAuth = () => {
  return useContext(AuthContext);
};
