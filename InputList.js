import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet,AppRegistry,TouchableOpacity,Image,TouchableHighlight } from 'react-native';
export default class InputList extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
        <View>
             {this.props.list.map( (item,i) => (
                 <View key={i}>
                    <Text>{this.props.list.length - i} - {item}</Text>
                    {/* <TouchableOpacity style={{backgroundColor:'red'}} onPress={this.addList}>
                    <Text style={{color:'white',textAlign: 'center'}}>X</Text> 
                    </TouchableOpacity> */}
                </View> 
             ))}
        </View>
        );
    }
}