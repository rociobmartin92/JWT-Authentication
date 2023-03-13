import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

const AuthContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  // SET ITEM
  const login = async (navigation) => {
    setIsLoading(true);

    try {
      await AsyncStorage.setItem("userToken", value);
    } catch (e) {
      // Poner una alerta con el error al usuario
      throw new Error(e);
    }
    setIsLoading(false);
    navigation.navigate("LoginScreen");
  };

  // REMOVE ITEM
  const logout = async () => {
    setIsLoading(true);
    setUserToken(null);
    try {
      await AsyncStorage.removeItem("userToken");
    } catch (e) {
      // Poner una alerta con el error al usuario
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = (navigation) => {
    navigation.navigate("RegisterScreen");
  };

  // GET ITEM // Funcion para que la App quede abierta luego de una autenticacion exitosa
  const keepLoged = async () => {
    setIsLoading(true);
    try {
      const logedInToken = await AsyncStorage.getItem("userToken");
      setUserToken(logedInToken);
    } catch (e) {
      // Poner una alerta con el error al usuario
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    keepLoged();
  }, []);

  return (
    <UserContext.Provider
      value={{ isLoading, userToken, login, logout, signUp }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
