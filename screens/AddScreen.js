import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const AddScreen = ({ navigation, route }) => {
  const initialDeviceIds = route.params?.deviceIds || [];
  const [enteredDeviceId, setEnteredDeviceId] = useState("");
  const [deviceIds, setDeviceIds] = useState(initialDeviceIds);
  const inputRef = useRef();

  const addDeviceIdHandler = () => {
    const updatedDeviceIds = [...deviceIds, enteredDeviceId];

    console.log("Updated Device Ids in AddScreen:", updatedDeviceIds);

    // Update the deviceIds state
    setDeviceIds(updatedDeviceIds);

    // Navigate to Home screen with the updated deviceIds
    navigation.navigate("Home", { displayedDeviceIds: updatedDeviceIds });

    // Clear the input and reset enteredDeviceId
    setEnteredDeviceId("");
    if (inputRef.current) {
      inputRef.current.clear();
    }
  };

  // Use useFocusEffect to reset state when the screen gains focus
  useFocusEffect(
    useCallback(() => {
      setDeviceIds(route.params?.deviceIds || []);
    }, [route.params?.deviceIds])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/deviceId.jpg")}
        resizeMode="contain"
        style={{
          alignSelf: "center",
          marginTop: 60,
        }}
      />
      <Text style={styles.textStyle}>
        Check the back of your device and enter below the ID of your device
      </Text>
      <TextInput
        style={styles.Input}
        placeholder="Enter the device ID"
        onChangeText={(text) => setEnteredDeviceId(text)}
        textAlign="center"
        ref={inputRef}
      />
      <TouchableOpacity onPress={addDeviceIdHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> START </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  textStyle: {
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    top: -10,
    fontFamily: "asap",
    color: "#374353",
    paddingBottom: 50,
    paddingTop: 50,
  },
  Input: {
    top: -20,
    width: 250,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#DDE1E1",
    padding: 10,
    fontFamily: "asap",
    alignSelf: "center",
  },
  button: {
    top: 20,
    borderRadius: 8,
    backgroundColor: "#FACC43",
    padding: 15,
    width: 161,
    alignSelf: "center",
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    color: "white",
    fontFamily: "asap",
  },
});
