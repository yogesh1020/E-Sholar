

import React from 'react';
import {
  View,
  Text,
  TextInput, ScrollView, StyleSheet, TouchableOpacity
} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import Header from '../../component/Header';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from "react-navigation";
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import timeout from '../../common/Timeout';
import API from '../../common/API';
import Loader from '../../common/Loader';
export default class Feedback extends React.Component {
  state = {
    inputBorderColor1: Colors.medium_gray,
    inputBorderColor2: Colors.medium_gray,
    Feedback: '',loading:false
  }

  Feedback = () => {

    if (!this.state.Feedback) {
      Toast.show(
        "Please Enter Feedback",
        Toast.SHORT,
        Toast.BOTTOM
      );
    } else {
      this.setState({ loading: true });
      AsyncStorage.getItem('UserId').then(id => {

        var Request = {
          "action":"feedback",
          "studentid":JSON.parse(id),
           "detail":this.state.Feedback 
        };
        console.log(API.login);
        console.log(JSON.stringify(Request));

        NetInfo.fetch().then(state => {
          if (state.isConnected) {
            timeout(
              15000,
              fetch('https://trivediservices.com/scholar/api.php', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(Request),
              })
                .then(res => res.json())
                .then(res => {
                  console.log('Feedback RESPONCE:::  ', res.response);
                  if (res.response.code == '200') {
                    this.setState({ loading: false },()=>{

                      Toast.show(
                       res.response.message,
                        Toast.SHORT,
                        Toast.BOTTOM,
                      );
                      
                      setTimeout(() => {
                        const resetAction = StackActions.reset({
                          index: 0,
                          actions: [
                            NavigationActions.navigate({ routeName: 'Home' }),
                          ],
                        });
                        this.props.navigation.dispatch(resetAction);
                      }, 200);
                     
                    });
                  } else {
                    setTimeout(() => {
                      Toast.show(res.response.message, Toast.SHORT, Toast.BOTTOM);
                    }, 50);
                    this.setState({ loading: false });
                  }
                })
                .catch(e => {
                  this.setState({ loading: false });
                  console.log(e);
                  Toast.show(
                    'Something went wrong...',
                    Toast.SHORT,
                    Toast.BOTTOM,
                  );
                }),
            ).catch(e => {
              console.log(e);
              this.setState({ loading: false },()=>{
                Toast.show(
                  'Please Check your internet connection',
                  Toast.SHORT,
                  Toast.BOTTOM,
                );
                setTimeout(() => {
                  const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home' }),
                    ],
                  });
                  this.props.navigation.dispatch(resetAction);
                }, 200);
              });             
              });  
          } else {
            this.setState({ loading: false },()=>{
              Toast.show(
                'Please Check your internet connection',
                Toast.SHORT,
                Toast.BOTTOM,
              );
              setTimeout(() => {
                const resetAction = StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Home' }),
                  ],
                });
                this.props.navigation.dispatch(resetAction);
              }, 200);
            });             
          }
        });
      })
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          // backIcon={require('../images/menu.png')}  
          pageTitle="Feedback"
          backIcon={require('../../images/menu.png')}
          back={() => {
            this.props.navigation.openDrawer();
          }}

        />
         <Loader loading={this.state.loading}/>
        <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>



          <Text style={styles.label}>Feedback</Text>
          <TextInput
            selectionColor={Colors.primary}
            style={[styles.textInput, {
              textAlignVertical: this.props.multiline ? "top" : "center",
              borderColor: this.state.inputBorderColor2,

            }]}
            onFocus={() => this.setState({ inputBorderColor2: Colors.primary })}
            onBlur={() =>
              this.setState({ inputBorderColor2: Colors.medium_gray })
            }
            autoCapitalize='none'

            ref='Feedback'
            placeholder="Enter Your Feedback"
            returnKeyType={"next"}

            onChangeText={Feedback => this.setState({ Feedback })}
            onSubmitEditing={(event) => {
              this.refs.email.focus();
            }}
          />


          <TouchableOpacity
            style={styles.BottomButton}
            onPress={() => { this.Feedback() }}>
            <Text style={styles.BottomText}>
              Submit
              </Text>
          </TouchableOpacity>

        </ScrollView>


      </View>

    )
  }
}
const styles = StyleSheet.create({
  label: {

    marginTop: 15,
    color: Colors.primary,
    fontSize: 14,
    paddingVertical: 3,
    fontFamily: Fonts.medium,
  },
  textInput: {
    padding: 15,
    paddingVertical: Platform.OS == "ios" ? 12 : 5,
    paddingHorizontal: 10,
    fontSize: 16,

    fontFamily: Fonts.regular,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 4,

  }, BottomText: { color: Colors.white, fontFamily: Fonts.regular, fontSize: 18 },
  BottomButton: { backgroundColor: Colors.reg, height: 40, width: '100%', marginTop: 20, justifyContent: 'center', alignItems: 'center' },

});