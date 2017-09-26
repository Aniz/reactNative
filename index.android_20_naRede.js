import React, { Component } from 'react';
import { Text, View, StyleSheet,AppRegistry,Image } from 'react-native';


var dbdata = [
      {
        key: 1,
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
     {
        key: 2,
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
];
 
var rootUrl = 'http://api.tonarede.tv/api?task=incidents&by=state&name=AM&resp=json&limit=25&page=1';

export default class curso01b extends Component {

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
    
    render() {
    return (
      <View style={styles.container}>
            {this.state.incidents.map( (item) => (
                <View key={item.incident.incidentid}>
                  <View>
                    <Image style={styles.imagePerfil} source = {{uri:'http://to-na-rede.dev.cw/tmp/profile-default.png'}}/>
                    {/* <Image style={styles.imagePerfil} source = {{uri:'https://graph.facebook.com/'+{item.incident.incidentuseropenid}+'/picture'}}/> */}
                    <Text style={styles.text}>{item.incident.incidentdate}</Text>
                    <Image style={styles.imagePerfil} source = {{uri:'http://to-na-rede.dev.cw/tmp/approved.png'}}/>
                  </View>
                  <View style={{backgroundColor:'white'}}>
                    {/* <Image style={styles.imageStyle} source = {{uri:item.media[0].link_url}}/> */}
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
                </View>
              )
            )}          
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

AppRegistry.registerComponent('curso01b', () => curso01b);
