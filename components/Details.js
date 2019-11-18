import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Header from "./Header";
import { Entypo, Ionicons } from "@expo/vector-icons";
import styles from "./style";
import StarRating from "react-native-star-rating";
import LangAr from "../lang/ar";
import LangEn from "../lang/en";
import AorE from "../lang/AorE";
export default class Detials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
      check: 0,
      toggle: true,
      num: 0
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  onShow = () => {
    if (this.state.toggle) this.setState({ check: 1, toggle: false });
    else {
      this.setState({ check: 0, toggle: true });
    }
  };
  onCountplus = () => {
    this.setState({ num: this.state.num + 1 });
  };
  onCount = () => {
    {
      this.state.num > 0
        ? this.setState({ num: this.state.num - 1 })
        : this.setState({ num: this.state.num });
    }
  };
  render() {
    return (
      <ScrollView>
        <Header></Header>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end"
          }}
        >
          <Image
            source={this.props.pic}
            style={[styles.image, { marginRight: 20, marginTop: 25 }]}
          ></Image>
          <TouchableOpacity
            style={{ marginVertical: 3, marginRight: 20 }}
            onPress={this.onShow}
          >
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

          <Text
            style={[
              styles.text,
              {
                color: "#343232",
                fontSize: 20,
                width: "80%"
              }
            ]}
          >
            {this.props.txt1}
          </Text>
          <Text
            style={{
              color: "gray",
              marginBottom: 3,
              marginRight: 20,
              fontSize: 17
            }}
          >
            {AorE.A == true ? LangAr.number : LangEn.number} {this.props.txt2}
          </Text>
          <Text style={[styles.text1, { fontSize: 17 }]}>
            {this.props.txt3}
          </Text>
          <Text style={[styles.text1, { fontSize: 20 }]}>
            S.R {this.props.txt4}
          </Text>
          <Text
            style={{
              color: "gray",
              fontSize: 17,
              marginVertical: 3,
              marginRight: 20
            }}
          >
            {AorE.A == true ? LangAr.available2 : LangEn.available2}{" "}
            {this.props.txt5}
          </Text>
          <View
            style={{ flexDirection: "row", marginVertical: 3, marginRight: 20 }}
          >
            <TouchableOpacity style={styles.border} onPress={this.onCount}>
              <Ionicons
                name="md-arrow-dropdown"
                size={20}
                style={{ marginHorizontal: 7 }}
              ></Ionicons>
            </TouchableOpacity>
            <Text
              style={[
                styles.border,
                {
                  marginHorizontal: 3,
                  textAlign: "center",
                  textAlignVertical: "center"
                }
              ]}
            >
              {" "}
              {this.state.num}
            </Text>
            <TouchableOpacity style={styles.border} onPress={this.onCountplus}>
              <Ionicons
                name="md-arrow-dropup"
                size={20}
                style={{ marginHorizontal: 7 }}
              ></Ionicons>
            </TouchableOpacity>
            <Text style={{ color: "gray", marginHorizontal: 4, fontSize: 15 }}>
              {AorE.A == true ? LangAr.quantity : LangEn.quantity}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", marginVertical: 3, marginRight: 20 }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  marginVertical: 10,
                  marginHorizontal: 4,
                  fontWeight: "bold",
                  color: "#343232"
                }}
              >
                {AorE.A == true ? LangAr.comment : LangEn.comment}
              </Text>
            </TouchableOpacity>
            <StarRating
              style={{ color: "gray", fontSize: 3 }}
              disabled={false}
              maxStars={5}
              rating={this.state.starCount}
              starSize={30}
              fullStarColor="gray"
              emptyStarColor="gray"
              selectedStar={rating => this.onStarRatingPress(rating)}
            />
          </View>
          <Text
            style={{
              color: "gray",
              marginHorizontal: 20,
              marginVertical: 3,
              marginBottom: 35,
              fontSize: 17
            }}
          >
            {this.props.txt6}
          </Text>
          <Text style={styles.text2}>
            {AorE.A == true ? LangAr.description : LangEn.description}{" "}
          </Text>
          <Text style={{ height: 50 }}>{this.props.txt7}</Text>
          <Text style={styles.text2}>
            {AorE.A == true ? LangAr.ship : LangEn.ship}{" "}
          </Text>
          <Text style={[styles.text3, { fontWeight: "bold" }]}>
            {" "}
            {AorE.A == true ? LangAr.ship2 : LangEn.ship2}{" "}
          </Text>
          <Text style={styles.text3}>
            {AorE.A == true ? LangAr.longDescription : LangEn.longDescription}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FE5000",
              height: 25,
              width: "100%",
              justifyContent: "center",
              height: 50
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 22
              }}
            >
              {AorE.A == true ? LangAr.add1 : LangEn.add1}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
