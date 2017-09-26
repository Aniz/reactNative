import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, AppRegistry,Button,TouchableOpacity  } from 'react-native';

import InputList from './InputList';
export default class curso01b extends Component {

    constructor(props){
        super(props);
        this.state = {
            text:"",
           list:[]
        };
        this.addList = this.addList.bind(this);
        this.cleanList = this.cleanList.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    
    addList(){
        if(this.state.text){
            let list = [this.state.text,...this.state.list];
            this.setState({list,text:""} );
        }  
    }
    
    // removeItem(){
    //     if(this.state.text){
    //         let list = [this.state.text,...this.state.list];
    //         this.setState({list,text:""} );
    //     }  
    // }
    
    cleanList(){
        let list = [];
        this.setState({list,text:""} );
      }

    render() {
        return (
        <View style={styles.container}>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TouchableOpacity style={styles.send} onPress={this.addList}>
            <Text style={{color:'white',
      textAlign: 'center'}}>Send</Text> 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.clear} onPress={this.cleanList}>
            <Text style={{color:'white',
      textAlign: 'center'}} >Clear</Text> 
          </TouchableOpacity> 
          <InputList list={this.state.list}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      margin:20,
    },
    button:{
        height:10,
        width:10,
        fontSize:10
    },
    clear:{
        backgroundColor: 'purple',  
    },
    send:{
        backgroundColor: 'blue'
    },
    text:{
      color:'gray'
    }
  });

AppRegistry.registerComponent('curso01b', () => curso01b);
