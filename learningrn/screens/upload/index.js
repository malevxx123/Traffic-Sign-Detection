import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "../../components/back";

const UploadScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text>UploadScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 0, 0.5)", // neon yellow with 50% opacity
    alignItems: "center",
    justifyContent: "center",
  },
})
export default UploadScreen;
