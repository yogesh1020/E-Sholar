import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {
  Dimensions,
  YellowBox,
} from 'react-native';

const width = Dimensions.get('window').width;
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Warning: Encountered two children with the same key',
  'Warning: Each child is an array',
  'Class RCTCxxModule',
]);

import Icon from 'react-native-vector-icons/Ionicons';

import {
  createAppContainer,
} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './src/screen/Splash';
import Login from './src/screen/Login';
import Sidebar from './src/component/Sidebar';
import Registration from './src/screen/Registration';
import Home from './src/screen/Home';
import Profile from './src/screen/Profile/index';
import ApplicationStutus from './src/screen/ApplicationStutus/ApplicationStutus';
import Scholarship from './src/screen/Scholarship/Scholarship';
import College from './src/screen/Scholarship/College';
import School from './src/screen/Scholarship/School';
import Awardees from './src/screen/Awardees/Awardees';
import Feedback from './src/screen/Feedback/Feedback';
import ChangePassword from './src/screen/ChangePassword';
import Render from './src/screen/index';



 
export const GMMDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: 'GMMPfaudler',
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-home" size={24} style={{color: tintColor}} />
        ),
      },
    },
    Profile:{screen:Profile},
    ApplicationStutus: {screen: ApplicationStutus},  
    Scholarship: {screen: Scholarship},  
    School:{screen:School},
    College:{screen:College}, 
    Awardees: {screen: Awardees},  
    Feedback: {screen: Feedback},  
    ChangePassword : {screen: ChangePassword},  
  },
  {
    initialRouteName: 'Home',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerPosition: 'left',
    drawerWidth: width * 0.8,
    contentOptions: {
      activeTintColor: '#e60000',
      activeBackgroundColor: 'purple',
      style: {
        marginVertical: 0,
      },
      labelStyle: {
        backgroundColor: 'transparent',
      },
    },
    contentComponent: (props, tintColor) => <Sidebar {...props} />,
  },
);

const Application = createStackNavigator(
  {Render:{screen:Render},
    Splash: {screen: Splash},
    Login: {screen: Login},
    Registration:{screen:Registration},
    Home: {screen: GMMDrawer},  
    Profile:{screen:Profile},
    ApplicationStutus: {screen: ApplicationStutus},  
    Scholarship: {screen: Scholarship}, 
    School:{screen:School},
    College:{screen:College}, 
    Awardees: {screen: Awardees},  
    Feedback: {screen: Feedback},  
    ChangePassword : {screen: ChangePassword},  
  },{headerMode:'none'}
);
const AppNavigator = createAppContainer(Application);
export default AppNavigator 
