import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import Star from "./star";
import Item from "./item";
import LangAr from "../lang/ar";
import LangEn from "../lang/en";
import AorE from "../lang/AorE";

export default class Bestseller extends React.Component {
  state = { text: " " };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* upper part  */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#EB628A",
              width: "100%",
              flexDirection: "row"
            }}
          >
            <TouchableOpacity style={{ flex: 1 }}>
              <Image
                source={require("../assets/img/1.jpg")}
                style={{ width: "100%", height: 70 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Image
                source={require("../assets/img/2.jpg")}
                style={{ width: "100%", height: 70 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}>
              <Image
                source={require("../assets/img/3.jpg")}
                style={{ width: "100%", height: 70 }}
              />
            </TouchableOpacity>
          </View>

          {/* secound part*/}
          <View
            style={{
              flex: 2,
              backgroundColor: "#fff",
              width: "100%",
              paddingVertical: 10
            }}
          >
            <Text style={{ alignSelf: "center", color: "orange" }}>
              {AorE.A == true ? LangAr.best : LangEn.best}
            </Text>
          </View>
          {/* //<Start scrollview> */}

          <ScrollView horizontal={true}>
            {/* //<Category1> */}
            <View style={{ flexDirection: "column" }}>
              <Item image={require("../assets/img/4.jpg")} name="mirror" />
              <View style={{ marginRight: 20, marginLeft: 10 }}>
                <Star />
              </View>
            </View>

            <View style={{ flexDirection: "column" }}>
              <Item image={require("../assets/img/5.jpg")} name="books" />
              <View style={{ marginRight: 20, marginLeft: 10 }}>
                <Star />
              </View>
            </View>

            <View style={{ flexDirection: "column" }}>
              <Item
                image={require("../assets/img/6.jpg")}
                name="flamingo bag"
              />
              <View style={{ marginRight: 20, marginLeft: 10 }}>
                <Star />
              </View>
            </View>

            <View style={{ flexDirection: "column" }}>
              <Item image={require("../assets/img/7.jpg")} name="bag" />
              <View style={{ marginRight: 20, marginLeft: 10 }}>
                <Star />
              </View>
            </View>
          </ScrollView>
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
