import React, {useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BackButton from "../../components/back";
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Directory } from '@expo/vector-icons'

const Button = ({title, onPress, icon, color}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Directory name={icon} size={28} color={color ? color : '#f1f1f1'}/>
      <Text style={styles.text}></Text>
      <View>
        <Button title={'Take a picture'} icon='camera' />
      </View>
    </TouchableOpacity>
  )
}

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
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, [])
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
      >
        <Text>hello</Text>
      </Camera>
      <BackButton />
      <Text>CameraScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    paddingBottom: 40,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
  button: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#f1f1f1',
    marginLeft: 10,
  }
})

export default CameraScreen;
