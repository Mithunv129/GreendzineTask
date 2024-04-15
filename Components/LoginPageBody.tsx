import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import InputContainer from "./InputContainer";
import Button from "./Button";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

function LoginPageBody({ onLogin }: { onLogin: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter valid email and password");
      return;
    }
    onLogin(email, password);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/Groupx.png")} style={styles.image} />
        <Text style={styles.imageText}>We are Electric</Text>
      </View>
      <View style={{ marginTop: (400 / height) * 100 }}>
        <InputContainer
          placeholderText="E-mail "
          secureTextEntry={undefined}
          value={email}
          onChangeText={setEmail}
        />
        <View style={{ marginTop: (200 / height) * 100 }} />
        <InputContainer
          placeholderText="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={{ marginTop: (380 / height) * 100 }}>
      <TouchableOpacity activeOpacity={1} onPress={handleLogin}>
          <Button name="Login" />
        </TouchableOpacity>
        <View style={{ marginTop: (220 / height) * 100 }}>
          <Text style={styles.ForgetPasswordText}>Forgot Password?</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    marginTop: (1200 / height) * 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageText: {
    marginTop: (17 / height) * 100,
    width: 146,
    height: 20,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "normal",
    letterSpacing: 0.05,
    color: "#36A546CC",
    opacity: 1,
  },
  ForgetPasswordText: {
    width: 143,
    height: 19,
    fontFamily: "normal",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: "#36A546",
    opacity: 1,
    textAlign: "center",
    alignSelf: "center",
  },
});

export default LoginPageBody;
