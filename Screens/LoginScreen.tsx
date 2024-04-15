import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import LoginPageBody from "../Components/LoginPageBody";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

function LoginScreen({ onLogin }: { onLogin: (username: string, password: string) => void }) {
  const handleLogin = (username: string, password: string) => {
    // Your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    // Call the onLogin function passed as a prop
    onLogin(username, password);
  };

  return (
    <LinearGradient
      colors={["#000000", "#000E09"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.container}>
        <LoginPageBody onLogin={handleLogin} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: (61 / height) * 100,
    marginBottom: (61 / height) * 100,
    marginLeft: (61 / width) * 100,
    marginRight: (61 / width) * 100,
  },
});

export default LoginScreen;
