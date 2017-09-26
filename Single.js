import React, { Component } from 'react';
import { Text, View, StyleSheet,AppRegistry,Image,Button } from 'react-native';
import {
    StackNavigator,
  } from 'react-navigation';
  
export default class Single extends Component {

    filterImage(src){
      
      if(src.length > 0 && src[0].image != null ) {
        console.log(src[0].image);
        return src[0].image_url;
      }
    }

    render() {
      let item = this.props.navigation.state.params;
      const { navigate } = this.props.navigation;
      
    return (
      <View style={styles.container}>
                <View key={item.incident.incidentid}>
                <View style={styles.header}>
                  <Image style={styles.imagePerfil} source = {{uri:'http://to-na-rede.dev.cw/tmp/profile-default.png'}}/>
                  <Text style={styles.text}>{item.incident.incidentdate}</Text>
                  <Image style={styles.imagePin} source = {{uri:'http://to-na-rede.dev.cw/tmp/approved.png'}}/>
                </View>
                <View style={{backgroundColor:'white'}}>
                  <Image style={styles.imageStyle} source = {{uri: this.filterImage(item.media)}}/>
                </View>
                <View>
                  <Image style={styles.imagePin} source = {{uri:'http://to-na-rede.dev.cw/tmp/pin.png'}}/>
                  <Text>{item.incident.locationname}</Text>
                </View>
                <View>
                <Text>{item.categories[0].category.title}</Text>
                  <Image style={styles.imagePhoto} source = {{uri:'http://to-na-rede.dev.cw/tmp/media-icon.png'}}/>
                  <Text>{item.incident.incidenttitle}</Text>
                </View>

                
                <Button
                title="Go Back"
                onPress={() =>
                  navigate('List',  item )
                }
              />
              </View>
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

  AppRegistry.registerComponent('Single', () => Single);
  
