import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import LangAr from "../lang/ar";
import LangEn from "../lang/en";
import AorE from "../lang/AorE";

export default class Sale extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/img/sale.png")}
          style={styles.container}
        ></ImageBackground>
        <TouchableOpacity
          style={{
            hight: 40,
            width: "30%",
            backgroundColor: "white",
            top: -50
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 17, top: -1 }}>
            {AorE.A == true ? LangAr.shop : LangEn.shop}>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center"
  }
});
