import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

function Button({ name }: { name: string }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#00FF25", "#36A546", "#000000"]}
        locations={[0, 0.3, 1.8]} // Location for smooth transition
        style={styles.gradient}
        start={{ x: 0, y: 0 }} // Start from top
        end={{ x: 0, y: 1 }} // End at bottom
      >
        <PaperButton labelStyle={styles.buttonText}>{name}</PaperButton>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 288,
    height: 54, 
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#8CFF0026", 
    elevation: 8,
    overflow: "hidden", 
  },
  gradient: {
    flex: 1,
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFFFFF8C",
    alignSelf: "center",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: 0.25,
    textAlign:'center'
  },
});

export default Button;
