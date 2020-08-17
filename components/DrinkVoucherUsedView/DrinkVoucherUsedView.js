import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const DrinkVoucherUsedView = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/heidis-voucher-background.jpeg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.voucherTitle}>Drink voucher</Text>
        <Text style={styles.voucherSubTitle}>Heidi's Bier Bar Turku</Text>
        <Image
          source={require("../../assets/heidis-voucher.jpeg")}
          style={styles.voucherLogo}
        />
        <View style={styles.iconBorder}>
          <FontAwesomeIcon color="#00FA9A" icon={faCheck} />
        </View>
        <Text style={styles.text}>Perk used successfully!</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.dismissBorder}>Dismiss</Text>
          <Text style={styles.useAgainBorder}>Use again</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  voucherLogo: {
    marginTop: 25,
    width: 150,
    height: 150,
  },
  voucherTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  voucherSubTitle: {
    color: "grey",
    fontSize: 17,
    opacity: 0.75,
  },
  backgroundImage: {
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
    borderRadius: "50%",
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
    borderRadius: "50%",
    width: 120,
    lineHeight: 120,
    textAlign: "center",
    margin: 20,
  },
});

export default DrinkVoucherUsedView;
