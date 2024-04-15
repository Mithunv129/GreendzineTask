import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import EmployeeListScreen from "./Screens/EmployeeList";
import LoginScreen from "./Screens/LoginScreen";
import LoginPageBody from "./Components/LoginPageBody";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";

const Tab = createBottomTabNavigator();
const homeName = "Home";
const user = "Details";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (inputUsername: any, inputPassword: any) => {
    if (inputUsername === "Greendzine" && inputPassword === "Green129") {
      setUsername(inputUsername);
      setPassword(inputPassword);
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === homeName) {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === user) {
                iconName = focused ? "person" : "person-outline"; // Use person icon for "Details"
              }

              if (iconName) {
                // Ensure iconName is not undefined
                return (
                  <Ionicons
                    name={iconName}
                    size={24}
                    color={focused ? "green" : "grey"}
                  />
                );
              } else {
                return null;
              }
            },
            tabBarStyle: {
              backgroundColor: "black",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            },
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
          })}
        >
          <Tab.Screen
            name={homeName}
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name={user}
            component={EmployeeListScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      ) : (
        <View>
          <LoginScreen onLogin={handleLogin} />
        </View>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loginText: {
    fontSize: 24,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
