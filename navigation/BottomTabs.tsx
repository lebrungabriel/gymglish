import { View, Text } from "native-base";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import BookmarkScreen from "../screens/BookmarkScreen";

import Entypo from "@expo/vector-icons/Entypo";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Entypo
                name="home"
                size={21}
                color={focused ? "#5C59F4" : "#333"}
              />
              <Text
                style={{
                  color: focused ? "#5C59F4" : "#333",
                  fontSize: 12,
                }}
              >
                Accueil
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Entypo
                name="heart"
                size={21}
                color={focused ? "#5C59F4" : "#333"}
              />
              <Text
                style={{
                  color: focused ? "#5C59F4" : "#333",
                  fontSize: 12,
                }}
              >
                Favoris
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
