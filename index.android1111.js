import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet,AppRegistry,TouchableOpacity,Image,TouchableHighlight } from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';
export default class curso01b extends Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Setup Tab"
        onPress={() => navigate('Setup')}
      />
    );
  }
}


AppRegistry.registerComponent('curso01b', () => navigationOptions);
