import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

const CheckScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Boxes}>
        <View style={styles.RULBox}>
          <View style={styles.HeaderTextIcon}>
            <Text style={styles.header}> Remaining Useful Life </Text>
            <Image
              source={require("../assets/Information.png")}
              style={styles.inputImage}
            />
          </View>
        </View>
        <View style={styles.StateOfHealthBox}>
          <View style={styles.HeaderTextIcon}>
            <Text style={styles.header}> State of Health </Text>
            <Image
              source={require("../assets/Information.png")}
              style={styles.inputImage}
            />
          </View>
        </View>
        <View style={styles.StateOfChargeBox}>
          <View style={styles.HeaderTextIcon}>
            <Text style={styles.header}> State of Charge </Text>
            <Image
              source={require("../assets/Information.png")}
              style={styles.inputImage}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#DDE1E1",
  },
  Boxes: {
    marginTop: 140,
  },
  HeaderTextIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  RULBox: {
    borderWidth: 2,
    padding: 15,
    width: 370,
    height: 120,
    marginTop: 30,
    borderRadius: 20,
    borderColor: "#25BEA0",
    backgroundColor: "#fafafa",
  },
  header: {
    fontFamily: "asap",
    fontSize: 20,
    textTransform: "uppercase",
    color: "#e6bb3e",
  },
  inputImage: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  StateOfHealthBox: {
    borderWidth: 2,
    padding: 15,
    width: 370,
    height: 120,
    marginTop: 30,
    borderRadius: 20,
    borderColor: "#25BEA0",
    backgroundColor: "#fafafa",
  },
  StateOfChargeBox: {
    borderWidth: 2,
    padding: 15,
    width: 370,
    height: 120,
    marginTop: 30,
    borderRadius: 20,
    borderColor: "#25BEA0",
    backgroundColor: "#fafafa",
  },
});

export default CheckScreen;
