import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView,TextInput, SafeAreaView, StatusBar, Dimensions, FlatList,Animated } from 'react-native';
import Header from '../component/Header';
import Carousel from 'react-native-banner-carousel';
import Colors from '../common/Colors';
import Fonts from '../common/Fonts';
import Loader from '../common/Loader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from "react-navigation";
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import timeout from '../common/Timeout';
import moment from 'moment';
import API from '../common/API';
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType, NotificationActionType, NotificationActionOption, NotificationCategoryOption } from "react-native-fcm";
import Icon from 'react-native-vector-icons/FontAwesome';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const images = [
  "https://trivediservices.com/scholar/slider/b1.jpg",
  "https://trivediservices.com/scholar/slider/b2.jpg",
  "https://trivediservices.com/scholar/slider/b3.jpg"
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    
  }
  state = {
   search:'', loading: true, ScholarshipVisible: false, name: '', imageIsFetched: false,
  }



  componentDidMount() {
   

    this.GetScholarship()

    AsyncStorage.getItem('Name').then(fname => {

       this.setState({ name: JSON.parse(fname) })

    })
    FCM.on(FCMEvent.Notification, notif => {
      if (notif.fcm && notif.fcm.body) {

        console.log(" success register fcm >> notificationListener: ", notif)
        // if (notif.local_notification) return;
        FCM.presentLocalNotification({
          body: notif.fcm.body,
          priority: "high",
          title: notif.fcm.title,
          sound: "default",
          show_in_foreground: true,
          local_notification: true,
          auto_cancel: true,
          lights: true,
          "large_icon": "ic_launcher",// Android only
          icon: "ic_launcher",
          "show_in_foreground": true,
          vibrate: 300,
          "lights": true, // Android only, LED blinking (default false)
          status: "400"
        });

      }
    })
  }

  GetScholarship = () => {


    var Request = {
      "action": "getScholarship"
    };
  
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

                this.setState({ Datasource: res.response.scholarship })
                this.setState({ loading: false });
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

            this.GetScholarship()
          });

        });
      } else {
        this.setState({ loading: false }, () => {
          Toast.show(
            'Please Check your internet connection',
            Toast.SHORT,
            Toast.BOTTOM,
          );

          this.GetScholarship()
        });


      }
    });
  };
  renderPage(image, index) {
    return (
      <View key={index}>
         
        <Image style={{ width: BannerWidth, height: BannerHeight,backgroundColor:Colors.light_gray }} source={{ uri: image }} />
      
      </View>
    );
  }
  render_FlatList_footer = () => {

    var footer_View = (

      <View style={{ height: 30 }}>


      </View>

    );

    return footer_View;

  };
  headers = () => {

    var footer_View = (

      <View style={{ height: 20 }}>


      </View>

    );

    return footer_View;

  };

  render() {
 
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
        <StatusBar backgroundColor={Colors.reg} barStyle='light-content' />
        <Header
          backIcon={require('../images/menu.png')}
          pageTitle={this.state.name ? "Welcome" + " " + this.state.name : "Home"}
          back={() => {
            this.props.navigation.openDrawer();
          }}

        />

        <Loader loading={this.state.loading} />
      
       
        <View style={{ flex: 1, backgroundColor: Colors.whites }}>


          <ScrollView showsVerticalScrollIndicator={false}>


      <View
      style={{
        flexDirection: 'row',
        height: Platform.OS == 'ios' ? 60 : 60,
        width: '100%',
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
          marginHorizontal: 10,
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
                paddingVertical: Platform.OS == 'ios' ? 5 : 5,
                fontSize: 16,
                flex: 1,
                fontFamily: Fonts.medium,
                paddingHorizontal: 0
              }}
              onSubmitEditing={()=>{
                this.props.navigation.navigate('School',{isparams:this.state.search,name:'search'})
                this.setState({search:''})
                this.textInput.clear()
              }}
            returnKeyType="Search Scholarship"
            onChangeText={search =>  this.setState({search}) }
            placeholder="Search Scholarship" />


          </View>
          </View>
      </View>

    

 

            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={BannerWidth}
            >
              {images.map((image, index) => this.renderPage(image, index))}
            </Carousel>

            <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 20 }}>


              <View style={{ flex: 1 }}>




                <TouchableOpacity onPress={() => {
                  this.setState({ ScholarshipVisible: !this.state.ScholarshipVisible })
                }} style={{
                  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, width: '100%',
                  overflow: 'hidden', height: 40,
                  backgroundColor: '#f1f1f1',

                }}>





                  <Text style={styles.Title}>Scholarship categories</Text>

                </TouchableOpacity>


                <View style={{
                  flexDirection: 'row', width: '100%', justifyContent: 'space-around', paddingVertical: 16, paddingHorizontal: 10,
                  overflow: 'hidden',
                  backgroundColor: '#f1f1f1',
                  shadowColor: '#f1f1f1',
                  shadowOffset: { height: 0, width: 0 },
                  shadowRadius: 2,
                  shadowOpacity: 0.8,
                  zIndex: 1,


                }}>

                  <TouchableOpacity style={styles.View}
                    onPress={() => { this.props.navigation.navigate('School',{name:'notSearch'}) }}>

                    <Image style={styles.CategoriesImage1} source={require('../images/1.png')} />

                    <Text style={styles.CategoriesText}>School</Text>



                  </TouchableOpacity>

                  <TouchableOpacity style={styles.View}
                    onPress={() => { this.props.navigation.navigate('College') }}>

                    <Image style={styles.CategoriesImage} source={require('../images/2.png')} />
                    <Text style={styles.CategoriesText}>College</Text>



                  </TouchableOpacity>






                </View>

              </View>

              {this.state.loading ? null :
                <View style={{ flex: 1 }}>
                  <FlatList
                    ListFooterComponent={this.render_FlatList_footer}
                    ListHeaderComponent={this.headers}
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

                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation.navigate('Scholarship', { Sid: item.sid })
                            }>
                            <View style={{ flexDirection: 'row', }}>
                      
                                <Image
                                  onLoad={() => { this.setState({ imageIsFetched: true }); }}
                                  style={{ height: 120, width: 120,backgroundColor:Colors.light_gray }}
                                  source={{ uri: item.image_url}} />
                            
                             
                              <View style={{ height: 120, width: '60%', alignSelf: 'flex-start', marginLeft: 6 }}>

                                <Text style={{ color: Colors.reg, fontFamily: Fonts.regular, fontSize: 15 }}>{item.name}</Text>
                                <View style={{flexDirection:'row',marginTop:5,alignItems:'center'}}>

<Text style={{ color: Colors.reg, fontFamily: Fonts.regular, fontSize: 16, marginTop: 0 }}>Last Date :</Text>
<Text style={{ color: Colors.dark_gray, fontFamily: Fonts.medium, fontSize: 14, marginTop:0  }}> {item.last_date}</Text>

</View>
                              </View>

                            </View>



                          </TouchableOpacity>

                          <View
                            style={{ marginHorizontal: 10, paddingTop: 25 }}></View>
                        </View>


                      </View>

                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />


                </View>
              }



            </View>
          </ScrollView>



        </View>
      </SafeAreaView>
    )
  };
}
const styles = StyleSheet.create({
  Box: {
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    margin: 10,
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    alignSelf: 'center',
    elevation: 22, backgroundColor: 'white',
    height: 200,
    width: 330
  },
  Title: { fontSize: 18, fontFamily: Fonts.regular, color: Colors.reg },
  CategoriesImage1: { height: 50, width: 50, borderRadius: 0, resizeMode: 'cover', alignSelf: 'center' },
  CategoriesImage: { height: 50, width: 50, borderRadius: 0, resizeMode: 'cover', alignSelf: 'center' },
  CategoriesText: { fontFamily: Fonts.medium, color: Colors.primary, marginLeft: 10, marginRight: 8, fontSize: 16 },
  View: {
    borderLeftWidth: 5,
    borderLeftColor: Colors.reg,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5, flexDirection: 'row', elevation: 2, backgroundColor: Colors.white, paddingHorizontal: 5, paddingVertical: 5, margin: 6, alignItems: 'center'
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
  absoluteView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 30,
    backgroundColor: 'transparent',
  },
  RightAbsoluteButton: {
    overflow: 'hidden',
    width: 130,
    height: 50,
    position: 'absolute',
    bottom: -3,
    // alignSelf: '',
    right: -80,
    borderTopLeftRadius: 120,
    borderBottomRightRadius: 120,
    // backgroundColor:Colors.cool_gray
    backgroundColor: '#DCDCDC',
    // backgroundColor:'#A9A9A9',
  },


  absoluteView2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 30,
    backgroundColor: 'transparent',
  },


  RightAbsoluteButton2: {
    overflow: 'hidden',
    width: 130,
    height: 50,
    position: 'absolute',
    bottom: -3,
    alignSelf: 'center',
    right: 0,
    borderTopLeftRadius: 120,
    borderBottomRightRadius: 120,
    // backgroundColor:Colors.cool_gray
    backgroundColor: '#DCDCDC',
    // backgroundColor:'#A9A9A9',
  },

})







