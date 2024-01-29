import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const HomeScreen = ({ route }) => {
  const { deviceIds: initialDeviceIds } = route.params || {};
  const [deviceIds, setDeviceIds] = useState(initialDeviceIds || []);
  const [originalDeviceIds, setOriginalDeviceIds] = useState(
    initialDeviceIds || []
  );
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

  const handleCheckPress = () => {
    navigation.navigate("Check");
  };

  const handleRemovePress = (index) => {
    const updatedDeviceIds = [...deviceIds];
    updatedDeviceIds.splice(index, 1);
    setDeviceIds(updatedDeviceIds);
    setOriginalDeviceIds(updatedDeviceIds);
    setSearchText("");
  };

  const handleSearch = () => {
    const filteredDeviceIds = originalDeviceIds.filter((deviceId) =>
      deviceId.toLowerCase().includes(searchText.toLowerCase())
    );
    setDeviceIds(filteredDeviceIds);
  };

  useEffect(() => {
    // Update deviceIds state when the route parameters change
    setDeviceIds(initialDeviceIds || []);
    setOriginalDeviceIds(initialDeviceIds || []);
  }, [initialDeviceIds]);

  useFocusEffect(() => {
    // Update deviceIds state when the screen is focused
    setDeviceIds(originalDeviceIds);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SearchIcon}>
        <TouchableOpacity onPress={handleSearch}>
          <Image
            source={require("../assets/Search.png")}
            style={styles.inputImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <View style={styles.deviceIdContainer}>
        {deviceIds.map((deviceId, index) => (
          <View key={index} style={styles.deviceIdBox}>
            <Text style={styles.header}>{` Device ID: ${deviceId}`}</Text>
            <Text style={styles.subHeader}> Progress </Text>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity onPress={handleCheckPress}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}> CHECK </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRemovePress(index)}>
                <View style={styles.button1}>
                  <Text style={styles.buttonText1}> REMOVE </Text>
                </View>
              </TouchableOpacity>
            </View>
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
    alignSelf: "flex-start",
    left: 20,
    marginTop: 20,
    marginBottom: 40,
    width: 330,
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
  },
  input: {
    flex: 1,
    height: 50,
    fontFamily: "asap",
  },
  SearchIcon: {
    position: "absolute",
    marginTop: 50,
    right: 20,
    alignSelf: "flex-end",
  },
  inputImage: {
    width: 20,
    height: 20,
    marginRight: 5,
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
  ButtonContainer: {
    flexDirection: "row",
    top: 6,
    right: -1,
  },
  button: {
    left: 260,
    borderRadius: 8,
    backgroundColor: "#FACC43",
    padding: 9,
    width: 80,
  },
  button1: {
    left: 90,
    borderRadius: 8,
    backgroundColor: "#FACC43",
    padding: 9,
    width: 80,
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    color: "white",
    fontFamily: "asap",
  },
  buttonText1: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    color: "white",
    fontFamily: "asap",
  },
  searchButton: {
    borderRadius: 8,
    backgroundColor: "#25BEA0",
    padding: 9,
    marginLeft: 10,
  },
});

export default HomeScreen;
