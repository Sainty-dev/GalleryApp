// src/navigation/AppNavigator.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GalleryScreen from '../screens/GalleryScreen';
import ImageDetailScreen from '../screens/ImageDetailScreen';

export type RootStackParamList = {
  Gallery: undefined;
  ImageDetail: {imageId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"#0442a5"},headerTitleStyle:{color:"#FFFFFF"},headerBackTitleStyle:{backgroundColor:'white'}}}>
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{title: 'Gallery'}}
      />
      <Stack.Screen
        name="ImageDetail"
        component={ImageDetailScreen}
        options={{title: 'Image Detail',headerTintColor:"#FFFFFF"}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
