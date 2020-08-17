import React from 'react';
import Slider from "react-native-slider";
import { StyleSheet, Text, View } from 'react-native';

const DrinkVoucherView = () => {
  return (
    <View style={styles.container}>
        <View style={styles.slider}>
            <Slider
            //   value={this.state.value}
            //   onValueChange={value => this.setState({ value })}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});

export default DrinkVoucherView;
