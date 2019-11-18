import React, {Component} from 'react';
import {StyleSheet, Text,TouchableOpacity, View,Image} from 'react-native';




export default class Buttons extends Component {
 
  render() {
    return (
        <TouchableOpacity style={styles.butoonStyle}>
        <Text style={styles.textStyle}> {this.props.name}</Text>
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({

    textStyle:{
        fontSize: 10,
        color:'gray',

    },

    butoonStyle:{
     margin:'2%'


    }
  });

