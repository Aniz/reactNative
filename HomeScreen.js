import React, { Component } from 'react';
import { Text, View, StyleSheet,AppRegistry,Image,Button } from 'react-native';
import {
    StackNavigator,
  } from 'react-navigation';
  
export default class HomeScreen extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       incidents:[]
//     };
//     let url = `${rootUrl}`;
//     let p1 = fetch(url);
//     let p2 = p1.then( (response) => response.json() );
//     let p3 = p2.then( (data) => { 
//       console.log(data);
//       this.setState({
//         incidents: data.payload.incidents
//       })
//      })
//   }
    
    render() {
    return (
      <View style={styles.container}>
        <Text>Oi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'lightgray',
      margin:20,
    },
    imageStyle:{
      height:200,
      width:400
    },
    text:{
      color:'gray'
    },
    imagePin:{
      height:10,
      width:10,
    },
    imagePerfil:{
      justifyContent:'flex-start',
      height:50,
      width:50,
    },
    imagePhoto:{
      height:30,
      width:30,
      marginLeft: 300
    },
    welcome: {
      color:'#ffff4d',
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#ffffff',
      marginBottom: 5,
    }
  });

  AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
  
