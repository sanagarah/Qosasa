import React from "react";
import {
  StyleSheet,
  View,
  Alert,
  TouchableHighlight,
  Text,
  Button
} from "react-native";
import Input from "./InputIn";

export default class From extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secure: true
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          name={this.props.email}
          placeholder={this.props.Pemail}
          textContentType="emailAddress"
        />
        <Input
          onPress={() =>
            this.state.secure
              ? this.setState({ secure: false })
              : this.setState({ secure: true })
          }
          name={this.props.password}
          icon={require("../images/eye.png")}
          placeholder={this.props.Ppassword}
          secureTextEntry={this.state.secure}
        />
        <View>
          <TouchableHighlight
            onPress={() => this.onClickListener("ForgotPassword")}
          >
            <Text style={styles.text}> {this.props.forgot} </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 20,
    color: "gray"
  }
});
