import React from "react";
import Slider from "react-native-slider";
import { StyleSheet, View } from "react-native";

const DrinkVoucherView = (props) => {
  const { setUsed } = props;
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Slider
          onSlidingComplete={() => setUsed(true)}
          thumbImage={require("../../assets/nyx_logo.png")}
          thumbStyle={styles.thumb}
        />
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
  slider: {
    width: 150,
  },
  thumb: {
    // width: 30,
    // height: 30,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.5,
    // shadowRadius: 1,
  },
});

export default DrinkVoucherView;
