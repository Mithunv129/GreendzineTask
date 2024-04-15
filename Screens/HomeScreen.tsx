import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
  } from "react-native";
  import HomePageHeader from "../Components/HomePageBody";
  import React from "react";
  import { LinearGradient } from 'expo-linear-gradient';
  
  const { width, height } = Dimensions.get("window");
  
  function HomeScreen() {
    return (
      <LinearGradient
      colors={['#000000', '#000E09']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      >
        <View style={styles.container}>
          <HomePageHeader/>
        </View>
    </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: (22 / height) * 100,
      marginBottom: (22 / height) * 100,
      marginLeft: (22 / width) * 100,
      marginRight: (22 / width) * 100,
    },
  });
  
  export default HomeScreen;
  