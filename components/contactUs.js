import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Platform,
  TouchableOpacity
} from "react-native";
import LangAr from "../lang/ar";
import LangEn from "../lang/en";
import AorE from "../lang/AorE";

export default class ContactUs extends Component {
  makeCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${0539136880}";
    } else {
      phoneNumber = "telprompt:${0556595164}";
    }

    Linking.openURL(phoneNumber);
  };
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          onPress={this.makeCall}
          activeOpacity={0.7}
          style={{ flex: 4, justifyContent: "flex-start" }}
        >
          <Image
            style={styles.imagestyle}
            source={require("../image/phone.png")}
          />
          <Text style={styles.textStyle}>
            {AorE.A == true ? LangAr.contact : LangEn.contact}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#fff",
    flexDirection: "row",
    marginVertical: 2
  },

  imagestyle: {
    width: 25,
    height: 25,
    position: "absolute",
    right: 0
  },
  textStyle: {
    fontSize: 24,
    color: "gray",
    marginRight: 30,
    marginHorizontal: 7
  }
});
