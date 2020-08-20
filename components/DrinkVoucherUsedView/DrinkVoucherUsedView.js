import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const DrinkVoucherUsedView = (props) => {
  const { setUsed } = props;
  return (
    <View style={styles.container}>
      <View style={styles.iconBorder}>
        <FontAwesomeIcon color="#00FA9A" icon={faCheck} />
      </View>
      <Text style={styles.text}>Perk used successfully!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setUsed(false)}>
          <Text style={styles.dismissBorder}>Dismiss</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUsed(false)}>
          <Text style={styles.useAgainBorder}>Use again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBorder: {
    margin: 16,
    padding: 8,
    borderWidth: 4,
    borderColor: "#00FA9A",
    borderRadius: 50,
  },
  text: {
    color: "#00FF00",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 50,
    flexDirection: "row",
    maxHeight: 200,
  },
  dismissBorder: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    borderColor: "#DC143C",
    borderWidth: 4,
    borderRadius: 500,
    width: 120,
    lineHeight: 120,
    textAlign: "center",
    margin: 20,
  },
  useAgainBorder: {
    color: "#C0C0C0",
    fontWeight: "bold",
    fontSize: 20,
    borderColor: "#C0C0C0",
    borderWidth: 4,
    borderRadius: 500,
    width: 120,
    lineHeight: 120,
    textAlign: "center",
    margin: 20,
  },
});

export default DrinkVoucherUsedView;
