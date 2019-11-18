import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class Input extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textstyle}>{this.props.name}</Text>
          <Text style={styles.importantstyle}>{this.props.important}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TextInput
            style={styles.input}
            secureTextEntry={this.props.secureTextEntry}
            textContentType={this.props.textContentType}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
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
    fontSize: 18,
    width: "100%",
    height: 32,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgray",
    borderWidth: 1,
    top: 5
  }
});
