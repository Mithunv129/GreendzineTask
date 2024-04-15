import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

export default function EmployeeCard({ data }: { data: any }) {
  const { id, name, dob, role } = data;
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
  };

  const handleRelease = () => {
    setPressed(false);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      onPressOut={handleRelease}
      activeOpacity={0.8}
      style={[
        styles.container,
        pressed && styles.containerPressed, 
      ]}
    >
      <View style={styles.numberContainer}>
        <View style={styles.number}>
          <Text style={styles.numberText}>{id}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>EMP ID</Text>
        <Text style={styles.dot}>:</Text>
        <Text style={styles.value}>{id}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>NAME</Text>
        <Text style={styles.dot}>:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>DOB</Text>
        <Text style={styles.dot}>:</Text>
        <Text style={styles.valuedob}>{dob}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>ROLE</Text>
        <Text style={styles.dot}>:</Text>
        <Text style={styles.valuerole}>{role}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    position: "absolute",
    top: -10,
    right: 10,
    marginTop: 15,
  },
  number: {
    borderRadius: 20,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "#5E5E5E82",
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: "#FFFFFF",
  },
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: "#FFFEFE00",
    borderWidth: 1,
    backgroundColor: "#5E5E5E82",
    width: 300,
    height: 180,
  },
  containerPressed: {
    marginLeft: 10, // Adjust the marginLeft here when pressed
  },
  row: {
    marginTop: 15,
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center", 
  },
  label: {
    width: 100,
    color: "#FFFFFF",
  },
  value: {
    marginLeft: 10,
    color: "#FFFFFF",
    fontWeight: "bold",
    width: 100, 
  },
  dot: {
    marginLeft: -50,
    color: "#FFFFFF",
  },
  valuedob:{
    marginLeft: 10,
    color:'orange',
    fontWeight: "bold",
    width: 100, 
  },
  valuerole:{
    marginLeft: 10,
    color:'#36A546',
    fontWeight: "bold", 
  }
});
