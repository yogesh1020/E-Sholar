import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,SafeAreaView, StatusBar,FlatList,TouchableOpacity,Image} from 'react-native';
import Header from '../../component/Header';

import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import Loader from '../../common/Loader';


import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from "react-navigation";
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import timeout from '../../common/Timeout';
import moment from 'moment';
import API from '../../common/API';
export default class ApplicationStutas extends Component {
  state={
    loading:true,Datasource:[],message:''
  }
componentDidMount(){
  this.GetScholarship()
}

  GetScholarship = () => {
    AsyncStorage.getItem('UserId').then(id => {

    var Request = {
      "action": "getScholarshipStatus","studentid":JSON.parse(id) 
      
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

                this.setState({ Datasource: res.response.scholarshipstatus })
                this.setState({ loading: false });
              } else {
                this.setState({ loading: false,message:res.response.message },()=>{
                  setTimeout(() => {
                    Toast.show(res.response.message, Toast.SHORT, Toast.BOTTOM);
                  }, 50);
                });
         
              
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

          this.GetScholarship()
        });


      }
    });
  });
  };
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
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
            <StatusBar backgroundColor={Colors.reg} barStyle='light-content' />
            <Header
              backIcon={require('../../images/menu.png')}  
              back={() => {
                this.props.navigation.openDrawer();
              }}
              pageTitle="Application Stutus"

         
        />

        <Loader loading={this.state.loading}/>
       
        {this.state.loading ? null :
<View style={{flex: 1 }}>
        {this.state.Datasource.length <1? 
         <View style={{}}>
         <View style={{height:'50%'}}></View>
<Text style={{fontSize:18,fontFamily:Fonts.medium,margin:50}}>{this.state.message}</Text>
         
       </View>:
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
                    height: 172,
                    shadowColor: '#f1f1f1',
                    shadowOffset: { height: 0, width: 0 },
                    shadowRadius: 2,
                    shadowOpacity: 0.8,
                    zIndex: 1,
                    flexDirection: 'column',
                    // borderLeftWidth: 5,
                    // borderLeftColor: Colors.white,
                    // borderTopLeftRadius: 5,
                    // borderBottomLeftRadius: 5
                  }}>

                    <View style={{ flex: 1, marginTop: 0 }}>

<View style={{ flexDirection: 'row', }}>

<Image style={{ height: 100, width: 120,backgroundColor:Colors.light_gray }} source={{ uri: item.image_url }} />

<View style={{ height: 100, width: '60%', alignSelf: 'flex-start',marginLeft:10,marginTop:0}}>

<View style={{flexDirection:'row',margin:4,alignItems:'center'}}>

<Text style={{ color: Colors.reg, fontFamily: Fonts.regular, fontSize: 16, marginTop: 0 }}>Application Status :</Text>
<Text style={{ color:item.status =="pending"?  Colors.red :Colors.green, fontFamily: Fonts.medium, fontSize: 14, marginTop:0  }}> {item.status}</Text>

</View>

<View style={{flexDirection:'row',margin:4,alignItems:'center'}}>

  <Text style={{ color: Colors.reg, fontFamily: Fonts.regular, fontSize: 16, marginTop: 0 }}>Last Date :</Text>
  <Text style={{ color: Colors.dark_gray, fontFamily: Fonts.medium, fontSize: 14, marginTop:0  }}> {item.last_date}</Text>

  </View>

  <View style={{flexDirection:'row',margin:4,alignItems:'center'}}>

  <Text style={{ color: Colors.reg, fontFamily: Fonts.regular, fontSize: 16, marginTop: 0 }}>Apply Date :</Text>
  <Text style={{ color: Colors.dark_gray, fontFamily: Fonts.medium, fontSize: 14, marginTop:0  }}> {item.apply_date}</Text>

  </View>

</View>


{/*  */}
  


</View>


<Text style={{ color: Colors.reg, fontFamily: Fonts.regular, fontSize: 16,marginLeft:5,marginTop:5}}>{item.name}</Text>






                  <View
                        style={{ marginHorizontal: 10, paddingTop: 25 }}></View>
                    </View>

                  
                  </View>

                )}
                keyExtractor={(item, index) => index.toString()}
              />
            }

            </View>
  }

      </SafeAreaView>
    )
  };
}
