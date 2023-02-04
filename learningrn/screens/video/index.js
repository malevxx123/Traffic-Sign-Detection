import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "../../components/back";

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text>VideoScreen</Text>
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

export default VideoScreen;
