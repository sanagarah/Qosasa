import React from "react";
import StarRating from "react-native-star-rating";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet } from "react-native";
//stoooooooooooooop
export default class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          starSize={20}
          fullStarColor="gray"
          emptyStarColor="gray"
          selectedStar={rating => this.onStarRatingPress(rating)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //position:'absolute',
    top: -10,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignContent: "center",
    flex: 1
    //Top:800
  }
});
