/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class curso01b extends Component {
  render() {
    return (
      <View>
       {/* <Text style={styles.welcome}>
        Aula 01
      </Text>
      <Text style={styles.instructions}>
        19/08/2017
      </Text>
      <Image style={{height:100,width:100}} source = {{uri:'https://www.w3schools.com/css/trolltunga.jpg'}}/>
      <Text style={styles.instructions}>
        Double tap R on your keyboard to reload,{'\n'}
        Shake or press menu button for dev menu
      </Text>
      <TouchableOpacity onPress={()=>{}}
        underlayColor='#f0a'>
        <Text>Touch me</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={()=>{}}
        underlayColor='#f0a'>
        <Text>Touch with Hi</Text> 
      </TouchableHighlight>
       */}

       {/* <Image style={{height:100,width:100}} source = {{uri:'https://facebook.github.io/react/img/logo_og.png'}}/>
       <Text>Hello to React Native!</Text> */}

        <View style={[styles.container,{justifyContent:'flex-start'}]}>
          <View style={styles.item1}></View><View style={styles.item2}></View><View style={styles.item3}></View>
        </View>
        <View style={[styles.container,{justifyContent:'center'}]}>
          <View style={styles.item1}></View><View style={styles.item2}></View><View style={styles.item3}></View>
        </View>
        <View style={[styles.container,{justifyContent:'flex-end'}]}>
          <View style={styles.item1}></View><View style={styles.item2}></View><View style={styles.item3}></View>
        </View>
        <View style={[styles.container,{justifyContent:'space-around'}]}>
          <View style={styles.item1}></View><View style={styles.item2}></View><View style={styles.item3}></View>
        </View>
        <View style={[styles.container,{justifyContent:'space-between'}]}>
          <View style={styles.item1}></View><View style={styles.item2}></View><View style={styles.item3}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   // backgroundColor: '#800000',
  //   margin:20,
  //   backgroundColor:'gray',
  //   borderWidth:2,
  //   borderRadius:20,
  //   padding:10
  // },
  // text:{
  //   fontSize:20
  // },
  // welcome: {
  //   color:'#ffff4d',
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#ffffff',
  //   marginBottom: 5,
  // },

  container:{
    marginBottom:5,height:100,
    flexDirection:'row',
    borderColor:'black',borderWidth:1
  },
  item1:{
    width:50,height:50,backgroundColor:'red'
  },
  item2:{
    width:50,height:50,backgroundColor:'blue'
  },
  item3:{
    width:50,height:50,backgroundColor:'green'
  }
});


AppRegistry.registerComponent('curso01b', () => curso01b);
