import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import CameraScreen from "../screens/camera";
import Dashboard from "../screens/dashboard";
import Settings from "../screens/settings";
import UploadScreen from "../screens/upload";
import VideoScreen from "../screens/video";

const MainStack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          gestureDirection: "horizontal",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <MainStack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Upload"
          component={UploadScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Video"
          component={VideoScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
