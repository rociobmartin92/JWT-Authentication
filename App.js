import React from "react";
import { Provider } from "react-native-paper";
import { StyleSheet } from "react-native";
import { theme } from "./src/core/theme";
import AuthContext from "./src/context/AuthContext";
import AppNav from "./src/stack/AppNav";
import RootNavigation from "./src/stack/RootNavigation";

export default function App() {
  return (
    <Provider theme={theme}>
      <AuthContext>
        <RootNavigation />
      </AuthContext>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
