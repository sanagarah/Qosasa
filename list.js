import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Header from "./components/Header";
import LangAr from "./lang/ar";
import LangEn from "./lang/en";
import AorE from "./lang/AorE";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default class List extends React.Component {
  state = {
    text: "",
    hight: 0,
    toggle: true
  };

  onShow = () => {
    if (this.state.toggle) this.setState({ hight: "50%", toggle: false });
    else {
      this.setState({ hight: 0, toggle: true });
    }
  };
  render() {
    return (
      <ScrollView>
        <View>
          <View style={{ backgroundColor: "#bdb931", flex: 1 }} />
          <View
            style={{
              flex: 6,
              alignItems: "center"
            }}
          >
            <Image
              style={[
                {
                  width: "100%",
                  height: "100%"
                }
              ]}
              source={require("./images/logo.png")}
            />
          </View>
          <Header></Header>
        </View>
        <View style={[styles.container, { backgroundColor: "#D0D0CE" }]}>
          <View
            style={[
              styles.whiteView,
              { flexDirection: "row", justifyContent: "space-between" }
            ]}
          >
            <TouchableOpacity style={styles.touch} onPress={this.onShow}>
              <AntDesign name="plussquareo" size={20}></AntDesign>
            </TouchableOpacity>
            <Text style={styles.text}>
              {AorE.A == true ? LangAr.prouduct : LangEn.prouduct}
            </Text>
          </View>
          <View style={{ height: this.state.hight }}>
            <TouchableOpacity
              style={styles.whiteView2}
              onPress={() => this.props.navigation.navigate("pageProduct")}
            >
              <Text style={styles.text2}>
                {AorE.A == true ? LangAr.cut : LangEn.cut}
              </Text>
              <Ionicons
                name="ios-arrow-back"
                size={20}
                style={{ margin: 10 }}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whiteView2}>
              <Text style={styles.text2}>
                {AorE.A == true ? LangAr.punch : LangEn.punch}
              </Text>
              <Ionicons
                name="ios-arrow-back"
                size={20}
                style={{ margin: 10 }}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whiteView2}>
              <Text style={styles.text2}>
                {AorE.A == true ? LangAr.craft : LangEn.craft}
              </Text>
              <Ionicons
                name="ios-arrow-back"
                size={20}
                style={{ margin: 10 }}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whiteView2}>
              <Text style={styles.text2}>
                {AorE.A == true ? LangAr.mix : LangEn.mix}
              </Text>
              <Ionicons
                name="ios-arrow-back"
                size={20}
                style={{ margin: 10 }}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whiteView2}>
              <Text style={styles.text2}>
                {AorE.A == true ? LangAr.ink : LangEn.ink}
              </Text>
              <Ionicons
                name="ios-arrow-back"
                size={20}
                style={{ margin: 10 }}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whiteView2}>
              <Text style={styles.text2}>
                {AorE.A == true ? LangAr.color : LangEn.color}
              </Text>
              <Ionicons
                name="ios-arrow-back"
                size={20}
                style={{ margin: 10 }}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whiteView2}>
              <Text style={styles.text2}>
                {AorE.A == true ? LangAr.ore : LangEn.ore}
              </Text>
              <Ionicons
                name="ios-arrow-back"
                size={20}
                style={{ margin: 10 }}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whiteView2}>
              <Text style={styles.text2}>
                {AorE.A == true ? LangAr.adhesive : LangEn.adhesive}
              </Text>
              <Ionicons
                name="ios-arrow-back"
                size={20}
                style={{ margin: 10 }}
              ></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={styles.whiteView}>
            <Text style={styles.text}>
              {AorE.A == true ? LangAr.new : LangEn.new}
            </Text>
          </View>
          <View
            style={[
              styles.whiteView,
              { flexDirection: "row", justifyContent: "space-between" }
            ]}
          >
            <TouchableOpacity style={styles.touch}>
              <AntDesign name="plussquareo" size={20}></AntDesign>
            </TouchableOpacity>
            <Text style={styles.text}>
              {AorE.A == true ? LangAr.back : LangEn.back}
            </Text>
          </View>
          <View style={[styles.whiteView, { justifyContent: "space-between" }]}>
            <Text style={styles.text}>
              {AorE.A == true ? LangAr.inpire : LangEn.inpire}
            </Text>
          </View>
          <View style={[styles.whiteView, { marginBottom: 40 }]}>
            <Text style={styles.text}>
              {AorE.A == true ? LangAr.offer : LangEn.offer}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  whiteView: {
    backgroundColor: "white",
    width: "100%",
    marginTop: 5
  },
  touch: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5
  },
  text: {
    color: "gray",
    fontSize: 24,
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: "bold",
    justifyContent: "flex-start"
  },
  whiteView2: {
    backgroundColor: "white",
    width: "97%",
    marginTop: 2,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  text2: {
    color: "gray",
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 10,
    fontWeight: "bold"
  }
});
