import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import Form from "./components/FormIn";
import Button from "./components/ButtonIn";
import Header from "./components/Header";
import LangAr from "./lang/ar";
import LangEn from "./lang/en";
import AorE from "./lang/AorE";

export default class Signin extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              flex: 6,
              alignItems: "center"
            }}
          >
            <Image
              style={[
                {
                  width: "100%",
                  height: "100%"
                }
              ]}
              source={require("./images/logo.png")}
            />
          </View>
        </SafeAreaView>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Form
              email={AorE.A == true ? LangAr.email1 : LangEn.email1}
              Pemail={AorE.A == true ? LangAr.Pemail : LangEn.Pemail}
              password={AorE.A == true ? LangAr.password1 : LangEn.password1}
              Ppassword={AorE.A == true ? LangAr.Ppassword : LangEn.Ppassword}
              forgot={AorE.A == true ? LangAr.forgot : LangEn.forgot}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              btnText={AorE.A == true ? LangAr.signIn : LangEn.signIn}
              donthave={AorE.A == true ? LangAr.donthave : LangEn.donthave}
              signUp={AorE.A == true ? LangAr.signUp : LangEn.signUp}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    marginTop: 100
  }
});
