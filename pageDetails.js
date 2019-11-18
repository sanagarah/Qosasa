import React from "react";
import { View, ScrollView } from "react-native";
import Details from "./components/Details";
import LangAr from "./lang/ar";
import LangEn from "./lang/en";
import AorE from "./lang/AorE";

export default class Detials extends React.Component {
  render() {
    return (
      <ScrollView>
        <Details
          pic={require("./pictures/paper.jpg")}
          txt1={AorE.A == true ? LangAr.productName : LangEn.productName}
          txt2="#682115"
          txt3={AorE.A == true ? LangAr.company : LangEn.company}
          txt4="39.00"
          txt5={AorE.A == true ? LangAr.available2 : LangEn.available2}
          txt6={AorE.A == true ? LangAr.describtion : LangEn.describtion}
          txt7="-"
        ></Details>
      </ScrollView>
    );
  }
}
