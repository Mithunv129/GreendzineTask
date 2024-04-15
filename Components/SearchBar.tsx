import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Input } from "react-native-elements";
import SearchImage from "../assets/SearchImage";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

function Search({value, onChangeText }:{value:string;onChangeText:any}) {
  return (
    <View style={style.container}>
      <Input
        placeholder="Search with name"
        rightIcon={<SearchImage />}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        containerStyle={style.inputContainer}
        inputStyle={{ textAlign: 'center' ,color:'#FFFFFF'}}
        value={value} 
        onChangeText={onChangeText} 
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: hp((28 / height) * 100),
  },
  inputContainer: {
    borderRadius: 23,
    paddingTop: "1%",
    borderWidth: 1,
    width: 340,
    height: 55,
    borderColor: "#5E5E5E82",
    backgroundColor: "#5E5E5E82",
  },
});

export default Search;
