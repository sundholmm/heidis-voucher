import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
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
        {!used ? (
          <DrinkVoucherView setUsed={setUsed} />
        ) : (
          <DrinkVoucherUsedView setUsed={setUsed} />
        )}
        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    minWidth: "100%",
    minHeight: "100%",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
