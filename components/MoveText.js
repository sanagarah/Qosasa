import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export default class BagText extends Component {
    render() {
        return (
       
            <View>
                <TouchableOpacity >
                <Text style={{ paddingTop:5}} >{this.props.BagTextx}</Text>
                </TouchableOpacity>
               
            </View>
       
        )
    }
}
