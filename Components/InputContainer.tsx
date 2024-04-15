import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
} from "react-native";

function InputContainer({
  placeholderText,
  secureTextEntry,
  value,
  onChangeText,
}: {
  placeholderText: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholderText}
        underlineColorAndroid="transparent"
        placeholderTextColor="#A9A9A9"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 288,
    height: 50,
    backgroundColor: "#333333",
    borderRadius: 24,
    borderWidth: 1,
    flexDirection: "row",
    elevation: 8,
  },
  input: {
    alignSelf: "stretch",
    color: "#FFF",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: 0.25,
    paddingLeft: 20,
  },
});

export default InputContainer;
