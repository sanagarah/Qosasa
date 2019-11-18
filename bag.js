import React from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./components/bagstyles";
import Totalx from "./components/Total";
import Bagtextx from "./components/MoveText";
import Buttonx from "./components/LargeButtonBag";
import Header from "./components/Header";
import LangAr from "./lang/ar";
import LangEn from "./lang/en";
import AorE from "./lang/AorE";

export default class Bag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  onCountplus = () => {
    this.setState({ num: this.state.num + 1 });
  };
  onCount = () => {
    {
      this.state.num > 0
        ? this.setState({ num: this.state.num - 1 })
        : this.setState({ num: this.state.num });
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header></Header>

        <View
          style={{
            backgroundColor: "white",
            margin: 10
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ alignItems: "center", paddingHorizontal: 10 }}>
              <Text>
                {AorE.A == true ? LangAr.productName : LangEn.productName}
              </Text>
              <Bagtextx
                BagTextx={AorE.A == true ? LangAr.favorite : LangEn.favorite}
              />
              <Bagtextx BagTextx={AorE.A == true ? LangAr.move : LangEn.move} />
              <Text style={{ paddingTop: 10, paddingBottom: 5 }}>
                {" "}
                S.R 39,00
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={this.onCountplus}>
                  <Text style={styles.squer}>+</Text>
                </TouchableOpacity>
                <Text style={styles.number}>{this.state.num}</Text>
                <TouchableOpacity onPress={this.onCount}>
                  <Text style={styles.squer}>-</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ paddingTop: 10, paddingBottom: 5 }}>
                {" "}
                S.R 39,00
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <AntDesign
                name="close"
                style={{ marginTop: 20, marginRight: 20 }}
              ></AntDesign>
              <Image
                source={require("./images/bag.jpg")}
                style={styles.imagex}
              ></Image>
            </View>
          </View>
          <Totalx
            totalnum="S.R 39,00"
            totaltext={AorE.A == true ? LangAr.total1 : LangEn.total1}
          />
          <Totalx
            totalnum="S.R 39,00"
            totaltext={AorE.A == true ? LangAr.total2 : LangEn.total2}
          />
          <Buttonx
            ButtonTextx={AorE.A == true ? LangAr.update : LangEn.update}
          />
          <Buttonx
            ButtonTextx={AorE.A == true ? LangAr.terminate : LangEn.terminate}
          />
          <Text style={styles.textcupon}>
            {AorE.A == true ? LangAr.Q : LangEn.Q}
          </Text>
          <TextInput
            placeholder={AorE.A == true ? LangAr.code : LangEn.code}
            style={styles.textinputcupon}
          ></TextInput>
          <TouchableOpacity style={{ alignItems: "flex-end" }}>
            <Text style={styles.submitcupon}>
              {AorE.A == true ? LangAr.add2 : LangEn.add2}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 20 }}></View>
      </View>
    );
  }
}
