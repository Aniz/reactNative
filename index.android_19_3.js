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

var dbdata = {
  1: {
      userName: 'Miro Tavares',
      userProfile: '',
      when: 1503170654,
      categoryList: [
          'Outros'
      ],
      address: 'Coari, Amazonas, Brasil',
      title: 'tv am',
      status: 'approved',
      imageList: [
          'http://to-na-rede.dev.cw/tmp/relato1.png'
      ],
      audioList: [],
      videoList: []
  },
  2: {
      userName: 'Stephane Oliviveira',
      userProfile: '',
      when: 1503170654,
      categoryList: [
          'Outros'
      ],
      address: 'Avenida conceição, Manaus, Amazonas, Brasil',
      title: 'fogo mato',
      status: 'approved',
      imageList: [
          'http://to-na-rede.dev.cw/tmp/relato2.png'
      ],
      audioList: [],
      videoList: []
  }
};
export default class curso01b extends Component {

  render() {

// return(
// <View style={styles.container}>
//   <Image style={{height:100,width:100}} source = {{uri:'https://facebook.github.io/react/img/logo_og.png'}}/>
//   <Text>Hello to React Native!</Text>
// </View>);
 
  return (dbdata.forEach( (news, i) => {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <Image style={styles.imagePerfil} source = {{uri:'https://image.freepik.com/icones-gratis/perfil-quadrado-imagem-do-facebook_318-37395.jpg'}}/>
            <Text style={styles.text}>{news.address}{articles.title}{i}</Text>
            <Text style={styles.text}>19/08/2017 16:28</Text>
            <Text>!</Text>
          </View>

          <View style={{backgroundColor:'white'}}>
            <Image style={styles.imageStyle} source = {{uri:'https://www.w3schools.com/css/img_fjords.jpg'}}/>
          </View>

          <View>
            <Image style={styles.imagePin} source = {{uri:'https://cdn3.iconfinder.com/data/icons/iconic-1/32/map_pin_fill-512.png'}}/>
            <Text>Endereço</Text>
          </View>
          
          <View>
            <Text>Category</Text>
            <Image style={styles.imagePhoto} source = {{uri:'https://maxcdn.icons8.com/Share/icon/p1em/Photo_Video//camera1600.png'}}/>
            <Text>Title</Text>
          </View>
        </View>
      </View>
   ) } )

  })
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    margin:20,
  },
  imageStyle:{
    height:100,
    width:2500
  },
  text:{
    color:'gray'
  },
  imagePin:{
    height:50,
    width:50,
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


AppRegistry.registerComponent('curso01b', () => curso01b);
