import { View, Text } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppNav from "./AppNav";

const RootNavigation = () => {
  const { isLoading, userToken } = useContext(UserContext);

  return (
    <NavigationContainer>
      {userToken === null ? <AuthStack /> : <AppNav />}
    </NavigationContainer>
  );
};

export default RootNavigation;
