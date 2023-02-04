import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  const {onPress, buttonText = "Add Text"} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonStyle}
      {...props}
    >
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5
  },
  textStyle: {
    fontSize: 16
  }
})

export default CustomButton;
