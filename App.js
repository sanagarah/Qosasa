import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import homescreen from "./screens/homescreen";
import Account from "./Account";
import list from "./list";
import bag from "./bag";
import Signup from "./Signup";
import Signin from "./Signin";
import pageProduct from "./pageProduct";
import pageDetails from "./pageDetails";
import WishList from "./WishList";
const rootNavagation = createStackNavigator(
  {
    pageProduct: pageProduct,
    pageDetails: pageDetails,
    Signin: Signin,
    Signup: Signup,
    bag: bag,
    list: list,
    WishList: WishList,
    Account: Account,
    homescreen: homescreen
  },
  {
    initialRouteName: "homescreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#bdb931"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppProject = createAppContainer(
  createBottomTabNavigator(
    {
      homescreen: rootNavagation,
      Categories: list,
      Wishlist: WishList,
      Cart: bag,
      Account: Account
    },

    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "homescreen") {
            iconName = `ios-home${focused ? "" : ""}`;
          } else if (routeName === "Categories") {
            iconName = `md-menu${focused ? "" : ""}`;
          } else if (routeName === "Wishlist") {
            iconName = `ios-heart-empty${focused ? "" : ""}`;
          } else if (routeName === "Cart") {
            iconName = `md-cart${focused ? "" : ""}`;
          } else if (routeName === "Account") {
            iconName = `md-person${focused ? "" : ""}`;
          }

          return <Ionicons name={iconName} size={25} color={"#000000"} />;
        }
      }),
      tabBarOptions: {
        activeTintColor: "#fff",
        style: { backgroundColor: "#bdb931" },
        inactiveTintColor: "gray",
        showIcon: true
      }
    }
  )
);
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppProject />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});
