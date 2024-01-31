import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DeviceProvider } from "./DeviceContext";
import Tabs from "./navigation/tabs";

const App = () => {
  return (
    <NavigationContainer>
      <DeviceProvider>
        <Tabs />
      </DeviceProvider>
    </NavigationContainer>
  );
};

export default App;
