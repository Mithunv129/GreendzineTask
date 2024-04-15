import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Productivity({
  days,
  percent,
  width,
  height,
}: {
  days: string;
  percent: string;
  width: number;
  height: number;
}) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.Text1}>{days}</Text>
        <Text style={styles.Text2}>{percent}</Text>
      </View>
      <View style={[styles.levelcontainer, { width, height }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginLeft: 35,
  },
  Text2: {
    color: "#36A546",
    marginRight: 30,
  },
  Text1: {
    color: "#FFFFFF",
  },
  levelcontainer: {
    borderRadius: 20,
    borderColor: "#36A546",
    borderWidth: 1,
    backgroundColor: "#36A54680",
    marginLeft: 15,
  },
});
