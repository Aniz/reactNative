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
} from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class curso01 extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Aula 01
        </Text>
        <Text style={styles.instructions}>
          19/08/2017
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        {/*<DatePicker date= "19/08/2017" mode="date"  />*/}
        {/* <Image
  style={{flex:1, height: undefined, width: undefined}}
  source={require('../../../assets/images/onboarding-how-it-works.png')}
  resizeMode="contain"
/> */}
  <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cc0000',
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
  },
});

AppRegistry.registerComponent('curso01', () => curso01);
