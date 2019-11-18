import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Categoryicon from "./categoryIcon";
import LangAr from "../lang/ar";
import LangEn from "../lang/en";
import AorE from "../lang/AorE";
export default class Category extends React.Component {
  state = { text: " " };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View
            style={{
              alignSelf: "center",
              color: "gray",
              paddingTop: 10,
              paddingBottom: 5
            }}
          >
            <Text>{AorE.A == true ? LangAr.category : LangEn.category}</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderBottomColor: "orange",
              borderBottomWidth: 2,
              marginBottom: 20
            }}
          ></View>
          <View style={{ flex: 3, flexDirection: "row", alignItems: "center" }}>
            <Categoryicon
              image={require("../assets/img/paper.png")}
              name={AorE.A == true ? LangAr.paper : LangEn.paper}
            />
            <Categoryicon
              image={require("../assets/img/hobbies.png")}
              name={AorE.A == true ? LangAr.hobbies : LangEn.hobbies}
            />
            <Categoryicon
              image={require("../assets/img/package.png")}
              name={AorE.A == true ? LangAr.packaging : LangEn.packaging}
            />
            <Categoryicon
              image={require("../assets/img/book.png")}
              name={AorE.A == true ? LangAr.notebooks : LangEn.notebooks}
            />
          </View>
          {/* */}
          <View style={{ flex: 3, flexDirection: "row" }}>
            <Categoryicon
              image={require("../assets/img/devices.png")}
              name={AorE.A == true ? LangAr.devices : LangEn.devices}
            />
            <Categoryicon
              image={require("../assets/img/copy.png")}
              name={AorE.A == true ? LangAr.copypaste : LangEn.copypaste}
            />
            <Categoryicon
              image={require("../assets/img/colors.png")}
              name={AorE.A == true ? LangAr.colors : LangEn.colors}
            />
            <Categoryicon
              image={require("../assets/img/flower.png")}
              name={AorE.A == true ? LangAr.flower : LangEn.flower}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //position:'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignContent: "center",
    flex: 1
    //Top:800
  }
});
