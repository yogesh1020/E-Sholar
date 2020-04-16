import React, { Component } from 'react';
import { View, Text, Share, FlatList, TouchableOpacity, Image, Dimensions, Alert, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../common/Colors';
import Fonts from '../common/Fonts'
import Toast from 'react-native-simple-toast';
import { ScrollView } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from "react-navigation";
import ImagePicker from 'react-native-image-picker';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Datasource = [

  {
    icon: 'home',
    title: 'Dashboard',
    navigate: 'Home'
  },
  {
    icon: 'question-circle',
    title: 'Application Status',
    navigate: 'ApplicationStutus'
  },
  {
    icon: 'graduation-cap',
    title: 'Scholarships',
    navigate: 'Scholarship',
    key: 'maltiple'
  },
  {
    icon: 'trophy',
    title: 'Awardees',
    navigate: 'Awardees'

  },
  {
    icon: 'edit',
    title: 'Feedback',
    navigate: 'Feedback'

  },
  {
    icon: 'key',
    title: 'Change password',
    navigate: 'ChangePassword'

  },
  {
    icon: 'sign-out',
    title: 'Logout',
    navigate: 'Login'
  },
];

export default class Mydr extends Component {

  state = {
    user: '',
    userid: '',
    avatarSource: null, visible: false,Profile:0
  }

componentDidMount(){
  AsyncStorage.getItem('Name').then(fname=>{
    AsyncStorage.getItem('lName').then(lname=>{
      AsyncStorage.getItem('Profile').then(Profile=>{
        console.log(Profile);
        
    this.setState({user:JSON.parse(fname)+" "+JSON.parse(lname),avatarSource: JSON.parse(Profile) })
  })
}) })
}

componentDidUpdate(){
  AsyncStorage.getItem('Presult').then(Result=>{
  
    
    this.setState({Profile:JSON.parse(Result)})
 
})
}

  Sidebar = (item) => {
    console.log(item);
    if (item.title == "Logout") {
      AsyncStorage.removeItem('UserId')
      // AsyncStorage.removeItem('Presult')
      AsyncStorage.removeItem('Name')
      AsyncStorage.removeItem('lName')
      AsyncStorage.removeItem('email')
      AsyncStorage.removeItem('phone')
      AsyncStorage.removeItem('Profile')
      

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Login' })],
      });
      this.props.navigation.dispatch(resetAction);

    } else {
      this.props.navigation.navigate(item.navigate ? item.navigate : '')
      this.props.navigation.closeDrawer()
    }
  }
  onShare = async (title) => {
    try {
      const result = await Share.share({
        message:

          'https://play.google.com/store/apps/'
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };


  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {

      console.log('options,,image', options);
      console.log(',response,image', options, response);


      if (response.didCancel) {
        Toast.show(
          "You cancelled photo picker",
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } else if (response.error) {
        Toast.show(
          "" + response.error,
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } else if (response.customButton) {
        Toast.show(
          "" + response.customButton,
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } else {
        let source = { uri: response.uri };
        AsyncStorage.setItem('Profile',JSON.stringify(source))
        this.setState({
          avatarSource:source,
        });
        console.log(source);
        
      }
    });
  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ backgroundColor: colors.primary, height: 180 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={{ marginLeft: 0, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="angle-left" size={40} style={{ color: colors.white }} />
              </TouchableOpacity>

              <Text style={{ fontFamily: Fonts.regular, fontSize: 18, marginLeft: 0, color: colors.white }}>Back</Text>
            </View>


            <View style={{ paddingVertical: 10, marginTop: 16, width: '76%', alignSelf: 'flex-start', flexDirection: 'row', justifyContent: 'space-between' }}>

              <View style={{ paddingHorizontal: 10 }}>

                <View style={{ height: 62, width: 65, elevation: 100 }}>
                  <Image style={{ height: '100%', width: '100%', borderRadius: 30, 
                  resizeMode: this.state.avatarSource ? 'center' : 'cover' }}
                   source={this.state.avatarSource ? this.state.avatarSource :require('../images/userp.png')} />
                   {/* source={this.state.Source ?{uri:this.state.Source} :require('../images/userp.png')} /> */}
                </View>

                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}
                  style={{ height: 28, width: 28, justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 1, position: 'absolute', left: 52, bottom: 25, borderRadius: 14, elevation: 120 }}>
                  <Image style={{ height: 20, width: 20, tintColor: 'white' }} source={ require('../images/add_image.png')} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'column' }}>
    <Text style={{ fontFamily: Fonts.medium, fontSize: 18, color: 'white', margin: 2 }}>{this.state.user}</Text>

                <View style={{ flexDirection: 'column', margin: 2 }}>
                  <Text style={{ fontFamily: Fonts.thin, fontSize: 14, color: 'white' }}>N/A</Text>
                  <View style={{ margin: 1, marginTop: 6, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 8, width: 100, backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ height: '80%', width:''+this.state.Profile+'%', marginLeft: 0.1, backgroundColor: colors.yellow, alignSelf: 'flex-start', borderRadius: 2 }}></View>
                    </View>
    <Text style={{ fontFamily: Fonts.thin, fontSize: 14, color: 'white', paddingLeft: 6 }}>{this.state.Profile}%</Text>
                  </View>
                </View>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }} style={{ margin: 2 }}>
                  <Text style={{ fontFamily: Fonts.thin, fontSize: 14, color: 'white', margin: 0 }}>View Your Profile ></Text>
                </TouchableOpacity>
              </View>

            </View>


            {/* https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRel36IOrO5i6pk2t_cWRim8SsxbAAOKsYQ8-jJhECZZMYqvy4N */}


          </View>
         

          <FlatList
            style={{ marginTop: 10 }}
            data={Datasource}
            renderItem={({ item }) =>
              <View style={{ padding: 10 }}>

                {item.key == 'maltiple' ?

                  <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }} onPress={() => { this.setState({ visible: !this.state.visible }) }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Icon style={{ flex: 1 }} name={item.icon} size={25} color={colors.primary} />
                      <Text style={{ flex: 4, color: colors.primary, fontFamily: 'Roboto-Bold', fontSize: 15 }}>{item.title}</Text>
                      <Image source={this.state.visible ? require('../images/minus.png') : require('../images/plus.png')} style={{ height: 22, width: 22, tintColor: colors.dark_gray }} />
                    </View>


                    {this.state.visible ?

                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate('School',{name:'notSearch'})
                          this.props.navigation.closeDrawer()
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 18 }}>

                        <Icon style={{ flex: 1 }} name="bus" size={25} color={colors.primary} />
                        <Text style={{ flex: 4, color: colors.dark_gray, fontFamily: Fonts.regular, fontSize: 15 }}>School</Text>
                      </TouchableOpacity>
                      : null}
                    {this.state.visible ?

                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate('College')
                          this.props.navigation.closeDrawer()
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>

                        <Icon style={{ flex: 1 }} name="university" size={25} color={colors.primary} />
                        <Text style={{ flex: 4, color: colors.dark_gray, fontFamily: Fonts.regular, fontSize: 15 }}>College</Text>
                      </TouchableOpacity>
                      : null}

                  </TouchableOpacity>


                  :
                  <TouchableOpacity 
                  onPress={() => {
                    this.Sidebar(item)
                  }}
                  style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {item.navigate ?
                      <Icon style={{ flex: 1 }} name={item.icon} size={25} color={colors.primary} />
                      : null}
                    <Text style={{ flex: 4, color: colors.primary, fontFamily: 'Roboto-Bold', fontSize: 15 }}>{item.title}</Text>
                  </TouchableOpacity>
                }


              </View>
            }
          />

          <View style={{ height: 40 }}></View>

        </ScrollView>
      </View>
    )
  }
}


