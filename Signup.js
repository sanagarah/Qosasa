import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import Form from "./components/Form";
import Button from "./components/Button";
import LangAr from "./lang/ar";
import LangEn from "./lang/en";
import AorE from "./lang/AorE";
export default class Signup extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              flex: 8,
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
          <View style={{ flex: 5 }}>
            <Form
              createAccount={
                AorE.A == true ? LangAr.createAccount : LangEn.createAccount
              }
              name={AorE.A == true ? LangAr.name : LangEn.name}
              email={AorE.A == true ? LangAr.email2 : LangEn.email2}
              dateOfBirth={
                AorE.A == true ? LangAr.dateOfBirth : LangEn.dateOfBirth
              }
              day={AorE.A == true ? LangAr.day : LangEn.day}
              month={AorE.A == true ? LangAr.month : LangEn.month}
              year={AorE.A == true ? LangAr.year : LangEn.year}
              password={AorE.A == true ? LangAr.password2 : LangEn.password2}
              confirmPassword={
                AorE.A == true ? LangAr.confirmPassword : LangEn.confirmPassword
              }
            />
          </View>
          <View style={{ flex: 2 }}>
            <Button
              createAccount={
                AorE.A == true ? LangAr.createAccount : LangEn.createAccount
              }
              byCreating={
                AorE.A == true ? LangAr.byCreating : LangEn.byCreating
              }
              terms={AorE.A == true ? LangAr.terms : LangEn.terms}
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
    paddingHorizontal: 40
  }
});
