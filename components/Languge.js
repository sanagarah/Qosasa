import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import LangAr from "../lang/ar";
import LangEn from "../lang/en";
import AorE from "../lang/AorE";

export default class Country extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.textStyle}>
          {AorE.A == true ? LangAr.languge : LangEn.languge}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#fff",
    marginTop: "1%",
    marginBottom: "2%",
    flexDirection: "row"
  },
  textStyle: {
    fontSize: 23,
    color: "gray",
    marginBottom: "2%",
    flex: 10,
    marginHorizontal: 7
  }
});
