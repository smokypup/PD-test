// Import necessary modules
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, Animated } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import AddScreen from "../screens/AddScreen";

// Load fonts
Font.loadAsync({
  asap: require("../assets/fonts/Asap-Regular.ttf"),
});

// Create a stack navigator for the AddScreen
const AddStack = createStackNavigator();
const AddStackNavigator = () => (
  <AddStack.Navigator
    screenOptions={{
      headerShown: false, // Use headerShown instead of headerMode
      ...TransitionPresets.ModalTransition,
    }}
  >
    <AddStack.Screen name="AddStackScreen" component={AddScreen} />
  </AddStack.Navigator>
);

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [appLoaded, setAppLoaded] = useState(false);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadAppResources = async () => {
      await Font.loadAsync({
        asap: require("../assets/fonts/Asap-Regular.ttf"),
      });

      // Simulate some delay
      setTimeout(() => {
        setAppLoaded(true);
        // Start fade animation
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }, 2000);
    };

    loadAppResources();
  }, []);

  if (!appLoaded) {
    return <SplashScreen />;
  }

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <Tab.Navigator
        initialRouteName="Add"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: [
            {
              position: "absolute",
              bottom: 20,
              left: 20,
              right: 20,
              backgroundColor: "#25BEA0",
              borderRadius: 25,
              height: 65,
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/home.png")}
                  resizeMode="contain"
                  style={{
                    width: focused ? 30 : 25,
                    height: focused ? 30 : 25,
                    tintColor: focused ? "#FACC43" : "#FFFFFF",
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/add.png")}
                  resizeMode="contain"
                  style={{
                    width: focused ? 30 : 25,
                    height: focused ? 30 : 25,
                    tintColor: focused ? "#FACC43" : "#FFFFFF",
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/history.png")}
                  resizeMode="contain"
                  style={{
                    width: focused ? 30 : 25,
                    height: focused ? 30 : 25,
                    tintColor: focused ? "#FACC43" : "#FFFFFF",
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </Animated.View>
  );
};

export default Tabs;
