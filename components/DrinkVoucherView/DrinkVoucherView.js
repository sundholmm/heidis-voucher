import React, { useRef } from "react";
import { StyleSheet, View, Animated, PanResponder, Image } from "react-native";

const DrinkVoucherView = (props) => {
  const { setUsed } = props;
  const pan = new Animated.Value(-100);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset(pan._value);
      },
      onPanResponderMove: Animated.event([null, { dx: pan }]),
      onPanResponderRelease: () => {
        if (pan._value >= 200) {
          setUsed(true);
        } else {
          pan.setValue(-100);
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {
              translateX: pan.interpolate({
                inputRange: [-100, 100],
                outputRange: [-100, 100],
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
          source={require("../../assets/nyx_logo.png")}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  draggableImage: {
    height: 50,
    width: 50,
    borderRadius: 500,
  },
});

export default DrinkVoucherView;
