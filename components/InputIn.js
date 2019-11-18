import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
export default class Input extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textstyle}>{this.props.name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder={this.props.placeholder}
            placeholderTextColor="lightgray"
            style={styles.input}
            secureTextEntry={this.props.secureTextEntry}
            textContentType={this.props.textContentType}
          />
          <TouchableOpacity onPress={this.props.onPress}>
            <Image
              style={{ width: 20, height: 20, right: 25, top: 17 }}
              source={this.props.icon}
            />
          </TouchableOpacity>
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
  textstyle: {
    fontSize: 20,
    color: "gray"
  },
  input: {
    fontSize: 20,
    width: "100%",
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    top: 10
  }
});
