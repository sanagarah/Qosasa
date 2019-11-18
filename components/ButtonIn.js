import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from "react-native";
export default class Button extends React.Component {
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableHighlight onPress={() => this.onClickListener("SignIn")}>
            <Text style={styles.button}>{this.props.btnText}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.signUpStyle}>
          <Text style={styles.text}>{this.props.donthave}</Text>
          <TouchableHighlight onPress={() => this.onClickListener("SignUp")}>
            <Text style={styles.textSignUp}>{this.props.signUp}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 50
  },
  button: {
    fontSize: 20,
    width: "100%",
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#fe4f00",
    color: "white",
    textAlign: "center",
    paddingVertical: 3
  },
  text: {
    fontSize: 20,
    color: "gray"
  },
  textSignUp: {
    fontSize: 20,
    color: "gray",
    fontWeight: "bold"
  },
  signUpStyle: {
    flexDirection: "row",
    paddingVertical: 40
  }
});
