import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Platform,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
  TextInput,
  Alert,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  AppState,
  ImageBackground
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from "react-navigation";
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import timeout from '../common/Timeout';
import API from '../common/API';
import Loader from '../common/Loader';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import Colors from '../common/Colors';
import Fonts from '../common/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import FCM, { NotificationActionType } from "react-native-fcm";

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      username: '',
      password: '',
      inputBorderColor: Colors.medium_gray,
      inputBorderColor2: Colors.medium_gray,
      Visible:'Email',
      token:''
    };

    this.onSubmitUsername = this.onSubmitUsername.bind(this);

    this.usernameRef = this.updateRef.bind(this, 'username');
    this.passwordRef = this.updateRef.bind(this, 'password');
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  onSubmitUsername() {
    console.log(this.password);
  }


  Login = () => {

    
    if(!this.state.username){
      Toast.show(
        "Please Enter Username",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if(!this.state.password){
      Toast.show(
        "Please Enter Password",
        Toast.SHORT,
        Toast.BOTTOM
      );
  } else {
     this.setState({ loading: true });
   
      FCM.getFCMToken().then(token => {
    // &email=nisarg@gmail.com&password=123
    var Request = {
      
      email: this.state.username,
      password: this.state.password,
      token:token,
      "action":"login"
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
                console.log('Login RESPONCE:::  ', res.response);
                if (res.response.code == '200') {
                  
                  AsyncStorage.setItem('UserId',JSON.stringify(res.response.user.student_id))
                  AsyncStorage.setItem('Name',JSON.stringify(res.response.user.firstname))
                  AsyncStorage.setItem('lName',JSON.stringify(res.response.user.lastname))
                  AsyncStorage.setItem('email',JSON.stringify(res.response.user.email))
                  AsyncStorage.setItem('phone',JSON.stringify(res.response.user.phone))
                  AsyncStorage.setItem('Presult',JSON.stringify('0'))
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

  Design = () =>{
    return(
      <View style={{marginTop:20}}>
        <View style={{height:20}}></View>
        {/* <Text style={{ textAlign: 'center', fontFamily: Fonts.medium, fontSize: 20, color: Colors.primary, margin: 20 }}>OR</Text>


        <View style={{ flexDirection: 'row', width: '36%', alignSelf: 'center', justifyContent: 'space-between', height: 50 }}>

          <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'black' }}>
            <Image source={require('../images/fb.png')} style={{ height: '100%', width: '100%' }} />
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'black' }}>
            <Image source={require('../images/google.png')} style={{ height: '100%', width: '100%' }} />
          </TouchableOpacity>

        </View> */}

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontFamily: Fonts.thin }}>Not a member yet? </Text>
         
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Registration')}}>
          <Text style={{ fontSize: 18, fontFamily: Fonts.regular, textDecorationLine: 'underline',marginLeft:4 }}>Register now</Text>
          </TouchableOpacity>
        
        </View>

      </View>
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
   <StatusBar backgroundColor={Colors.reg} barStyle='light-content' />
<Loader loading={this.state.loading}/>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : null}
          style={{ flex: 1, backgroundColor: Colors.white, }}>
          <View
            style={{
              flex: 1,
              zIndex: 999,
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
            
            <View style={{width:'100%',elevation:0.2,backgroundColor:'white',height:40,flexDirection:'row',alignItems:'center'}}>
               <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Splash')}} style={{marginLeft:10,width:40,height:'100%',justifyContent:'center',alignItems:'center'}}> 
                <Icon name="angle-left" size={40} style={{ color:Colors.primary}}/>
               </TouchableOpacity>
               <Text style={{fontFamily:Fonts.regular,fontSize:18,marginLeft:10}}>Back</Text>
               </View>
              <View
                style={{
                  width: width,
                  alignItems: 'center',paddingHorizontal:20,marginTop:10
                  
                }}>
                    <View style={{ height: 20 }} />
                <Image
                  source={{uri:'https://pngimage.net/wp-content/uploads/2018/06/scholarship-icon-png-1.png'}}
                  style={{
                    height:50,
                    width:100,
                    alignSelf:'flex-start',
                    resizeMode:'cover',marginLeft:20,
                    tintColor: Colors.yellow,
                  }}
                />
                
                <Text style={{fontSize:28,color:Colors.primary,fontFamily:Fonts.bold}}>E-Scholar</Text>
              </View>
              <View style={{ height: 20 }} />
            

              <View
                style={{
                  alignItems: 'center',
                  height:30,
                  flexDirection: 'row',
                  width: '90%',
                  justifyContent: 'space-around',
                  padding: 5, alignSelf: 'center'
                }}>

                {/* <TouchableOpacity onPress={()=>{this.setState({Visible:'Email'})}} style={{backgroundColor:'white',elevation:0.2,height:'100%',width:'49%',justifyContent:'center',alignItems:'center'}}>
                  <Text style={styles.TextStyle}>
                    Email{' '}
                  </Text>
                </TouchableOpacity>

                <View style={{width:2,height:'100%'}}></View>

                <TouchableOpacity onPress={()=>{this.setState({Visible:'Phone'})}} style={{backgroundColor:'white',elevation:0.2,height:'100%',width:'49%',justifyContent:'center',alignItems:'center'}}>
                  <Text style={styles.TextStyle}>
                    Phone{' '}
                  </Text>
                </TouchableOpacity> */}


              </View>
             
               {this.state.Visible == 'Email' ?
              <View
                style={{ flex: 1, width: width, paddingHorizontal: width * 0.1 }}>

                <Text style={styles.label}>Username</Text>
                <TextInput
                  placeholder="Enter Username"
                  selectionColor={Colors.primary}
                  style={[styles.textInput, {
                    textAlignVertical: this.props.multiline ? "top" : "center",
                    borderColor: this.state.inputBorderColor,
                  
                  }]}
                  autoCapitalize='none'

                  onFocus={() => this.setState({ inputBorderColor: Colors.primary })}
                  onBlur={() =>
                    this.setState({ inputBorderColor: Colors.medium_gray })
                  }
                  onChangeText={username => this.setState({ username })}
                  returnKeyType={"next"}
                  onSubmitEditing={(event) => {
                    this.refs.Password.focus();
                  }}

                />

                <Text style={styles.label}>Password</Text>
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

                  ref='Password'
                  placeholder="Enter Password"
                  returnKeyType={"next"}
                  secureTextEntry={true}
                  onSubmitEditing={() => {
                    this.Login();
                  }}
                  onChangeText={password => this.setState({ password })}

                />
                 <TouchableOpacity
                  onPress={() => this.Login()}
                  activeOpacity={0.8}
                  style={{width:'100%',borderRadius: 8,elevation: 3,backgroundColor:Colors.primary, marginTop: 20,height: 42 }}>
                    <ImageBackground style={{borderRadius: 8,justifyContent: 'center', alignItems: 'center',height:'100%'}} source={require('../images/bg.png')}>
                       <Text style={{ fontFamily: Fonts.bold, fontSize: 18, color: Colors.white }}>Login</Text>
                   </ImageBackground>
                </TouchableOpacity>

                {this.Design()}
            
              </View>
               :
               <View style={{ flex: 1, width: width, paddingHorizontal: width * 0.1 }}>

               <Text style={styles.label}>Phone</Text>

               <TextInput
                 placeholder="Enter Phone No."
                 selectionColor={Colors.primary}
                 style={[styles.textInput, {
                   textAlignVertical: this.props.multiline ? "top" : "center",
                   borderColor: this.state.inputBorderColor,
                   minHeight: this.props.multiline ? 100 : null,
                 }]}
                 autoCapitalize='none'
                 keyboardType={"phone-pad"}
                 onFocus={() => this.setState({ inputBorderColor: Colors.primary })}
                 onBlur={() =>
                   this.setState({ inputBorderColor: Colors.medium_gray })
                 }
                 onChangeText={username => this.setState({ username })}
                 returnKeyType={"next"}
                 onSubmitEditing={(event) => {
                   this.refs.Password.focus();
                 }}

               />

                  <TouchableOpacity
                    // onPress={() => this.Login()}
                    onPress={()=>{const resetAction = StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({ routeName: 'Home' }),
                      ],
                    });
                    this.props.navigation.dispatch(resetAction);}}
                    activeOpacity={0.8}
                    style={{ width: '100%', borderRadius: 8, elevation: 3, backgroundColor: Colors.primary, marginTop: 20, height: 50 }}>
                    <ImageBackground style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', height: '100%' }} source={require('../images/bg.png')}>
                      <Text style={{ fontFamily: Fonts.bold, fontSize: 18, color: Colors.white }}>GET OTP</Text>
                    </ImageBackground>

                </TouchableOpacity>

                {this.Design()}

               </View>}
            </ScrollView>
          </View>


        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
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

  },
  label: {

    marginTop: 15,
    color: Colors.primary,
    fontSize: 14,
    paddingVertical: 3,
    fontFamily: Fonts.medium,
  },
  required: {
    marginTop: 15,
    color: 'red',
    fontSize: 14,
    paddingLeft: 3,
    paddingVertical: 3,
    fontFamily: Fonts.medium,
  },
  TextStyle: {
    fontSize: 18,
    color: Colors.primary,
    fontFamily: Fonts.black,
  }
});



