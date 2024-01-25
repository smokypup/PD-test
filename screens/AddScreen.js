import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddScreen = ({ navigation }) => {
  const [EnteredDeviceId, setEnteredDeviceId] = useState("");
  const [deviceIds, setDeviceIds] = useState([]);
  const inputRef = useRef();

  function deviceIdHandler(enteredText) {
    setEnteredDeviceId(enteredText);
  }

  function addDeviceIdHandler() {
    setDeviceIds((currentDeviceIds) => [...currentDeviceIds, EnteredDeviceId]);
    navigation.navigate("Home", { deviceIds: [...deviceIds, EnteredDeviceId] });

    if (inputRef.current) {
      inputRef.current.clear();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/deviceId.jpg")}
        resizeMode="contain"
        style={{
          position: "absolute",
          top: 73,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <Text style={styles.textStyle}>
        Check the back of your device and enter below the ID of your device
      </Text>
      <TextInput
        style={styles.Input}
        placeholder="Enter the device ID"
        onChangeText={deviceIdHandler}
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
    alignItems: "center",
    justifyContent: "center",
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
  },
  button: {
    top: 20,
    borderRadius: 8,
    backgroundColor: "#FACC43",
    padding: 15,
    width: 161,
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
