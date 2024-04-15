import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
  } from "react-native";
  import EmployeeListPageBody from "../Components/EmployeeListPageBody";
  import React from "react";
  import { LinearGradient } from 'expo-linear-gradient';
  
  const { width, height } = Dimensions.get("window");
  
  function EmployeeListScreen() {
    return (
      <LinearGradient
      colors={['#000000', '#000E09']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      >
        <View style={styles.container}>
          <EmployeeListPageBody />
        </View>
    </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: (21 / height) * 100,
      marginBottom: (21 / height) * 100,
      marginLeft: (21 / width) * 100,
      marginRight: (21 / width) * 100,
    },
  });
  
  export default EmployeeListScreen;
  