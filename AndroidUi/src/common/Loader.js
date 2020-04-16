import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Image,Text,
  ActivityIndicator
} from 'react-native';
var Spinner = require('react-native-spinkit');
// var Colors = require('./Colors')

import Colors from './Colors'
const Loader = props => {
  const {
    loading,
    ...attributes
  } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {console.log('close modal')}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>

{/* <View style={{height:100,width:150,backgroundColor:'white',elevation:0.2,justifyContent:'center',alignItems:'center'}}> */}
{/* <Spinner style={{elevation:10}}
            isVisible={true}
            size={50} 
            type={'9CubeGrid'}
            color={'#2E3257'}

            // FadingCircleAlt  9CubeGrid
            
            /> */}

          
          <ActivityIndicator
            size="large" color={Colors.primary}
            animating={loading} />
  
{/* </View> */}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  activityIndicatorWrapper: {
    backgroundColor: 'transparent',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',marginTop:10,
    justifyContent: 'space-around'
  }
});

export default Loader;
