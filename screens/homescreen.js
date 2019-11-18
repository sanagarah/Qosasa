import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Middle from "./Middle";
import Header from "../components/Header";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[{ flex: 1 }]}>
          <View style={styles.HeadViewStyle}>
            <Header />
          </View>

          <View style={styles.MiddleViewStyle}>
            <Middle />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  HeadViewStyle: { flex: 1.5, backgroundColor: "#fff", marginBottom: 12 },
  MiddleViewStyle: { flex: 5, backgroundColor: "#fff" }
});
