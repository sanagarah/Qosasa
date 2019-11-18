import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ssp from "./ssp";
import LangAr from "../lang/ar";
import LangEn from "../lang/en";
import AorE from "../lang/AorE";

export default class Specialproducts extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.allItems}>
          <View flex={1}>
            <Text style={styles.txt}>منتجات مميزة</Text>
          </View>
          <View style={styles.items}>
            {/*1.p */}
            <View style={styles.item}>
              <Ssp
                image={require("../assets/img/18.jpg")}
                image2={require("../assets/img/19.jpg")}
                image3={require("../assets/img/20.jpg")}
                name={AorE.A == true ? LangAr.bag : LangEn.bag}
                colora="white"
              />
            </View>

            {/*2.p */}
            <View style={styles.item}>
              <Ssp
                image={require("../assets/img/18.jpg")}
                image2={require("../assets/img/18.jpg")}
                image3={require("../assets/img/18.jpg")}
                name={AorE.A == true ? LangAr.note : LangEn.note}
                colora="white"
              />
            </View>

            {/*3.p */}
            <View style={styles.item}>
              <Ssp
                image={require("../assets/img/18.jpg")}
                image2={require("../assets/img/19.jpg")}
                image3={require("../assets/img/20.jpg")}
                name={AorE.A == true ? LangAr.book : LangEn.book}
                colora="white"
              />
            </View>
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
    flex: 1,
    backgroundColor: "#EB628A"
    //Top:800
  },
  style2: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    height: 50
  },
  allItems: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#EB628A"
  },
  item: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 2
  },
  txt: {
    alignSelf: "center",
    color: "white"
  },
  items: {
    flex: 4,
    flexDirection: "row",
    paddingStart: 20,
    paddingEnd: 20
  }
});
