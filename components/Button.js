import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from "react-native";
export default class Input extends React.Component {
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.onClickListener("createAccount")}
        >
          <Text style={styles.button}>{this.props.createAccount}</Text>
        </TouchableHighlight>
        <View style={{ paddingVertical: 20 }}>
          <Text style={styles.text}>{this.props.byCreating} </Text>
          <TouchableHighlight onPress={() => this.onClickListener("agree")}>
            <Text style={styles.textSignUp}>{this.props.terms}</Text>
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
    paddingVertical: 20
  },
  button: {
    fontSize: 18,
    width: "100%",
    height: 32,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#fe4f00",
    color: "white",
    textAlign: "center",
    paddingVertical: 3
  },
  text: {
    fontSize: 17,
    color: "black"
  },
  textSignUp: {
    fontSize: 17,
    color: "#fe4f00"
  }
});
