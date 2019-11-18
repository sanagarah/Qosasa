import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import styles from './bagstyles'

export default class LargeButtonBag extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity >
        <Text style={styles.largebutton}>{this.props.ButtonTextx}</Text>
      </TouchableOpacity>
            </View>
        )
    }
}
