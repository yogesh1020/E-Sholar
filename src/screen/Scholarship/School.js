
import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, SafeAreaView, StatusBar, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Header from '../../component/Header';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import Loader from '../../common/Loader';
import timeout from '../../common/Timeout';
import { StackActions, NavigationActions, NavigationEvents } from "react-navigation";

import API from '../../common/API';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class School extends Component {

  state = {
    loading: true,
    Datasource: [],search:''
  }


  GetScholarship = () => {

this.setState({Datasource: [],loading:true})
    var Request = {
      "action": "getScholarship"
    };
    console.log(API.login);
    console.log(JSON.stringify(Request));

    // console.log( API.login+'&email='+this.state.username+'&'+'password='+this.state.password);

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
              console.log('scholarship', res.response);
              if (res.response.code == '200') {
            
                this.setState({ Datasource: res.response.scholarship , loading: false},()=>{
                  this.arrayholder =this.state.Datasource
                  if(this.props.navigation.state.params.name == 'search'){
                  this.props.navigation.state.params.isparams ?
                  this.SearchFilterFunction(this.props.navigation.state.params.isparams)
                  :null
                  this.textInput.setNativeProps({text: this.props.navigation.state.params.isparams})}
                })
              } else {
                setTimeout(() => {
                  Toast.show(res.response.message, Toast.SHORT, Toast.BOTTOM);
                }, 50);
                this.setState({ loading: false });
              }
            })
            .catch(e => {
              this.setState({ loading: false }, () => {

                console.log(e);
                Toast.show(
                  'Something went wrong...',
                  Toast.SHORT,
                  Toast.BOTTOM,
                );

                const resetAction = StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Home' }),
                  ],
                });
                this.props.navigation.dispatch(resetAction);

              });
            }),
        ).catch(e => {
          this.setState({ loading: false }, () => {
            Toast.show(
              'Please Check your internet connection',
              Toast.SHORT,
              Toast.BOTTOM,
            );

            const resetAction = StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
              ],
            });
            this.props.navigation.dispatch(resetAction);

          });

        });
      } else {
        this.setState({ loading: false }, () => {
          Toast.show(
            'Please Check your internet connection',
            Toast.SHORT,
            Toast.BOTTOM,
          );

          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Home' }),
            ],
          });
          this.props.navigation.dispatch(resetAction);

        });


      }
    });
  };

  render_FlatList_footer = () => {

    var footer_View = (

      <View style={{ height: 30 }}>


      </View>

    );

    return footer_View;

  };
  SearchFilterFunction(text) {
    this.setState({search:text})
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.name.toUpperCase()}   
      $ ${item.name.toUpperCase()}`;
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });   
    // console.log(newData);
    
    this.setState({ Datasource: newData, refresh: !this.state.refresh });  
  }
  headers= () => {
   const { navigation } = this.props;
    var footer_View = (

      <View
      style={{
        flexDirection: 'row',
        height: Platform.OS == 'ios' ? 60 : 60,
        width: width * 0.95,
        paddingTop: Platform.OS == 'ios' ? 0 : 0,
        backgroundColor: '#F6F6F6',
        justifyContent: 'space-between',alignSelf:'center'
      }}>
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: Colors.white,
          width: '100%',
          flex: 1,
          marginHorizontal: 5,
          marginVertical: 10,
          borderRadius: 5,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Icon
              name="search"
              size={20}
              color={Colors.primary}
              style={{
                height: 25,
                width: 35,
                paddingLeft: 10,
                alignSelf: 'center',
              }}
            />
          <TextInput 
          ref={input => { this.textInput = input }}
              style={{
                marginTop: 2,
                paddingVertical: Platform.OS == 'ios' ? 6 : 6,
                fontSize: 16,
                flex: 1,
                fontFamily: Fonts.medium,
                paddingHorizontal: 5
              }}
             
            returnKeyType="Search Scholarship"
            onChangeText={(text) => { this.SearchFilterFunction(text) }}
            placeholder="Search Scholarship" />

          {this.state.search.length < 1 ? null :
            <TouchableOpacity
              onPress={() => {

                this.textInput.clear()
                this.setState({
                  search: ''
                }, () => {
                  var text = ''
                  this.SearchFilterFunction(text)
                  // this.setState({refresh:!this.state.refresh})
                });

              }}
              style={{alignSelf: 'center', right: 2}}>
              <Icon
                name="times"
                size={20}
                color={Colors.medium_gray}
                style={{
                  marginTop: 2,
                  height: 25,
                  width: 35,
                }}
              />
            </TouchableOpacity>
  }
          </View>
          </View>
      </View>

    );

    return this.state.loading ? null : footer_View;

  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
        <StatusBar backgroundColor={Colors.reg} barStyle='light-content' />
        <Header
          backIcon={require('../../images/menu.png')}
          pageTitle="School Scholarship"
          back={() => {
            this.props.navigation.openDrawer();
          }}

        />
         <NavigationEvents   onWillFocus={payload => {
                  console.log("onwillfocus");
                  this.GetScholarship()
                 
                }}
                onWillBlur={payload => {
                    console.log("onwillblur");

                
                  
                }}
            />

        <Loader loading={this.state.loading} />

        <View style={{ flex: 1, backgroundColor: Colors.whites, paddingHorizontal: 0 }}>



         
            <View style={{ elevation: 30, flex: 1, backgroundColor: 'white' }}>
              <FlatList
              ListFooterComponent={this.render_FlatList_footer}
              ListHeaderComponent={this.headers}
              showsVerticalScrollIndicator={false}
                data={this.state.Datasource}
                renderItem={({ item }) => (
                  <View style={{
                    margin: 6,
                    
                    overflow: 'hidden',
                    backgroundColor: '#f1f1f1',
                    borderColor: Colors.primary,
                    borderWidth: 0.4,
                    borderRadius: 5,
                    height: 120,
                    shadowColor: '#f1f1f1',
                    shadowOffset: { height: 0, width: 0 },
                    shadowRadius: 2,
                    shadowOpacity: 0.8,
                    zIndex: 1,
                    flexDirection: 'column',
                   
                  }}>

                    <View style={{ flex: 1, marginTop: 0 }}>



                      <View style={{ flexDirection: 'row', }}>

                        <Image style={{ height: 120, width: 120 ,backgroundColor:Colors.light_gray}} source={{ uri: item.image_url }} />

                        <View style={{ height: 120, width: '60%', alignSelf: 'flex-start',marginLeft:6 }}>

                          <Text style={{ color: Colors.reg, fontFamily: Fonts.regular, fontSize: 15 }}>{item.name}</Text>
                          <View style={{flexDirection:'row',marginTop:5,alignItems:'center'}}>

<Text style={{ color: Colors.reg, fontFamily: Fonts.regular, fontSize: 16, marginTop: 0 }}>Last Date :</Text>
<Text style={{ color: Colors.dark_gray, fontFamily: Fonts.medium, fontSize: 14, marginTop:0  }}> {item.last_date}</Text>

</View>
                        </View>

                      </View>


                      <View
                        style={{ marginHorizontal: 10, paddingTop: 25 }}></View>
                    </View>

                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Scholarship',{Sid:item.sid})
                      }
                      style={styles.RightAbsoluteButton}>
                      <View style={styles.absoluteView}>
                        <Image
                          style={{
                            tintColor: Colors.primary,
                            alignSelf: 'center',
                            height: 28,
                            width: 28,
                            marginTop: 8,
                            right: 16
                          }}
                          source={require('../../images/arrow-right.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                )}
                keyExtractor={(item, index) => index.toString()}
              />


            </View>


         



        </View>
      </SafeAreaView>
    )
  };
}
const styles = StyleSheet.create({

  Viewstyle: {
    flex: 1,

    paddingLeft: 10,
    alignItems: 'center',
    margin: 2,
    justifyContent: 'center',
  },
  rowViewContainer: {
    fontSize: 15,
    flex: 1,
    alignSelf: 'center',
    paddingLeft: 10,
    fontFamily: Fonts.medium,
    color: Colors.dark_gray,
  },
  rowViewLabel: {
    fontSize: 15,
    width: width * 0.4,
    paddingLeft: 5,
    fontFamily: Fonts.medium,
    color: Colors.primary,
  },
  rowDot: {
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: Fonts.medium,
    color: Colors.primary,
  },

  absoluteView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 30,
    backgroundColor: 'transparent',
  },
  RightAbsolute: {
    overflow: 'hidden',
    width: 120,
    height: 50,
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    right: -80,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 60,
    backgroundColor: 'rgba(196, 30, 40,0.9)',
  },

  RightAbsoluteButton: {
    overflow: 'hidden',
    width: 130,
    height: 50,
    position: 'absolute',
    bottom: -3,
    alignSelf: 'center',
    right: -80,
    borderTopLeftRadius: 120,
    borderBottomRightRadius: 120,
    // backgroundColor:Colors.cool_gray
    backgroundColor: '#DCDCDC',
    // backgroundColor:'#A9A9A9',
  },

});
