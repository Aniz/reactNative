import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet,AppRegistry,TouchableOpacity,Image } from 'react-native';

export default class curso01b extends Component {

    constructor(props){
        super(props);
        this.state = {weight:'0',height:'0',bmi:0}
        this.compute = this.compute.bind(this); 
    }
    compute(){
        console.log(this.state);
       let weight = parseFloat(this.state.weight);
       let height = parseFloat(this.state.height);
       let bmi = weight/Math.pow(height/100,2);
       this.setState({bmi:weight/Math.pow(height/100,2)});

        if(bmi>32)
            this.setState({msg:"Obeso"});
        if(25 < bmi && bmi < 32)
            this.setState({msg:"Quase Obeso"});
        if(18.5 < bmi && bmi < 25)
            this.setState({msg:"Quase Magro"});
        if(bmi<18.5)
            this.setState({msg:"MAgrelo"});
       
    }
    render() {
    return (
      <View style={styles.container}>
            <View style={styles.group}>
                <Text>Weight (Kg)</Text>  
                <TextInput onChangeText={(weight) => this.setState({weight})} value={this.state.weight} style={styles.input} placeholder="Kg" keyboardType="numeric"/>
            </View>
            <View style={styles.group}>
                <Text>Height(CM)</Text>
                <TextInput onChangeText={(height) => this.setState({height})} value={this.state.height} style={styles.input} placeholder="M" keyboardType="numeric"/>
            </View>
            <View style={styles.center}>
            <Text>BMI:{this.state.bmi.toFixed(2)}</Text>
            <Text>{this.state.msg}</Text>
            <TouchableOpacity style={styles.button} onPress={this.compute}>
                <Text>Compute</Text>
            </TouchableOpacity>
            </View>
      </View>
    );
  }
}

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      flexDirection:'column',
      padding: 20
    //   backgroundColor: 'lightgray',
    //   margin:20,
    },
    group:{
        marginTop:20
    },
    button:{
        backgroundColor:'red',
        padding:20,
        borderWidth:1
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
