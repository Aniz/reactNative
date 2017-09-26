import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet,AppRegistry,TouchableOpacity,Image,TouchableHighlight } from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';
export default class curso01b extends Component {

    constructor(props){
        super(props);
        this.state = {timeElapsed:0,running:false,startTime:null,laps:[],}
        this.lap = this.lap.bind(this); 
        this.start = this.start.bind(this); 
    }
    lap(){
        console.log(this.state);
        this.setState({startTime:new Date()});
        this.interval = setInterval(() => {
           this.setState({
                timeElapsed: 0,
                running:false
           }); 
        },30);
    }
    start(){
        console.log(this.state);
        this.setState({startTime:new Date()});
        this.interval = setInterval(() => {
           this.setState({
                timeElapsed: new Date() - this.state.startTime,
                running:true,
           }); 
        },30);
    }

    render() {
    return (
      <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.timeWrapper}>
                    <Text style={styles.timer}>{formatTime(this.state.timeElapsed)}</Text>  
                    {/* <Text style={styles.timer}>{this.state.timeElapsed}</Text>   */}
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableHighlight style={styles.button} underlayColor="gray" onPress={this.lap}> 
                    <Text>Lap</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} underlayColor="gray" onPress={this.start}> 
                    <Text>Start</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.footer}>
                <View style={styles.lap}>
                    <Text style={styles.lapText}>Lap #2</Text>
                    <Text style={styles.lapText}>00:00.0</Text>
                </View>
                <View style={styles.lap}>
                    <Text style={styles.lapText}>Lap #1</Text>
                    <Text style={styles.lapText}>00:00.0</Text>
                </View>
            </View>
      </View>
    );
  }
}

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:20,
    },
    header:{
        flex:1
    },
    footer:{
        flex:1
    },
    timerWrapper:{
        flex:5,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonWrapper:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    lap:{
        justifyContent:'space-around',
        flexDirection:'row',
        backgroundColor:'lightblue',
        padding:10,
        marginTop:10
    },
    button:{
        backgroundColor:'lightyellow',
        flexDirection:'row',
        padding:20,
        borderWidth:2,
        borderRadius:50,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        width:100,
    },
    timer:{
        fontSize:60
    },
    lapText:{
        fontSize:30
    },
    buttonText:{
        fontSize:30
    },
    input:{
    //     padding:10,
    //     flex:1,
    //     height:40,
    //     borderWidth:1
    },
    title:{
        fontSize:20
    },
    center:{
        alignItems:'center'
    }
  });


AppRegistry.registerComponent('curso01b', () => curso01b);
