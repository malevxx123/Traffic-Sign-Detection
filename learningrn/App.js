import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import CustomButton from "./components/button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <CustomButton
        onPress={() =>
          Alert.alert(
            "TRIGGER",
            "Ibutang didi kun magnano an button pag ginpindot"
          )
        }
        buttonText="Ibutang didi kun nano an name san button"
      />
      <CustomButton
        onPress={() =>
          Alert.alert(
            "TRIGGER",
            "Ibutang didi kun magnano an button pag ginpindot"
          )
        }
        buttonText="Ini panduwa na button pero same component"
      />
      <CustomButton
        onPress={() =>
          Alert.alert(
            "TRIGGER",
            "Ibutang didi kun magnano an button pag ginpindot"
          )
        }
        buttonText="Adi liwat another button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
