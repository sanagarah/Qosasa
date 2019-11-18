import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Sale from "../screens/sale";
import Bestseller from "../screens/bestseller";
import Specialproducts from "../screens/specialproducts";
import Category from "../screens/cateqory";
import Newproducts from "../screens/Newproducts";
import LangAr from "../lang/ar";
import LangEn from "../lang/en";
import AorE from "../lang/AorE";
export default class Middle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flex: 1 }}>
            {/* //<sale part> */}

            <View style={styles.SaleViewStyle}>
              <Sale />
            </View>

            <View style={styles.seperator} />

            {/* //<best seller> */}
            <View style={styles.BestsellerViewStyle}>
              <Bestseller />
            </View>

            {/* //<special products> */}
            <View style={styles.SpecialViewStyle}>
              <Specialproducts />
            </View>

            {/** <new products> */}
            <View style={styles.viewtxt}>
              <Text style={styles.txt}>
                {AorE.A == true ? LangAr.new2 : LangEn.new2}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                borderBottomColor: "#EB628A",
                borderBottomWidth: 2
              }}
            />
            <View style={styles.NewproductsStyle}>
              <Newproducts />
            </View>

            {/* //<Category4> */}
            <View style={styles.CategoryStyle}>
              <Category />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewtxt: {
    flex: 1,
    paddingVertical: 5
  },
  txt: {
    alignSelf: "center",
    color: "grey"
  },
  SaleViewStyle: {
    flex: 2,
    width: "100%",
    height: "150%"
  },
  separator: {
    borderBottomColor: "yellow",
    borderBottomWidth: 1
  },
  BestsellerViewStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingVertical: 1
  },
  SpecialViewStyle: {
    flex: 2,
    borderRadius: 10,
    height: 100,
    paddingHorizontal: 0,
    paddingTop: 10
  },
  NewproductsStyle: {
    flex: 2,
    borderRadius: 10,
    height: 100,
    paddingHorizontal: 0,
    paddingTop: 10
  },
  CategoryStyle: {
    flex: 2,
    width: "100%",
    height: "150%",
    paddingHorizontal: 0
  }
});
