import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import DrinkVoucherUsedView from "./components/DrinkVoucherUsedView/DrinkVoucherUsedView";
import DrinkVoucherView from "./components/DrinkVoucherView/DrinkVoucherView";

const App = () => {
  return (
    <View style={styles.container}>
      <DrinkVoucherUsedView />
      {/* <DrinkVoucherView /> */}
      <StatusBar style="light" />
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
});

export default App;
