import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../components/back";
import CustomButton from "../../components/button";

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.settingsStyle}
        onPress={() => navigation.navigate("Settings")}
      >
        <MaterialIcons name="settings" size={30} color="black" />
      </TouchableOpacity>
      <Text>Dashboard</Text>
      <View style={styles.bottomButtons}>
        <CustomButton
          buttonText="Upload"
          onPress={() => navigation.navigate("Upload")}
        />
        <CustomButton
          buttonText="Video"
          onPress={() => navigation.navigate("Video")}
        />
        <CustomButton
          buttonText="Camera"
          onPress={() => navigation.navigate("Camera")}
        />
      </View>
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
  
  settingsStyle: {
    position: "absolute",
    right: 10,
    top: 50,
  },
  bottomButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Dashboard;
