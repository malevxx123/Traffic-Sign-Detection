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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})
export default UploadScreen;
