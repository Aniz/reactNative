import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, AppRegistry,Button,TouchableOpacity  } from 'react-native';
import InputList from './InputList';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';

class curso01b extends Component {
    render() {
        return (
        <View style={styles.container}>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.props.text}
            value={this.props.text}
          />
          <TouchableOpacity style={styles.send} onPress={this.addList}>
            <Text style={{color:'white',
      textAlign: 'center'}}>Send</Text> 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.clear} onPress={this.cleanList}>
            <Text style={{color:'white',
      textAlign: 'center'}} >Clear</Text> 
          </TouchableOpacity> 
          {/* <InputList list={this.props.list}/> */}
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

function mapPToP(state){
    return {list:state.list,text:state.text};
}

export default connect(mapPToP)(curso01b);
AppRegistry.registerComponent('curso01b', () => curso01b);
