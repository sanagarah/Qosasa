import React, { Component } from "react";
import { Searchbar } from "react-native-paper";

import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

export default class Header extends Component {
  state = {
    firstQuery: ""
  };
  render() {
    const { firstQuery } = this.state;
    return (
      <View style={styles.view}>
        <View style={{ height: 35 }}></View>
        <Image
          style={styles.imagestyle}
          source={require("../images/logo.png")}
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.searchButton}>
            <Image
              style={{
                width: 20,
                height: 20,
                alignSelf: "center",
                justifyContent: "center",
                top: "30%"
              }}
              source={require("../assets/img/search.png")}
            />
          </TouchableOpacity>

          <View style={styles.searchbarView}>
            <Searchbar
              placeholder=" "
              onChangeText={query => {
                this.setState({ firstQuery: query });
              }}
              value={firstQuery}
            />
          </View>
        </View>
        <View style={{ height: 35 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1.5,
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "center",
    alignContent: "center"
  },

  imagestyle: {
    width: "100%",
    height: 80,
    alignSelf: "center"
  },
  searchButton: {
    backgroundColor: "#fb5809",
    flex: 0.75,
    marginLeft: "5%",
    borderRadius: 10
  },

  searchbarView: {
    flex: 4,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginRight: "5%",
    marginLeft: "5%",
    top: "2%"
  }
});
