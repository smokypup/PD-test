import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CheckScreen = () => {
  const [rulModalOpen, setRulModalOpen] = useState(false);
  const [sohModalOpen, setSohModalOpen] = useState(false);
  const [socModalOpen, setSocModalOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.BackButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../assets/Back1.png")}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
      </View>
      {/* MODAL FOR RUL */}
      <Modal visible={rulModalOpen} animationType="fade">
        <SafeAreaView style={styles.ModalContent}>
          <TouchableOpacity onPress={() => setRulModalOpen(false)}>
            <Image
              source={require("../assets/back.png")}
              style={styles.inputImage1}
            />
          </TouchableOpacity>
          <Text style={styles.ModalHeader}>Remaining Useful Life (RUL)</Text>
          <View style={styles.DefinitionBox}>
            <Text style={styles.Definition}>
              RUL, or Remaining Useful Life, in battery predictive maintenance,
              represents the estimated operational time or cycles a battery has
              left before reaching the end of its reliable service. It is a key
              metric used in predictive maintenance to plan interventions and
              optimize the overall lifespan of battery systems, enhancing
              reliability and minimizing unexpected failures. Predictive models
              assess various battery parameters to project how much useful life
              remains, enabling proactive maintenance and strategic
              replacements.
            </Text>
          </View>
          <Text style={styles.ModalHeader}>Cycle</Text>
          <View style={styles.DefinitionBox}>
            <Text style={styles.Definition}>
              "cycle" refers to one complete charge and discharge of the
              battery. The number of cycles a battery can undergo is a crucial
              factor influencing its overall lifespan. Monitoring the cycle
              count helps assess the battery's health, as repeated cycles can
              lead to gradual degradation, impacting its remaining useful life.
              RUL predictions consider the accumulated cycles to estimate how
              much operational life the battery has left before potential
              performance decline or failure.
            </Text>
          </View>
        </SafeAreaView>
      </Modal>
      {/* END OF MODAL FOR RUL */}
      {/* RUL BOX */}
      <View style={styles.Boxes}>
        <View style={styles.RULBox}>
          <View style={styles.HeaderTextIcon}>
            <Text style={styles.header}> Remaining Useful Life </Text>
            <TouchableOpacity onPress={() => setRulModalOpen(true)}>
              <Image
                source={require("../assets/Information.png")}
                style={styles.inputImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* END OF RUL BOX */}
        {/* MODAL FOR STATE OF HEALTH */}
        <Modal visible={sohModalOpen} animationType="fade">
          <SafeAreaView style={styles.ModalContent}>
            <TouchableOpacity onPress={() => setSohModalOpen(false)}>
              <Image
                source={require("../assets/back.png")}
                style={styles.inputImage1}
              />
            </TouchableOpacity>
            <Text style={styles.ModalHeader}>State of Health (SOH)</Text>
            <View style={styles.DefinitionBox}>
              <Text style={styles.Definition}>
                SOH is a measure of the overall condition and performance of a
                battery relative to its original or nominal capacity. It is
                expressed as a percentage, with 100% representing the battery's
                optimal health. Monitoring SOH is crucial in RUL assessments as
                it provides insights into the battery's degradation over time. A
                decreasing SOH indicates wear and tear, influencing RUL
                predictions by estimating how much useful life remains before
                potential issues or failure may occur.
              </Text>
            </View>
            <Image
              source={require("../assets/SOH.jpg")}
              style={styles.SOHImage}
            />
          </SafeAreaView>
        </Modal>
        {/* END OF MODAL FOR STATE OF HEALTH */}
        {/* STATE OF HEALTH BOX */}
        <View style={styles.StateOfHealthBox}>
          <View style={styles.HeaderTextIcon}>
            <Text style={styles.header}> State of Health </Text>
            <TouchableOpacity onPress={() => setSohModalOpen(true)}>
              <Image
                source={require("../assets/Information.png")}
                style={styles.inputImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* END OF STATE OF HEALTH BOX */}
        {/* MODAL FOR STATE OF CHARGE */}
        <Modal visible={socModalOpen} animationType="fade">
          <SafeAreaView style={styles.ModalContent}>
            <TouchableOpacity onPress={() => setSocModalOpen(false)}>
              <Image
                source={require("../assets/back.png")}
                style={styles.inputImage1}
              />
            </TouchableOpacity>
            <Text style={styles.ModalHeader}>State of Charge (SOC)</Text>
            <View style={styles.DefinitionBox}>
              <Text style={styles.Definition}>
                SOC represents the percentage of a battery's maximum capacity
                that is currently in use or available. It is a dynamic parameter
                that changes as the battery is charged or discharged. Monitoring
                SOC is essential in RUL assessments because it helps gauge the
                current energy level in the battery and informs predictions
                about how much operational life remains before reaching critical
                charge or discharge thresholds. RUL models take into account SOC
                fluctuations to estimate the battery's remaining useful life
                accurately.
              </Text>
            </View>
            <Image
              source={require("../assets/SOC.jpg")}
              style={styles.SOCImage}
            />
          </SafeAreaView>
        </Modal>
        {/* END OF MODAL FOR STATE OF CHARGE */}
        {/* STATE OF CHARGE BOX */}
        <View style={styles.StateOfChargeBox}>
          <View style={styles.HeaderTextIcon}>
            <Text style={styles.header}> State of Charge </Text>
            <TouchableOpacity onPress={() => setSocModalOpen(true)}>
              <Image
                source={require("../assets/Information.png")}
                style={styles.inputImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* END OF STATE OF CHARGE BOX */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#DDE1E1",
  },
  Boxes: {
    marginTop: 150,
    alignSelf: "center",
  },
  HeaderTextIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  RULBox: {
    borderWidth: 2,
    padding: 15,
    width: 370,
    height: 100,
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
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputImage1: {
    width: 20,
    height: 20,
    marginTop: 20,
  },
  StateOfHealthBox: {
    borderWidth: 2,
    padding: 15,
    width: 370,
    height: 100,
    marginTop: 30,
    borderRadius: 20,
    borderColor: "#25BEA0",
    backgroundColor: "#fafafa",
  },
  StateOfChargeBox: {
    borderWidth: 2,
    padding: 15,
    width: 370,
    height: 100,
    marginTop: 30,
    borderRadius: 20,
    borderColor: "#25BEA0",
    backgroundColor: "#fafafa",
  },
  ModalContent: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 20,
  },
  ModalHeader: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 35,
    color: "#374353",
  },
  DefinitionBox: {
    marginTop: 20,
    marginBottom: 0,
    borderWidth: 2,
    padding: 8,
    borderColor: "#25BEA0",
    borderRadius: 15,
  },
  Definition: {
    textAlign: "justify",
    fontSize: 15,
  },
  SOHImage: {
    width: 277,
    height: 100,
    top: 80,
    alignSelf: "center",
  },
  SOCImage: {
    width: 254,
    height: 141,
    top: 80,
    alignSelf: "center",
  },
  BackButton: {
    marginTop: 20,
    marginLeft: 20,
  },
});

export default CheckScreen;
