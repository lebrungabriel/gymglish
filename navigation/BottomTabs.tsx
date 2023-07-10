import { View, Text } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BookmarkScreen from "../screens/BookmarkScreen";
import Entypo from "@expo/vector-icons/Entypo";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    // Bottom tab navigation using createBottomTabNavigator
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* Home Screen */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: () => null, // Hide the tab bar label
          tabBarIcon: ({ focused }) => (
            // Custom icon and label for the Home tab
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {/* Icon for the Home tab */}
              <Entypo
                name="home"
                size={21}
                color={focused ? "#5C59F4" : "#333"}
              />
              {/* Label for the Home tab */}
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

      {/* Bookmark Screen */}
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarLabel: () => null, // Hide the tab bar label
          tabBarIcon: ({ focused }) => (
            // Custom icon and label for the Bookmark tab
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {/* Icon for the Bookmark tab */}
              <Entypo
                name="heart"
                size={21}
                color={focused ? "#5C59F4" : "#333"}
              />
              {/* Label for the Bookmark tab */}
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
