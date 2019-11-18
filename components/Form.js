import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import Birth from "./Birth";
export default class From extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>{this.props.createAccount}</Text>
        <View style={styles.lineStyle}></View>
        <Input name={this.props.name} textContentType="name" important="*" />
        <Input
          name={this.props.email}
          textContentType="emailAddress"
          important="*"
        />
        <Birth
          dateOfBirth={this.props.dateOfBirth}
          day={this.props.day}
          month={this.props.month}
          year={this.props.year}
        />
        <Input
          name={this.props.password}
          secureTextEntry={true}
          important="*"
        />
        <Input
          name={this.props.confirmPassword}
          secureTextEntry={true}
          important="*"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Text: {
    fontSize: 18,
    color: "black"
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: "lightgray"
  }
});
