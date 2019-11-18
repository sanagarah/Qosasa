import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,TextInput,FlatList,TouchableOpacity } from 'react-native';
import Ssp from './ssp'

export default class Newproducts extends React.Component {


    render(){
    return (
      
<View style={styles.container}>


<View style={styles.allItems}> 



<View style={styles.items} >
{/*1.p */}
<View style={styles.item}>
<Ssp
image={require('../assets/img/18.jpg')}
image2={require('../assets/img/19.jpg')}
image3={require('../assets/img/20.jpg')}
colora='#EB628A'

/>
</View>


{/*2.p */}
<View style={styles.item}>
<Ssp
image={require('../assets/img/18.jpg')}
image2={require('../assets/img/19.jpg')}
image3={require('../assets/img/20.jpg')}
colora='#EB628A'


/>
</View>


{/*3.p */}
<View style={styles.item}>
<Ssp
image={require('../assets/img/18.jpg')}
image2={require('../assets/img/19.jpg')}
image3={require('../assets/img/20.jpg')}
colora='#EB628A'
/>
</View>
</View>




</View>
</View>

    

    );
    }
}


const styles = StyleSheet.create({
    container: {
      //position:'absolute',
      top:0,
      left:0,
      bottom:0,
      right:0,
      justifyContent:'center',
      alignContent:'center',
      flex:1,
      backgroundColor:'#fff'
      //Top:800
      
      
     
    },
  style2:{
    flex:2,
    flexDirection:'row',
    backgroundColor:'#fff',
    width: '100%',
     height: 50

  },
  allItems:{
   flex:1,
   flexDirection:'column' ,
   alignItems:'center',
   backgroundColor:'#fff'
  },
  item:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:2
  },
txt:{
  alignSelf:'center',
  color:'grey'
},
items:{
  flex:4,
  flexDirection:'row',
  paddingStart:20,
  paddingEnd:20
}});