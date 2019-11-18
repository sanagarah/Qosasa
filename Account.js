import React from "react";
import {
  StyleSheet,
  Text,
  AsyncStorage,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import ContactUs from "./components/contactUs";
import AccountText from "./components/accountText";
import LastSection from "./components/LastSection";
import LangAr from "./lang/ar";
import LangEn from "./lang/en";
import AorE from "./lang/AorE";
import Header from "./components/Header";

export default class Acoount extends React.Component {
  state = { text: "" };
  render() {
    return (
      <View style={styles.container}>
        <Header />

        <View style={styles.contntView}>
          <View style={styles.leftRightView} />

          {/**sign in  */}
          <View style={styles.contntView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Signin")}
            >
              <Image
                style={styles.imageStyle}
                source={require("./image/profile.png")}
              />
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "gray"
                }}
              >
                {AorE.A == true ? LangAr.signin : LangEn.signin}
              </Text>
            </TouchableOpacity>
          </View>

          {/**end of view  */}

          <View style={styles.middlelView} />

          {/**sign up  */}
          <View style={styles.contntView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <Image
                style={styles.imageStyle}
                source={require("./image/profile.png")}
              />
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "gray"
                }}
              >
                {AorE.A == true ? LangAr.signup : LangEn.signup}
              </Text>
            </TouchableOpacity>
          </View>
          {/**end sign up  */}
        </View>

        {/**Setting  Section */}
        <View
          style={{
            flex: 3,
            backgroundColor: "#F1F1F1",
            width: "100%",
            flexDirection: "column"
          }}
        >
          <Text
            style={{
              fontSize: 19,
              color: "gray",
              marginVertical: 7,
              marginHorizontal: 7
            }}
          >
            {AorE.A == true ? LangAr.setting : LangEn.setting}
          </Text>

          <AccountText
            name={AorE.A == true ? LangAr.country : LangEn.country}
            image={require("./image/saudi.png")}
          />
          <View style={styles.accountText}>
            <Text style={{ fontSize: 24, color: "gray", marginHorizontal: 5 }}>
              {AorE.A == true ? LangAr.languge : LangEn.languge}
            </Text>

            <RNPickerSelect
              onValueChange={value => (
                AorE.A == true ? (AorE.A = false) : (AorE.A = true),
                this.forceUpdate()
              )}
              items={[
                { label: "العربيه", value: "العربيه" },
                { label: "English", value: "English" }
              ]}
            />
          </View>

          <Text
            style={{
              fontSize: 19,
              color: "gray",
              marginVertical: 7,
              marginHorizontal: 7
            }}
          >
            {AorE.A == true ? LangAr.reach : LangEn.reach}
          </Text>
          <AccountText
            name={AorE.A == true ? LangAr.help : LangEn.help}
            image={require("./image/info.jpg")}
          />
          <ContactUs></ContactUs>
        </View>

        <LastSection />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  accountText: {
    backgroundColor: "white",
    width: "100%",
    marginVertical: 2
  },
  textStyle: {
    fontSize: 24,
    color: "gray",
    alignSelf: "center",
    width: 40
  },

  contntView: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    marginTop: 4
  },
  leftRightView: {
    backgroundColor: "#fff",

    justifyContent: "center",
    alignContent: "center"
  },
  middlelView: {
    backgroundColor: "#fff",

    justifyContent: "center",
    alignContent: "center"
  },

  imageStyle: {
    width: 60,
    height: 50,
    alignSelf: "center"
  },
  imagestyle: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginTop: "10%"
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 24,
    color: "gray"
  },
  button: {
    fontWeight: "bold",
    margin: 5,
    color: "white",
    backgroundColor: "#FE5000",
    width: 30,
    borderRadius: 20,
    paddingHorizontal: 5
  }
});
