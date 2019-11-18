import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button
} from "react-native";
import Buttons from "./Buttons";
import LangAr from "../lang/ar";
import LangEn from "../lang/en";
import AorE from "../lang/AorE";

export default class LastSection extends Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={{ flex: 2, backgroundColor: "#F1F1F1" }}>
          <Image
            style={{ width: 100, height: 45, alignSelf: "center" }}
            source={require("../image/logoLast.png")}
          />
        </View>

        <View style={styles.textViewStyle}>
          <Image
            style={styles.imagestyle}
            source={require("../image/youtube.png")}
          />
          <Image
            style={styles.imagestyle}
            source={require("../image/twitter.png")}
          />
          <Image
            style={styles.imagestyle}
            source={require("../image/facebook.png")}
          />
          <Image
            style={styles.imagestyle}
            source={require("../image/instagram.png")}
          />
        </View>

        <View style={{ flex: 4, backgroundColor: "#F1F1F1" }}>
          <View style={styles.textViewStyle}>
            <Buttons
              name={AorE.A == true ? LangAr.quastions : LangEn.quastions}
            />

            <Buttons
              name={AorE.A == true ? LangAr.condition : LangEn.condition}
            />

            <Buttons name={AorE.A == true ? LangAr.who : LangEn.who} />
          </View>

          <View style={styles.textViewStyle}>
            <Buttons name={AorE.A == true ? LangAr.info : LangEn.info} />

            <Buttons name={AorE.A == true ? LangAr.order : LangEn.order} />
          </View>

          <View style={styles.textViewStyle}>
            <Buttons name="Ⓒ متجر قصاصة 2018 كل الحقوق محفوظة" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1.5,
    backgroundColor: "#F1F1F1",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column"
  },

  imagestyle: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginTop: 10
  },
  textStyle: {
    fontSize: 10,
    color: "black"
  },

  textViewStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    bottom: "1%"
  }
});
