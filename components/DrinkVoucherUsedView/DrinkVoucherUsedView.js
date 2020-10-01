import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const DrinkVoucherUsedView = (props) => {
  // Destructure props
  const { setUsed, uses } = props;

  // All the text values of the component
  const perkUsed = "Perk used successfully!";
  const dismiss = "Dismiss";
  const useAgain = "Use again";
  const availableTomorrow = "Available tomorrow";

  return (
    <View style={styles.container}>
      <View style={styles.iconBorder}>
        <FontAwesomeIcon color="#00FA9A" icon={faCheck} />
      </View>
      <Text style={styles.perkUsedText}>{perkUsed}</Text>
      <View style={styles.buttonContainer}>
        {!uses && (
          <Text style={styles.availableTomorrow}>{availableTomorrow}</Text>
        )}
        <View style={styles.innerButtonContainer}>
          <TouchableOpacity onPress={() => setUsed(false)}>
            <Text style={styles.dismissBorder}>{dismiss}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={uses ? () => setUsed(false) : null}>
            <Text style={styles.useAgainBorder}>{useAgain}</Text>
          </TouchableOpacity>
        </View>
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
    borderRadius: 1000,
  },
  perkUsedText: {
    color: "#00FF00",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 50,
    maxHeight: 200,
  },
  innerButtonContainer: {
    flex: 1,
    flexDirection: "row",
  },
  availableTomorrow: {
    textAlign: "center",
    color: "#C0C0C0",
  },
  dismissBorder: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    borderColor: "#DC143C",
    borderWidth: 2,
    borderRadius: 1000,
    width: 100,
    height: 100,
    lineHeight: 100,
    textAlign: "center",
    margin: 20,
  },
  useAgainBorder: {
    color: "#C0C0C0",
    fontWeight: "bold",
    fontSize: 16,
    borderColor: "#C0C0C0",
    borderWidth: 2,
    borderRadius: 1000,
    width: 100,
    height: 100,
    lineHeight: 100,
    textAlign: "center",
    margin: 20,
  },
});

export default DrinkVoucherUsedView;
