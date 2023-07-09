import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import BottomTabs from "./BottomTabs";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="BottomTabs" component={BottomTabs} />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
