import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Product from "./components/Product";
import styles from "./components/style";
import Header from "./components/Header";
import LangAr from "./lang/ar";
import LangEn from "./lang/en";
import AorE from "./lang/AorE";

export default class pageProduct extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ marginBottom: 30 }}>
          <Header></Header>
        </View>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Product
              navigation={this.props.navigation}
              img={require("./pictures/paper.jpg")}
              txt={AorE.A == true ? LangAr.prodctName1 : LangEn.prodctName1}
            />
            <Product
              navigation={this.props.navigation}
              img={require("./pictures/cards.jpg")}
              txt={AorE.A == true ? LangAr.prodctName1 : LangEn.prodctName1}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <Product
              navigation={this.props.navigation}
              img={require("./pictures/paper.jpg")}
              txt={AorE.A == true ? LangAr.prodctName1 : LangEn.prodctName1}
            />
            <Product
              navigation={this.props.navigation}
              img={require("./pictures/cards.jpg")}
              txt={AorE.A == true ? LangAr.prodctName1 : LangEn.prodctName1}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              justifyContent: "space-around"
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#FE5000",
                height: 30,
                width: 100,
                justifyContent: "center"
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                {AorE.A == true ? LangAr.Sort : LangEn.Sort}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FE5000",
                height: 30,
                width: 100,
                justifyContent: "center"
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                {AorE.A == true ? LangAr.Fillter : LangEn.Fillter}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
