import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  Linking,
  Modal,
  TouchableOpacity,

  SafeAreaView,

} from 'react-native';


import AsyncStorage from '@react-native-community/async-storage';

import Colors from '../common/Colors';

export default class Splash extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
   
  });



  componentDidMount() {
    // this.appVersion();

   
    AsyncStorage.getItem('UserId').then(Userid => {
      if (Userid) {
        this.props.navigation.navigate('Home') 
      } else {
        this.props.navigation.navigate('Splash')
      }

    })
  }
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
      

    </SafeAreaView>
    );
  }
}
