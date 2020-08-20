import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import DrinkVoucherUsedView from "./components/DrinkVoucherUsedView/DrinkVoucherUsedView";
import DrinkVoucherView from "./components/DrinkVoucherView/DrinkVoucherView";

const App = () => {
  const [used, setUsed] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/heidis-voucher-background.jpeg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.titleView}>
          <Text style={styles.voucherTitle}>Drink voucher</Text>
          <Text style={styles.voucherSubTitle}>Heidi's Bier Bar Turku</Text>
        </View>
        <View style={styles.logoView}>
          <Image
            source={require("./assets/heidis-voucher.jpeg")}
            style={styles.voucherLogo}
          />
        </View>
        <View style={styles.changingView}>
          {!used ? (
            <DrinkVoucherView setUsed={setUsed} />
          ) : (
            <DrinkVoucherUsedView setUsed={setUsed} />
          )}
        </View>
        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoView: {
    flex: 2,
  },
  changingView: {
    flex: 3,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  voucherLogo: {
    marginTop: 25,
    width: 150,
    height: 150,
  },
});

export default App;
