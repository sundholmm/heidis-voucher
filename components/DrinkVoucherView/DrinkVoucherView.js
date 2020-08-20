import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  Image,
  Text,
} from "react-native";

const DrinkVoucherView = (props) => {
  const { setUsed } = props;
  const pan = new Animated.Value(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset(pan._value);
      },
      onPanResponderMove: Animated.event([null, { dx: pan }]),
      onPanResponderRelease: () => {
        if (pan._value >= 246) {
          setUsed(true);
        } else {
          pan.setValue(0);
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.swipeToCancelText}>
        Swipe down anywhere to cancel.
      </Text>
      <Text style={styles.usesLeftText}>2 uses left before 00:00</Text>

      <View style={styles.sliderBorder}>
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
      <Text style={styles.swipeToUseText}>Swipe to use perk</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sliderBorder: {
    borderWidth: 2,
    borderColor: "#FF4D6F",
    width: 300,
    borderRadius: 500,
  },
  draggableImage: {
    height: 50,
    width: 50,
    borderRadius: 500,
  },
  usesLeftText: {
    fontSize: 16,
    padding: 5,
    color: "#FF4D6F",
  },
  swipeToUseText: {
    fontSize: 16,
    marginTop: -35,
    color: "#FF4D6F",
  },
  swipeToCancelText: {
    color: "white",
    marginBottom: -105,
  },
});

export default DrinkVoucherView;
