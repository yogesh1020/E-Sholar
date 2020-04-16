
import React, { Component } from 'react';
import { View, Text, FlatList,ScrollView,SafeAreaView, StatusBar,TouchableOpacity,Image } from 'react-native';
import Header from '../../component/Header';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts' 
import Icon from 'react-native-vector-icons/FontAwesome';
import HTML from 'react-native-render-html';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from "react-navigation";
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import Loader from '../../common/Loader';
import timeout from '../../common/Timeout';
import moment from 'moment';
import API from '../../common/API';

export default class Scholarship extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:true,
      datasource:{},
      image:''
    }
    this.GetScholarship()
  }

  GetScholarship = () => {
  
    var Request = {

      "action":"getScholarshipbyid",
      "scholarshipid":this.props.navigation.state.params.Sid
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

                console.log("d",res.response.scholarship[0]);
                this.setState({datasource:res.response.scholarship[0],loading: false,image:res.response.scholarship[0].image_url })  
              
            
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

  Apply=()=>{
     this.setState({loading:true})
     AsyncStorage.getItem('UserId').then(id => {

      var Request = {
        "action":"applyscholarship",
        "student_id":JSON.parse(id),
        "scholarship_id":this.props.navigation.state.params.Sid
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
                console.log('Apply RESPONCE:::  ', res.response);
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

render_FlatList_footer = () => {
 
    var footer_View = (
 
    <View style={{height:30}}>
 
  
    </View>
 
    );
 
    return footer_View;
 
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
            <StatusBar backgroundColor={Colors.reg} barStyle='light-content' />
            <Header
            //  0 backIcon={require('../../images/menu.png')}  
              pageTitle="Scholarship"
              back={() => {
                this.props.navigation.goBack()
              }}
         
        />

        <Loader loading={this.state.loading}/>
       
         <View style={{ flex: 1, backgroundColor:Colors.whites,paddingHorizontal:0 }}>

           <ScrollView>

           <Image style={{ height: 150, width: '100%',backgroundColor:Colors.light_gray }} source={{ uri:this.state.image ? this.state.image : 'https://i.ya-webdesign.com/images/css-background-image-png-5.png'}} />
            <Text style={{fontFamily:Fonts.medium,fontSize:18,margin:10,color:Colors.reg}}>{this.state.datasource.name}</Text>
            <Text style={{marginLeft:10, elevation:10,fontSize:16,fontFamily:Fonts.bold,color:Colors.primary}}>{this.state.datasource.last_date}</Text>
            
             <View style={{margin:10}}>
             <HTML 
                      html={this.state.datasource.income_details}
                      baseFontStyle={{ fontSize:16 ,color:Colors.primary,fontFamily:Fonts.thin}}
                      style={{ fontFamily: Fonts.regular, }}>
                    </HTML>
             </View>
           


           </ScrollView>

          {this.state.loading? null:
           <TouchableOpacity
              style={{position:'absolute',bottom:0,height:50,width:'100%',backgroundColor:Colors.reg,justifyContent:'center',alignItems:'center'}}
               onPress={() => this.Apply()}>
              <Text style={{fontSize:18,fontFamily:Fonts.regular,color:'white'}}>
             Apply
              </Text>
            </TouchableOpacity>}

 
        </View>
      </SafeAreaView>
    )
  };
}



