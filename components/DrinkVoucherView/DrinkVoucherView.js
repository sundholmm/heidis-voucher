import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  Image,
  Text,
} from "react-native";

const DrinkVoucherView = (props) => {
  // Destructure props
  const { setUsed, setUses, uses } = props;

  // Get new current date for the helper functions
  const now = new Date();

  // Get next month
  const getNextMonth = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return monthNames[now.getMonth() === 11 ? 0 : now.getMonth() + 1];
  };

  // Get the current day
  const getThisDay = () => {
    const dayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return dayNames[now.getDay() - 1];
  };

  // All the text values of the component
  const usableText = `Available the 1st of ${getNextMonth()}`;
  const swipeToCancel = "Swipe down anywhere to cancel.";
  const swipeToUse = "Swipe to use perk";
  const usesLeft =
    uses === 2
      ? `${uses} uses left before 00:00`
      : uses === 1
      ? `${uses} use left before 00:00`
      : !uses && getThisDay() === "Saturday"
      ? usableText
      : "Available tomorrow";

  // State for defining if the voucher can be used this time of the week
  const [usable, setUsable] = useState(false);

  const isUsable = () => {
    if (
      (getThisDay() === "Friday" || getThisDay() === "Saturday") &&
      now.getHours() >= 20 &&
      now.getHours() <= 23
    )
      setUsable(true);
  };

  // Check usability on mount
  useEffect(() => {
    isUsable();
  });

  // Track pan gesture for the slider
  const pan = new Animated.Value(0);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset(pan._value);
    },
    onPanResponderMove: uses && usable && Animated.event([null, { dx: pan }]),
    onPanResponderRelease: () => {
      if (usable && pan._value >= 246) {
        setUsed(true);
        setUses(uses - 1);
      } else {
        pan.setValue(0);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.swipeToCancelText}>{swipeToCancel}</Text>
      <Text style={styles.usesLeftText}>{!usable ? usableText : usesLeft}</Text>
      <View
        style={[
          styles.sliderBorder,
          (!uses || !usable) && styles.sliderDisabled,
        ]}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateX: pan.interpolate({
                  inputRange: [0, 246],
                  outputRange: [0, 246],
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              },
            ],
          }}
          {...panResponder.panHandlers}
        >
          <Image
            style={styles.draggableImage}
            source={require("../../assets/nyx_logo_black.png")}
          />
        </Animated.View>
      </View>
      <Text
        style={[
          styles.swipeToUseText,
          (!uses || !usable) && styles.sliderDisabled,
        ]}
      >
        {swipeToUse}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  sliderBorder: {
    borderWidth: 2,
    borderColor: "#FF4D6F",
    width: 300,
    borderRadius: 1000,
  },
  draggableImage: {
    height: 50,
    width: 50,
    borderRadius: 1000,
  },
  usesLeftText: {
    fontSize: 16,
    padding: 5,
    color: "#FF4D6F",
  },
  swipeToUseText: {
    fontSize: 16,
    marginTop: -38,
    color: "#FF4D6F",
    textAlign: "center",
  },
  swipeToCancelText: {
    color: "white",
    marginBottom: -105,
  },
  sliderDisabled: {
    opacity: 0.5,
  },
});

export default DrinkVoucherView;
