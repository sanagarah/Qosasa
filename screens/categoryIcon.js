import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import Item from "./item";

export default class Categoryicon extends React.Component {
  state = { text: " " };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 90, width: 90 }}>
          <TouchableOpacity
            style={{ flex: 2, height: 40, width: 40, marginStart: 20 }}
          >
            <Image
              source={this.props.image}
              style={{
                flex: 1,
                width: null,
                height: null
              }}
            />
          </TouchableOpacity>
          <View style={{ flex: 2, width: "100%" }}>
            <Text
              style={{
                alignSelf: "center",
                color: "black",
                fontSize: 11,
                marginVertical: 3
              }}
            >
              {" "}
              {this.props.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //position:'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignContent: "center",
    flex: 1
    //Top:800
  }
});
