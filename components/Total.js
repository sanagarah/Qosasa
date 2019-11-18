
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './bagstyles'

export default class Total extends Component {
    render() {
        return (
            <View>
               <View style={styles.total}> 
     <View style={styles.totalnum}>
       <Text >{this.props.totalnum}</Text>
       </View>
     <View style={styles.totaltext}>
       <Text style={{color:'gray'}}>{this.props.totaltext}</Text>
       </View>
      </View>
            </View>
        )
    }
}
