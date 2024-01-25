import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import AddScreen from "../screens/AddScreen";
import CheckScreen from "../screens/CheckScreen";

// Load fonts
Font.loadAsync({
  asap: require("../assets/fonts/Asap-Regular.ttf"),
});

const AddStack = createStackNavigator();
const AddStackNavigator = () => (
  <AddStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AddStack.Screen name="AddStackScreen" component={AddScreen} />
  </AddStack.Navigator>
);

const CheckStack = createStackNavigator();
const CheckStackNavigator = () => (
  <CheckStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <CheckStack.Screen name="CheckScreen" component={CheckScreen} />
  </CheckStack.Navigator>
);

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    const loadAppResources = async () => {
      await Font.loadAsync({
        asap: require("../assets/fonts/Asap-Regular.ttf"),
      });

      // Simulate some delay
      setTimeout(() => {
        setAppLoaded(true);
      }, 2000);
    };

    loadAppResources();
  }, []);

  if (!appLoaded) {
    return <SplashScreen />;
  }

  return (
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
      <Tab.Screen
        name="Check"
        component={CheckStackNavigator}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
