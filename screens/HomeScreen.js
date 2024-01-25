import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const HomeScreen = ({ route }) => {
  const { deviceIds } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/Search.png")}
          style={styles.inputImage}
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <View style={styles.deviceIdContainer}>
        {deviceIds &&
          deviceIds.map((deviceId, index) => (
            <View key={index} style={styles.deviceIdBox}>
              <Text style={styles.header}>{` Device ID: ${deviceId}`}</Text>
              <Text style={styles.subHeader}> Progress </Text>
              <TouchableOpacity>
                <View style={styles.button}>
                  <Text style={styles.buttonText}> CHECK </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#DDE1E1",
    paddingTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
    width: 370,
    height: 60,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
  },
  input: {
    flex: 1,
    height: 60,
    fontFamily: "asap",
  },
  inputImage: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  deviceIdContainer: {
    marginTop: -30,
    alignItems: "center",
  },
  deviceIdBox: {
    borderWidth: 2,
    padding: 15,
    width: 370,
    marginTop: 30,
    borderRadius: 20,
    borderColor: "#25BEA0",
    backgroundColor: "#fafafa",
  },
  header: {
    fontFamily: "asap",
    fontSize: 25,
    textTransform: "uppercase",
    color: "#e6bb3e",
  },
  subHeader: {
    fontFamily: "asap",
    fontSize: 15,
    marginTop: 5,
  },
  button: {
    left: 260,
    borderRadius: 8,
    backgroundColor: "#FACC43",
    padding: 9,
    width: 80,
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

export default HomeScreen;
