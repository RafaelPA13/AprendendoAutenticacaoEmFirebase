import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../services/firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ filho }) => {
  const [user, setUser] = useState({});

  const criarUsuario = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logar = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const sair = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const sobrescrever = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      sobrescrever();
    };
  });

  return (
    <UserContext.Provider value={{ criarUsuario, user, sair, logar }}>
      {filho}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
