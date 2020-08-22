import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import DrinkVoucherUsedView from "./components/DrinkVoucherUsedView/DrinkVoucherUsedView";
import DrinkVoucherView from "./components/DrinkVoucherView/DrinkVoucherView";
import FadeInView from "./components/FadeInView/FadeInView";

const App = () => {
  const [used, setUsed] = useState(false);
  const [uses, setUses] = useState(2);
  const drinkVoucher = "Drink voucher";
  const heidis = "Heidi's Bier Bar Turku";
  const voucherInfo = `This voucher gives you a draught Koff, Kelkka, Valkovenäläinen or Kossu+mix(excl. Red Bull) to 3 ${"\u20AC"}`;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/heidis-voucher-background.jpeg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.logoView}>
          <Text style={styles.voucherTitle}>{drinkVoucher}</Text>
          <Text style={styles.voucherSubTitle}>{heidis}</Text>
          <Image
            source={require("./assets/heidis-voucher.jpeg")}
            style={styles.voucherLogo}
          />
          <View style={styles.voucherInfoView}>
            {!used && <Text style={styles.voucherInfo}>{voucherInfo}</Text>}
          </View>
        </View>
        <View style={styles.changingView}>
          {!used ? (
            <DrinkVoucherView setUsed={setUsed} setUses={setUses} uses={uses} />
          ) : (
            <FadeInView>
              <DrinkVoucherUsedView setUsed={setUsed} uses={uses} />
            </FadeInView>
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
  logoView: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  voucherInfoView: {
    height: 50,
  },
  voucherInfo: {
    color: "white",
    width: 240,
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
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
