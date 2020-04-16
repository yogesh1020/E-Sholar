import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions} from 'react-navigation';
import Colors from '../common/Colors';
import Fonts from '../common/Fonts';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Header extends Component {
  render() {
    return (
      <View  style={{flexDirection:'column',backgroundColor:Colors.primary}} >
            <View
            style={{
              flexDirection: 'row',
              height: Platform.OS == 'ios' ? 50 : 50,
              paddingTop: Platform.OS == 'ios' ? 0 : 0,
           
           }}>
             
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{flex: 0.25}} onPress={this.props.back}>
            
                <View
                  style={{
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {this.props.backIcon?
                  <Image
                    resizeMode="cover"
                    style={{height: 25, width: 25, tintColor: Colors.white}}
                    source={this.props.backIcon}
                  />:
                  <Icon name="angle-left" size={40} style={{ color: 'white', padding: 5, paddingLeft: 0,marginLeft:0 }} ></Icon>
                  }
                </View>
             </TouchableOpacity>

            <View
              style={{
                flex: 1,

                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: Fonts.bold,
                  fontSize: 18,
                }}
                numberOfLines={2}>
                {this.props.pageTitle}
              </Text>
            </View>

            <TouchableOpacity style={{flex: 0.25}} onPress={this.props.press}>
              {this.props.press ? (
                <View style={{marginRight: 2, alignItems: 'flex-end'}}>
                
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                  
                      <Image
                        resizeMode="contain"
                        style={{height: 25, width: 25, tintColor: Colors.white}}
                        source={this.props.iconName}
                      />
                    </View>
              
                </View>
              ) : null}
            </TouchableOpacity>

          </View>
          </View>
    </View>
    );
  }
}
