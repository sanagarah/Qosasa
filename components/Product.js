import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { Entypo } from "@expo/vector-icons";
import LangAr from "../lang/ar";
import LangEn from "../lang/en";
import AorE from "../lang/AorE";
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: 0,
      toggle: true
    };
  }
  onShow = () => {
    if (this.state.toggle) this.setState({ check: 1, toggle: false });
    else {
      this.setState({ check: 0, toggle: true });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "column" }}>
          <Image source={this.props.img} style={styles.image}></Image>
          <TouchableOpacity style={{ marginVertical: 4 }} onPress={this.onShow}>
            <Entypo
              name="heart-outlined"
              size={22}
              color="#FE5000"
              margin={10}
            ></Entypo>
            <Entypo
              name="heart"
              size={22}
              color="#FE5000"
              style={{ position: "absolute", opacity: this.state.check }}
            ></Entypo>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{this.props.txt}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#FE5000",
            height: 25,
            width: 130,
            justifyContent: "center"
          }}
          onPress={() => {
            this.props.navigation.navigate("pageDetails");
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 12 }}>
            {AorE.A == true ? LangAr.add1 : LangEn.add1}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
