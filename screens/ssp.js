import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,TextInput,FlatList,TouchableOpacity } from 'react-native';


export default class Ssp extends React.Component {
  constructor () { 
    super();
    this.state = {showImage1: true,showImage2: false,showImage3: false};
  }

  showImageFunc1= () => {
     this.setState({showImage1: true,showImage2: false,showImage3: false});
  }
  showImageFunc2= () => {
    this.setState({showImage1: false,showImage2: true,showImage3: false});
 }
 showImageFunc3= () => {
  this.setState({showImage1: false,showImage2: false,showImage3: true});
}
 
    render(){
    return (
<View style={styles.container}>

 {/**showing the selected img*/}
<View style={styles.s}>
  { this.state.showImage1 && <TouchableOpacity style={styles.s1}>
  <Image source ={this.props.image}  style={styles.pic} /></TouchableOpacity>
||this.state.showImage2 && <TouchableOpacity style={styles.s1}>
  <Image source={this.props.image2}  style={styles.pic}/></TouchableOpacity>
||this.state.showImage3 && <TouchableOpacity style={styles.s1}>
  <Image source={this.props.image3}  style={styles.pic}/></TouchableOpacity>}

{/**the 3 static img 'at the end' */}
  
<View style={{  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  width:'100%',
  paddingStart:20,
  paddingEnd:20,
 paddingHorizontal:20,
  backgroundColor:this.props.colora}}>

<TouchableOpacity onPress={this.showImageFunc1} style={styles.p1}>
  <Image source ={this.props.image}  style={styles.pic} /></TouchableOpacity>
<TouchableOpacity onPress={this.showImageFunc2} style={styles.p1}>
  <Image source ={this.props.image2}  style={styles.pic}/></TouchableOpacity>
<TouchableOpacity onPress={this.showImageFunc3} style={styles.p1}
><Image source ={this.props.image3}  style={styles.pic}/></TouchableOpacity>
</View>

<View style={styles.pinkend}>
  <Text style={styles.txt}>{this.props.name}</Text>
</View>









</View>
</View>

    );
    }
}

//<Image source={require('./assets/img/18.jpg')} />

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
      flexDirection:'column'
      //Top:800
      
      
     
    },
  s:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'white',
    width:'100%',
    height:'100%'

  },
s1:{
  flex:3,
  backgroundColor:'white',
  width:'100%',
},
s2:{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  width:'100%',
  paddingStart:20,
  paddingEnd:20,
  //////////////////////////////////
  //backgroundColor:this.props.calr
},
p1:{
  flex:1,
  backgroundColor:'#fff',
  alignSelf:'flex-end',
  justifyContent:'center',
  width:'100%',
  marginRight:1,
  marginLeft:1
 
},

/*pic2:{
  flex:1,
  resizeMode:'cover',
  alignSelf:'center',
  width:'100%',
  height:'50%',
},*/
pic:{
  flex:1,
  resizeMode:'cover',
  width:'100%',
  height:'100%',
},
txt:{
  alignSelf:'center',
  color:'white',

},
pinkend:{
  flex:1,
  backgroundColor:'#EB628A',
  justifyContent:'center',
  alignSelf:'center',
  width:'100%',
  
}});