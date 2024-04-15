import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import Productivity from "./Productivity";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import EmployeeListScreen from "../Screens/EmployeeList";

const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

function HomePageHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/Group2x.png")} style={styles.image} />
      </View>
      <View style={styles.imagemetroContainer}>
        <Image
          source={require("../assets/moptrologo.png")}
          style={styles.imagemetro}
        />
        <View style={styles.overlay}>
          <Text style={styles.metroImageText}>4</Text>
        </View>
      </View>
      <View style={styles.ProductivityContainer}>
        <View style={styles.dashBoardContainer}>
          <Text style={styles.dashBoardText}>
            Employee Productivity Dashboard
          </Text>
        </View>
        <View style={{ marginTop: 42 }}>
          <View style={{ marginBottom: 21 }}>
            <Productivity
              days="Productivity on Monday"
              percent="4%"
              width={6}
              height={11}
            />
          </View>
          <View style={{ marginBottom: 21 }}>
            <Productivity
              days="Productivity on Tueday"
              percent="92%"
              width={140}
              height={11}
            />
          </View>
          <View style={{ marginBottom: 21 }}>
            <Productivity
              days="Productivity on Wednesday"
              percent="122%"
              width={220}
              height={11}
            />
          </View>
          <View style={{ marginBottom: 21 }}>
            <Productivity
              days="Productivity on Thursday"
              percent="93%"
              width={132}
              height={11}
            />
          </View>
          <View style={{ marginBottom: 21 }}>
            <Productivity
              days="Productivity on Friday"
              percent="89%"
              width={132}
              height={11}
            />
          </View>
          <Productivity
            days="Productivity on Saturday"
            percent="98%"
            width={146}
            height={11}
          />
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
    width: 40,
    height: 40,
  },
  imageContainer: {
    marginTop: (400 / height) * 100,
    marginLeft: 298,
  },
  imagemetro: {
    width: 70,
    height: 70,
  },
  imagemetroContainer: {
    marginTop: (400 / height) * 100,
  },
  metroImageText: {
    color: "#36A546",
    fontSize: 18,
  },
  overlay: {
    position: "absolute",
    top: (-180 / height) * 100,
    right: -25,
    zIndex: 1,
    width: 35,
    height: 35,
    borderRadius: 20,
    borderColor: "#FFFEFE00",
    borderWidth: 1,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  dashBoardContainer: {
    width: 348,
    height: 45,
    borderRadius: 20,
    borderColor: "#FFFEFE00",
    borderWidth: 1,
    backgroundColor: "#1A2C2C99",
    justifyContent: "center",
    alignItems: "center",
  },
  dashBoardText: {
    color: "#FFFFFFB3",
    width: 322,
    height: 25,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25, // Adjust based on your design
    letterSpacing: 0.01,
    opacity: 0.84,
  },
  ProductivityContainer: {
    width: 348,
    height: 495,
    borderColor: "#FFFEFE00",
    borderWidth: 1,
    backgroundColor: "#5E5E5E82",
    borderRadius: 20,
    marginTop: 41,
  },
});

export default HomePageHeader;
