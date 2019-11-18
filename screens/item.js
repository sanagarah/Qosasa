import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class Item extends React.Component {
  state = { text: " " };
  render() {
    return (
      <View style={styles.container}>
        {/* //<Category1> */}
        <View style={{ height: 130, width: 130, paddingRight: 12 }}>
          <TouchableOpacity style={{ flex: 2, borderRadius: 10 }}>
            <Image
              source={this.props.image}
              style={{
                flex: 1,
                width: null,
                height: null,
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                alignSelf: "center",
                color: "black",
                paddingVertical: 7
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
