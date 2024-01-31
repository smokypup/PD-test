import React, { useState, useRef, useCallback, useEffect } from "react";
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
import { useDeviceContext } from "../DeviceContext"; // Adjust the path accordingly

const AddScreen = ({ navigation }) => {
  const { state, dispatch } = useDeviceContext();
  const initialDeviceIds = state.deviceIds || [];
  const [enteredDeviceId, setEnteredDeviceId] = useState("");
  const [deviceIds, setDeviceIds] = useState(initialDeviceIds);
  const inputRef = useRef();

  const addDeviceIdHandler = () => {
    const updatedDeviceIds = [...deviceIds, enteredDeviceId];
    dispatch({ type: "ADD_DEVICE", payload: enteredDeviceId }); // Update the global state

    setDeviceIds(updatedDeviceIds);
    setEnteredDeviceId("");
    if (inputRef.current) {
      inputRef.current.clear();
    }

    // Navigate to "Home" screen and pass the updated deviceIds
    navigation.navigate("Home", {
      deviceIds: updatedDeviceIds,
    });
  };

  useFocusEffect(
    useCallback(() => {
      // Update local state when the screen is focused
      const newDeviceIds = state.deviceIds || [];
      setDeviceIds(newDeviceIds);
    }, [state.deviceIds])
  );

  useEffect(() => {
    // Update the deviceIds in the route params whenever it changes
    navigation.setParams({
      deviceIds: deviceIds,
    });
  }, [deviceIds, navigation]);

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
      <TouchableOpacity
        onPress={() => {
          addDeviceIdHandler();
        }}
      >
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
