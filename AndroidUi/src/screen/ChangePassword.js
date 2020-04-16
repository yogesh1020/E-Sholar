

import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,SafeAreaView, StatusBar ,TextInput,TouchableOpacity} from 'react-native';
import Header from '../component/Header';

import Colors from '../common/Colors';
import Fonts from '../common/Fonts';
import Loader from '../common/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from "react-navigation";
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import timeout from '../common/Timeout';
import API from '../common/API';


export default class ChangePassword extends Component {
  state={
    inputBorderColor1: Colors.medium_gray,
    inputBorderColor2: Colors.medium_gray,
    password:'',
    repassword:'',
    loading:false
   }
  

   ChangePassword = () => {

    
    if(!this.state.password){
      Toast.show(
        "Please Enter Password",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if(!this.state.repassword){
      Toast.show(
        "Please Enter Confirm Password",
        Toast.SHORT,
        Toast.BOTTOM
      );
  } else if(this.state.repassword != this.state.password){
    Toast.show(
      "Password Not same",
      Toast.SHORT,
      Toast.BOTTOM
    );
} else {
     this.setState({ loading: true });
     AsyncStorage.getItem('UserId').then(id => {
    var Request = {
      
    "action":"changepassword",
    "studentid":JSON.parse(id),
    "password":this.state.password 
    };
     console.log( API.login);  
     console.log(JSON.stringify(Request));
     
      // console.log( API.login+'&email='+this.state.username+'&'+'password='+this.state.password);
      
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          timeout(
            15000,
            fetch('http://trivediservices.com/scholar/api.php', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(Request),
            })
              .then(res => res.json())
              .then(res => {
                console.log('Login RESPONCE:::  ', res.response);
                if (res.response.code == '200') {
                  
                 
                  const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home'}),  
                      // NavigationActions.navigate({ routeName: 'Home' , params: { name: res.response.user.firstname } }),  
                    ],
                  });
                  this.props.navigation.dispatch(resetAction);
                  this.setState({ loading: false });
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
            this.setState({ loading: false });
            Toast.show(
              'Please Check your internet connection',
              Toast.SHORT,
              Toast.BOTTOM,
            );
          });
        } else {
          this.setState({ loading: false });
          Toast.show(
            'Please Check your internet connection',
            Toast.SHORT,
            Toast.BOTTOM,
          );
        }
      });
    });
  }


};

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
            <StatusBar backgroundColor={Colors.reg} barStyle='light-content' />
            <Header
              backIcon={require('../images/menu.png')}  
              pageTitle="Change Password"
              back={() => {
                this.props.navigation.openDrawer();
              }}
         
        />
<Loader loading={this.state.loading}/>

<ScrollView  style={{ flex:1,paddingHorizontal:20,paddingVertical:10}}>
   
 
 
   <Text style={styles.label}>Password</Text>
   <TextInput
     selectionColor={Colors.primary}
     style={[styles.textInput, {
       textAlignVertical: this.props.multiline ? "top" : "center",
       borderColor: this.state.inputBorderColor1,
     
     }]}
     onFocus={() => this.setState({ inputBorderColor1: Colors.primary })}
     onBlur={() =>
       this.setState({ inputBorderColor1: Colors.medium_gray })
     }
     autoCapitalize='none'

     ref='password'
     placeholder="Enter Password"
     returnKeyType={"next"}
     secureTextEntry={true}
     onChangeText={password => this.setState({ password })}
     onSubmitEditing={(event) => {
       this.refs.repassword.focus();
     }}
   />

<Text style={styles.label}>Confirm Password</Text>
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

     ref='repassword'
     placeholder="Enter Confirm Password"
     returnKeyType={"next"}
     secureTextEntry={true}
     onChangeText={repassword => this.setState({ repassword })}
     onSubmitEditing={(event) => {
       this.ChangePassword()
     }}
   />


<TouchableOpacity
style={styles.BottomButton}
onPress={() => {  this.ChangePassword()}}>
<Text style={styles.BottomText}>
Update
</Text>
</TouchableOpacity>

</ScrollView>

</SafeAreaView>   
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

},BottomText:{ color:Colors.white,fontFamily:Fonts.regular,fontSize:18},
BottomButton:{ backgroundColor: Colors.reg, height: 40, width: '100%',marginTop:20,justifyContent:'center',alignItems:'center' },

});      
      
   