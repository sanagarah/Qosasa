import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
export default class Birth extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textstyle}>{this.props.dateOfBirth}</Text>
          <Text style={styles.importantstyle}>*</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput style={styles.input} placeholder={this.props.day} />
          <TextInput style={styles.input} placeholder={this.props.month} />
          <TextInput style={styles.input} placeholder={this.props.year} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  textstyle: {
    fontSize: 18,
    color: "black"
  },
  importantstyle: {
    fontSize: 18,
    color: "#fe4f00"
  },
  input: {
    color: "gray",
    fontSize: 15,
    width: 60,
    height: 32,
    textAlign: "center",
    paddingVertical: 5,
    borderColor: "lightgray",
    borderWidth: 1,
    top: 5,
    margin: 3,
    borderRadius: 5
  }
});
