import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import BackButton from "../../components/back";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Directory, Entypo } from "@expo/vector-icons";

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
      >
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Camera Pressed")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="camera" size={32} color={"#f1f1f1"} />
            {/* <Text style={{ color: "white" }}>Take a picture</Text> */}
          </View>
        </TouchableOpacity>
      </Camera>
      <BackButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    paddingVertical: 40,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
  button: {
    height: 70,
    width: 70,
    position: "absolute",
    bottom: 10,
    right: "40%",
    borderRadius: 34,
    borderWidth: 2,
    borderColor: 'white'
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f1f1f1",
    marginLeft: 10,
  },
});

export default CameraScreen;
