import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "../../components/back";

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text>CameraScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})

export default CameraScreen;
