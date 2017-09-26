import React, { Component } from 'react';
import { Text, View, StyleSheet,AppRegistry,Image,Button,ScrollView,TouchableOpacity } from 'react-native';
import {
    StackNavigator,
  } from 'react-navigation';
  
import Single from './Single';

var rootUrl = 'http://api.tonarede.tv/api?task=incidents&by=state&name=AM&resp=json&limit=25&page=1';

const App = StackNavigator({
    Single: { screen: Single },
  });

export default class List extends Component {

  constructor(props){
    super(props);
    this.state = {
      incidents:[]
    };
    let url = `${rootUrl}`;
    let p1 = fetch(url);
    let p2 = p1.then( (response) => response.json() );
    let p3 = p2.then( (data) => { 
      console.log(data);
      this.setState({
        incidents: data.payload.incidents
      })
     })
  }

  //Alternativa para o construtor (by Diego) 
  //Não mexa no super!!!!!!!! <.<
  //componentWillMount(){
  //}

  filterImage(src){
    if(src.length > 0 && src[0].image != null ) {
      console.log(src[0].image);
      return src[0].image_url;
    }
  }

    render() {
      const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
           
            {this.state.incidents.map( (item) => (
              <TouchableOpacity key={item.incident.incidentid} onPress={() =>
                    navigate('Single',  item )
                  }>
           
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

                  
                  {/* <Button
                  title="Go to Single"
                  onPress={() =>
                    navigate('Single',  item )
                  }
                /> */}
                </View>
                </TouchableOpacity>
           
              )
            )}    

                  
                      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
      margin:20,
    },
    header: {
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
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
    //   justifyContent:'flex-start',
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

AppRegistry.registerComponent('List', () => App);
