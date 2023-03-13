import React, { useContext } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import { UserContext } from "../context/AuthContext";

export default function StartScreen({ navigation }) {
  const { login, signUp } = useContext(UserContext);

  return (
    <Background>
      <Logo />
      <Header> Auth with JWT and OAuth</Header>
      <Button mode="contained" onPress={() => login(navigation)}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => signUp(navigation)}>
        Sign Up
      </Button>
    </Background>
  );
}
