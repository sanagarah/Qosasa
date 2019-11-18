import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default class Country extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.view}>
          <Text style={styles.textStyle}> {this.props.name}</Text>
          <Image style={styles.imagestyle} source={this.props.image} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#fff",
    flexDirection: "row"
  },

  imagestyle: {
    width: 25,
    height: 25
  },
  textStyle: {
    flex: 2,
    fontSize: 24,
    color: "gray",
    marginHorizontal: 5
  }
});
