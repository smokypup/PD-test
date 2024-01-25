import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Logo.png")}
        resizeMode="contain"
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          width: 390,
          height: 540,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25BEA0",
  },
  text: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});

export default SplashScreen;
