https://www.youtube.com/watch?v=vzPmI0GCDPM







import React from 'react';
import {
  StyleSheet,
  Text, FlatList,
  View,
  ScrollView, TouchableOpacity, StatusBar, TextInput, Dimensions, Image, Modal, TouchableWithoutFeedback
} from 'react-native';
import { createAppContainer, createDrawerNavigator, StackNavigator } from "react-navigation";
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar, } from '../../component/@valdio/react-native-scrollable-tabview'
import Header from '../../component/Header';
import DocumentPicker from 'react-native-document-picker';
import Loader from '../../common/Loader';
import PersonalIfo from './PersonalIfo'
import Education from './Education'
import FamilyEarnings from './FamilyEarnings'
import Interest from './Interest'
import RNFetchBlob from 'rn-fetch-blob';
import Reference from './Reference'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Dropdown } from '../../component/dropdown';
import CheckBox from 'react-native-check-box';
import UserModal from '../../component/UserModal';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from "react-navigation";
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import timeout from '../../common/Timeout';
import API from '../../common/API';

const radioItems = [
  {
    label: 'Male',
    size: 20,
    color: Colors.primary,
    selected: false,
    value: '2',
  },
  {
    label: 'Female',
    color: Colors.primary,
    size: 20,
    selected: false,
    value: '1',
  },
];
let State = [
  { value: 'Andman & Nicobar', id: '1' },
  { value: 'ANdhra Pradesh', id: '2' },
  { value: 'Assam', id: '3' },
  { value: 'Bihar', id: '4' },
  { value: 'Chandigarh', id: '5' },
  { value: 'Delhi', id: '6' },
  { value: 'Goa', id: '7' },
  { value: 'Gujrat', id: '8' },
  { value: 'Haryana', id: '9' },
  { value: 'Keral', id: '10' }

];
let District = [
  { value: 'Andman & Nicobar', id: '1' },
  { value: 'ANdhra Pradesh', id: '2' },
  { value: 'Assam', id: '3' },
  { value: 'Bihar', id: '4' },
  { value: 'Chandigarh', id: '5' },
  { value: 'Delhi', id: '6' },
  { value: 'Goa', id: '7' },
  { value: 'Gujrat', id: '8' },
  { value: 'Haryana', id: '9' },
  { value: 'Keral', id: '10' }

];
let City = [
  { value: 'Andman & Nicobar', id: '1' },
  { value: 'ANdhra Pradesh', id: '2' },
  { value: 'Assam', id: '3' },
  { value: 'Bihar', id: '4' },
  { value: 'Chandigarh', id: '5' },
  { value: 'Delhi', id: '6' },
  { value: 'Goa', id: '7' },
  { value: 'Ahmedabad', id: '8' },
  { value: 'Haryana', id: '9' },
  { value: 'Keral', id: '10' }

];
let Religion = [
  { value: 'Buddhism', id: '1' },
  { value: 'Christian', id: '2' },
  { value: 'Hindu', id: '3' },
  { value: 'Jain', id: '4' },
  { value: 'Parsi', id: '5' },
  { value: 'Sikh', id: '6' },
  { value: 'Muslim', id: '7' },
];
let Category = [
  { value: 'General', id: '1' },
  { value: 'NTDNT', id: '2' },
  { value: 'OBC-C', id: '3' },
  { value: 'OBC-NC', id: '4' },
  { value: 'SC', id: '5' },
  { value: 'ST', id: '6' },
  { value: 'VJ/NT', id: '7' },
  { value: 'Other Reservation', id: '8' }
];

let DocumentData = [
  { value: '10th Marksheet', id: '1' },
  { value: '12th Marksheet', id: '2' },
  { value: 'Graduation Marksheet', id: '3' },
  { value: 'PG Degree', id: '4' },
  { value: 'Others', id: '5' },
  { value: 'Passport', id: '6' },
  { value: 'PAN Card', id: '7' },
  { value: 'Birth certificate', id: '8' },
  { value: 'Age Proof', id: '9' },
  { value: 'Resume', id: '10' },

]
var Data = [
  { name: 'KG', id: '1' },
  { name: 'Class 1', id: '2' },
  { name: 'Class 2', id: '3' },
  { name: 'Class 3', id: '4' },
  { name: 'Class 4', id: '5' },
  { name: 'Class 5', id: '6' },
  { name: 'Class 6', id: '7' },
  { name: 'Class 7', id: '8' },
  { name: 'Class 8', id: '9' },
  { name: 'Class 9', id: '10' },
  { name: 'Class 10', id: '11' },
  { name: 'Class 11', id: '12' },
  { name: 'Class 12', id: '13' },
  { name: 'Class 12 Passed', id: '14' },
  { name: 'Polytechnic/Diploma', id: '15' },
  { name: 'ITI', id: '16' },
  { name: 'Vocational Course', id: '17' },
  { name: 'Coaching Classes', id: '18' },
  { name: 'Graduation', id: '19' },
  { name: 'Post Graduation', id: '20' },
  { name: 'Post Graduation Diploma', id: '21' },
  { name: 'PhD', id: '22' },
  { name: 'Post Doctoral', id: '23' },
  { name: 'Others', id: '24' }
];
var EducationData = [
  { name: 'KG', id: '1' },
  { name: 'Class 1', id: '2' },
  { name: 'Class 2', id: '3' },
  { name: 'Class 3', id: '4' },
  { name: 'Class 4', id: '5' },
  { name: 'Class 5', id: '6' },
  { name: 'Class 6', id: '7' },
  { name: 'Class 7', id: '8' },
  { name: 'Class 8', id: '9' },
  { name: 'Class 9', id: '10' },
  { name: 'Class 10', id: '11' },
  { name: 'Class 11', id: '12' },
  { name: 'Class 12', id: '13' },
  { name: 'Class 12 Passed', id: '14' },
  { name: 'Polytechnic/Diploma', id: '15' },
  { name: 'ITI', id: '16' },
  { name: 'Vocational Course', id: '17' },
  { name: 'Coaching Classes', id: '18' },
  { name: 'Graduation', id: '19' },
  { name: 'Post Graduation', id: '20' },
  { name: 'Post Graduation Diploma', id: '21' },
  { name: 'PhD', id: '22' },
  { name: 'Post Doctoral', id: '23' },
  { name: 'Others', id: '24' }
];
const EradioItems = [
  {
    label: 'Yes',
    size: 20,
    color: Colors.primary,
    selected: false,
    value: '2',
  },
  {
    label: 'No',
    color: Colors.primary,
    size: 20,
    selected: false,
    value: '1',
  },
];

var InterestcheckData = [
  {
    value: 0,
    id: 0,
    check: false,
    name: 'Merit based (Competition and academic performance)'
  },
  {
    value: 0,
    id: 2,
    check: false,
    name: 'Means based (Low famaily income)'
  },
  {
    value: 0,
    id: 3,
    check: false,
    name: 'Cultural talent (Singing, dancing & music)'
  },
  {
    value: 0,
    id: 4,
    check: false,
    name: 'Visual art (Painting,drawing,audio,video,photography,animation)'
  },
  {
    value: 0,
    id: 5,
    check: false,
    name: 'Literacy art (Poetry, essay story)'
  },
  {
    value: 0,
    id: 6,
    check: false,
    name: 'Sport Talent'
  },
  {
    value: 0,
    id: 7,
    check: false,
    name: 'Science, math based'
  },
  {
    value: 0,
    id: 8,
    check: false,
    name: 'Technology based'
  },

];

var FData = [
  { name: 'KG', id: '1' },
  { name: 'Class 1', id: '2' },
  { name: 'Class 2', id: '3' },
  { name: 'Class 3', id: '4' },
  { name: 'Class 4', id: '5' },
  { name: 'Class 5', id: '6' },
  { name: 'Class 6', id: '7' },
  { name: 'Class 7', id: '8' },
  { name: 'Class 8', id: '9' },
  { name: 'Class 9', id: '10' },
  { name: 'Class 10', id: '11' },
  { name: 'Class 11', id: '12' },
  { name: 'Class 12', id: '13' },
  { name: 'Class 12 Passed', id: '14' },
  { name: 'Polytechnic/Diploma', id: '15' },
  { name: 'ITI', id: '16' },
  { name: 'Vocational Course', id: '17' },
  { name: 'Coaching Classes', id: '18' },
  { name: 'Graduation', id: '19' },
  { name: 'Post Graduation', id: '20' },
  { name: 'Post Graduation Diploma', id: '21' },
  { name: 'PhD', id: '22' },
  { name: 'Post Doctoral', id: '23' },
  { name: 'Others', id: '24' }
];
const FradioItems = [
  {
    label: 'Yes',
    size: 20,
    color: Colors.primary,
    selected: false,
    value: '2',
  },
  {
    label: 'No',
    color: Colors.primary,
    size: 20,
    selected: false,
    value: '1',
  },
];
// "@valdio/react-native-scrollable-tabview": "^0.8.12",
export default class Profile extends React.Component {
  state = {
    // profile
    inputBorderColor1: Colors.medium_gray,
    inputBorderColor2: Colors.medium_gray,
    inputBorderColor3: Colors.medium_gray,
    inputBorderColor4: Colors.medium_gray,
    inputBorderColor5: Colors.medium_gray,
    inputBorderColor6: Colors.medium_gray,
    inputBorderColor7: Colors.medium_gray,
    inputBorderColor8: Colors.medium_gray,
    inputBorderColor9: Colors.medium_gray,
    inputBorderColor10: Colors.medium_gray,
    isDateTimePickerVisible: false,
    dob: '',
    refresh: false,
    checkData: [
      {
        value: 0,
        id: 1,
        check: false,
        name: 'Are you physically challenged ?'
      },
      {
        value: 0,
        id: 2,
        check: false,
        name: 'Are you Looking for a scholarship to study abroad ?'
      },

    ],
    lname: '',
    fname: '',
    email: '',
    phone: '',
    atharno: '',
    dob: '',
    paddress: '',
    pincode: '',
    state: '',
    district: '',
    city: '',
    religion: '',
    category: '',
    gender: '',
    fincome: '',
    other1: '',
    other2: '',
    //Family income
    modalVisiblef: false,
    Fvisible4: false, selectedItem: '', member_name: '',
    qualification: '',
    occupation: '',
    relation_with_candidate: '',
    income: '',Fvisible4:false,

    // document//
    Document: '',
    docbase64: '',
    documenttype: '',
    filename: "No file chosen",
    loading: false,

    // prefrence
    PmodalVisible1: false,
    RFullname: '',
    Rphone: '',
    Roccpation: '',
    RRelation: '',
    visible4: false, selectedItem: '',

    docs: [], reference: [], familtyincome: [], education: [],

    // education
    EducationClass: '', EducationDegree: '',

    class_college: '',

    passing_year: '',
    marks: '',

    EducationmodalVisible1: false, Educationvisible4: false, Educationvisible5: false, EducationselectedItem: '',
  }
  _showDateTimePicker = () =>
    this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () =>
    this.setState({ isDateTimePickerVisible: false });
  _handleDatePicked = date => {
    this.setState({ dob: date });
    this._hideDateTimePicker();
  };

  componentDidMount() {

    AsyncStorage.getItem('Name').then(Pname =>{
      AsyncStorage.getItem('lName').then(PlName =>{
        AsyncStorage.getItem('email').then(Pemail =>{
          AsyncStorage.getItem('phone').then(Pphone =>{
           this.setState({
            fname: JSON.parse(Pname), lname: JSON.parse(PlName),
            email: JSON.parse(Pemail), phone: JSON.parse(Pphone),
            
           })
          })
        })
      })
    })
  

  this.Profile()

  }

  changeActiveRadioButton(index) {

    radioItems.map(item => {
      item.selected = false;
    });
    radioItems[index].selected = true;
    this.setState({ refresh: !this.state.refresh });
    this.setState({ radioItems: radioItems }, () => {
      this.setState({ gender: radioItems[index].label });
      console.log(this.state.gender);

    });
  }
  onClick(item, index) {

    this.state.checkData[index].check = !this.state.checkData[index].check
    this.state.checkData[index].value = 1
    console.log('loggg', item, index);
    this.setState({ refresh: !this.state.refresh, other1: this.state.checkData[0].value, other2: this.state.checkData[1].value })


  }
  renderCheckBox() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={this.state.checkData}

        extraData={this.state.refresh}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}

        renderItem={({ item, index }) => (
          // <View style={{}}>

          <CheckBox
            rightTextStyle={{
              fontFamily: Fonts.regular,
              fontSize: 16,
              color: item.check ? Colors.primary : Colors.dark_gray
            }}
            style={{
              flex: 1,
              paddingVertical: 14, marginTop: 0,
              backgroundColor: "transparent"
            }}
            onClick={() => this.onClick(item, index)}

            isChecked={item.check}
            checkBoxColor={item.check ? Colors.primary : Colors.dark_gray}
            rightText={item.name}
          />

          // </View>
        )}

        keyExtractor={(item, index) => index}
      />
    );
  }

  Profile = () => {


    AsyncStorage.getItem('UserId').then(id => {
    this.setState({ loading: true });
    var Request = {
      "action": "getProfileInfo",
      "studentid": JSON.parse(id)

    };

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
              console.log('register Response', res.response);
              if (res.response.code == '200') {
                console.log('false');
                res.response.intrests[0].merit_based=InterestcheckData[0].value,
                res.response.intrests[0].means_based=InterestcheckData[1].value,
                res.response.intrests[0].cultural_talent=InterestcheckData[2].value,
                res.response.intrests[0].visual_art=InterestcheckData[3].value,
                res.response.intrests[0].literacy_art=InterestcheckData[4].value,
                res.response.intrests[0].sport_talent=InterestcheckData[5].value,
                res.response.intrests[0].science_maths_based=InterestcheckData[6].value,
                res.response.intrests[0].technology_based=InterestcheckData[7].value
                  this.setState({
                 
                    atharno: res.response.studentpersonalinfo[0].adharno, dob: res.response.studentpersonalinfo[0].dob,
                    paddress: res.response.studentpersonalinfo[0].address, pincode: res.response.studentpersonalinfo[0].pincode,
                    state: res.response.studentpersonalinfo[0].state, district: res.response.studentpersonalinfo[0].district,
                    city: res.response.studentpersonalinfo[0].city, religion: res.response.studentpersonalinfo[0].religion,
                    category: res.response.studentpersonalinfo[0].category, gender: res.response.studentpersonalinfo[0].gender,
                    fincome: res.response.studentpersonalinfo[0].family_income, other1: res.response.studentpersonalinfo[0].are_you_physically_challenged,
                    other2: res.response.studentpersonalinfo[0].are_you_looking_abroad_student, refresh: !this.state.refresh,
                 
                    member_name: res.response.familtyincome[0].member_name,
                    qualification: res.response.familtyincome[0].qualification,
                    occupation: res.response.familtyincome[0].occupation,
                    income: res.response.familtyincome[0].income,
                    relation_with_candidate: res.response.familtyincome[0].relation_with_candidate,

                    RFullname: res.response.reference[0].fullname,
                    Rphone: res.response.reference[0].mobile,
                    Roccpation: res.response.reference[0].occupation,
                    RRelation: res.response.reference[0].relation,

                    Document: res.response.docs[0].doctype,
                    filename: res.response.docs[0].doctype,


                    EducationClass: res.response.education[0].class_college,
                    EducationDegree: res.response.education[0].degree,
                    passing_year: res.response.education[0].passing_year,
                    marks: res.response.education[0].marks,
    
               
                  })
               

                
                

               
           

                if (res.response.studentpersonalinfo[0].gender == 'male' && res.response.studentpersonalinfo[0]) {
                  radioItems[0].selected = true
                  this.setState({ gender: 'male' })
                } else {
                  radioItems[1].selected = true
                  this.setState({ gender: 'female' })
                }
                if (res.response.education[0].is_your_present_class == '1' && res.response.education[0]) {
                  this.setState({ EducationselectedItem: '1' })
                  EradioItems[0].selected = true
                } else {
                  this.setState({ EducationselectedItem: '0' })
                  EradioItems[1].selected = true
                }
               
             
                // radioItems[index].selected = true;
                // this.state.checkData[index].check = !this.state.checkData[index].check

                this.setState({ loading: false });
              } else {
               
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

  Update_Profile = () => {

    if (!this.state.atharno) {
      Toast.show(
        "Please Enter Aathar No",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.dob) {
      Toast.show(
        "Please Select Date of birth",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.paddress) {
      Toast.show(
        "Please Enter Postal Address",
        Toast.SHORT,
        Toast.BOTTOM
      );

    }
    else if (!this.state.pincode) {
      Toast.show(
        "Please Enter PinCode",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.state) {
      Toast.show(
        "Please Select State",
        Toast.SHORT,
        Toast.BOTTOM
      );

    }
    else if (!this.state.district) {
      Toast.show(
        "Please Select District",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.city) {
      Toast.show(
        "Please Select City",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.religion) {
      Toast.show(
        "Please Select Religion",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.category) {
      Toast.show(
        "Please Select Category",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.fincome) {
      Toast.show(
        "Please Enter Family Income",
        Toast.SHORT,
        Toast.BOTTOM
      );
    } else {
      AsyncStorage.getItem('UserId').then(id => {
        this.setState({ loading: true });
        var Request = {

          "action": "personal_info",
          "studentid": JSON.parse(id),
          "adharno": this.state.atharno,
          "dob": moment(this.state.dob).format('DD/MM/YYYY'),
          "address": this.state.paddress,
          "pincode": this.state.pincode,
          "state": this.state.state,
          "district": this.state.district,
          "city": this.state.city,
          "religion": this.state.religion,
          "category": this.state.category,
          "gender": this.state.gender,
          "family_income": this.state.fincome,
          "are_you_physically_challenged": this.state.other1,
          "are_you_looking_abroad_student": this.state.other2

        };

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
                  console.log('register Response', res.response);
                  if (res.response.code == '200') {

                 
                    this.setState({ loading: false },() =>{
                      this.tabView.goToPage(1)
                      AsyncStorage.setItem('Presult',JSON.stringify('20'))
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

  }
  // 
  PersonalInfo = () => {
    return (
      <View style={{ flex: 0.10 }}>
        <TouchableOpacity
          style={styles.BottomButton}
          onPress={() => this.Update_Profile()}>
          <Text style={styles.BottomText}>
            Save & Next
              </Text>
        </TouchableOpacity>
      </View>
    )
  }





  EducationonShow4 = () => {
    this.setState({ Educationvisible4: true });
  };

  EducationonSelect4 = (id, name, filter) => {
    console.log('kmkk', id, 'name', name);

    this.setState({
      Educationvisible4: false, EducationDegree: name
    });

  };

  EducationonCancel4 = () => {
    this.setState({
      Educationvisible4: false,
    });
  };

  EducationChangeText = (filter, text) => {

    this.setState({ Educationvisible4: false, Class: filter });
  };


  EducationonShow5 = () => {
    this.setState({ Educationvisible5: true });
  };

  EducationonSelect5 = (id, name, filter) => {
    console.log('kmkk', id, 'name', name);

    this.setState({
      Educationvisible5: false, EducationClass: name
    });

  };

  EducationonCancel5 = () => {
    this.setState({
      Educationvisible5: false,
    });
  };

  EducationChangeText2 = (filter, text) => {

    this.setState({ Educationvisible5: false, EducationClass: filter });
  };


  EducationchangeActiveRadioButton(index) {

    EradioItems.map(item => {
      item.selected = false;
    });
    EradioItems[index].selected = true;
    this.setState({ refresh: !this.state.refresh });
    this.setState({ EradioItems: EradioItems }, () => {
      this.setState({ EducationselectedItem: EradioItems[index].value });
      console.log(this.state.EradioItems);

    });
  }
  isEducation = () => {

    if (!this.state.EducationDegree) {
      Toast.show(
        "Select Degree",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.EducationClass) {
      Toast.show(
        "Select Class",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.EducationselectedItem) {
      Toast.show(
        "Please Select Present Class",
        Toast.SHORT,
        Toast.BOTTOM
      );

    }
    else if (!this.state.passing_year) {
      Toast.show(
        "Please Enter Passing Year",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.marks) {
      Toast.show(
        "Please Enter Marks",
        Toast.SHORT,
        Toast.BOTTOM
      );

    } else {
      this.setState({ EducationmodalVisible1: false, loading: true })
      AsyncStorage.getItem('UserId').then(id => {
        var Request = {
          "action": "updateeducation",
          "degree": this.state.EducationDegree,
          "studentid": JSON.parse(id),
          "class_college": this.state.EducationClass,
          "is_your_present_class": this.state.EducationselectedItem,
          "passing_year": this.state.passing_year,
          "marks": this.state.marks

        };

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
                  console.log('register Response', res.response);
                  if (res.response.code == '200') {

                  
                    this.setState({ loading: false },()=>{
                      AsyncStorage.setItem('Presult',JSON.stringify('40'))
                      this.tabView.goToPage(2)
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

  }
  Education = () => {
    return (
      <View style={{ flex: 0.10 }}>
        <View style={{ flexDirection: 'row', width: '100%', height: '100%', position: 'absolute', bottom: 0, justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={styles.BottomButton2}
            onPress={() => this.tabView.goToPage(0)}>
            <Text style={styles.BottomText2}>
              Back
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.BottomButton3}
            onPress={() => {this.setState({EducationmodalVisible1:true})}}>
            <Text style={styles.BottomText2}>
              Next
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }



  FonShow4 = () => {
    this.setState({ Fvisible4: true });
  };

  FonSelect4 = (id, name, filter) => {
    console.log('kmkk', id, 'name', name);

    this.setState({
      Fvisible4: false, qualification: name,
    });

  };

  FonCancel4 = () => {
    this.setState({
      Fvisible4: false,
    });
  };

  FChangeText = (filter, text) => {

    this.setState({ Fvisible4: false, qualification: filter });
  };

  FonShow5 = () => {
    this.setState({ Fvisible5: true });
  };

  FonSelect5 = (id, name, filter) => {
    console.log('kmkk', id, 'name', name);

    this.setState({
      Fvisible5: false, occupation: name,
    });

  };

  FonCancel5 = () => {
    this.setState({
      Fvisible5: false,
    });
  };

  FChangeText2 = (filter, text) => {

    this.setState({ Fvisible5: false, occupation: filter });
  };

  isFaimilyAdd = () => {

    if (!this.state.member_name) {
      Toast.show(
        "Enter Member Name",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.qualification) {
      Toast.show(
        "Select Qualification",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.occupation) {
      Toast.show(
        "Please Select Occupation",
        Toast.SHORT,
        Toast.BOTTOM
      );

    }
    else if (!this.state.income) {
      Toast.show(
        "Please Enter Annual Income",
        Toast.SHORT,
        Toast.BOTTOM
      );
   
    } else {
      this.setState({ modalVisiblef: false, loading: true })
      AsyncStorage.getItem('UserId').then(id => {
        var Request = {
          "action":"updatefamilyinfo",
          "studentid": JSON.parse(id),
          "member_name":this.state.member_name,
          "qualification":this.state.qualification,
          "occupation":this.state.occupation,
          "relation_with_candidate":this.state.relation_with_candidate,
          "income":this.state.income 
          
          
        };

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
                  console.log('register Response', res.response);
                  if (res.response.code == '200') {

                    this.setState({ loading: false },()=>{
                      AsyncStorage.setItem('Presult',JSON.stringify('60'))
                      this.tabView.goToPage(3)
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

  }



  FamilyEarnings = () => {
    return (
      <View style={{ flex: 0.10 }}>
        <View style={{ flexDirection: 'row', width: '100%', height: '100%', position: 'absolute', bottom: 0, justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={styles.BottomButton2}
            onPress={() => this.tabView.goToPage(1)}>
            <Text style={styles.BottomText2}>
              Back
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.BottomButton3}
            onPress={() => {this.setState({modalVisiblef:true})}}>
            <Text style={styles.BottomText2}>
              Next
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }





  InteresonClick(item, index) {

    InterestcheckData[index].check = !InterestcheckData[index].check
    InterestcheckData[index].value =1
    console.log('loggg', item, index);

    this.setState({ refresh: !this.state.refresh })

  }
  InteresrenderCheckBox() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={InterestcheckData}

        extraData={this.state.refresh}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}

        renderItem={({ item, index }) => (
          // <View style={{}}>

          <CheckBox
            rightTextStyle={{
              fontFamily: Fonts.regular,
              fontSize: 16,
              color: item.check ? Colors.primary : Colors.dark_gray
            }}
            style={{
              flex: 1,
              paddingVertical: 12,
              backgroundColor: "transparent"
            }}
            onClick={() => this.InteresonClick(item, index)}

            isChecked={item.check}
            checkBoxColor={item.check ? Colors.primary : Colors.dark_gray}
            rightText={item.name}
          />

          // </View>
        )}

        keyExtractor={(item, index) => index}
      />
    );
  }
  

  isInterest = () => {

   
      this.setState({ modalVisiblef: false, loading: true })
      AsyncStorage.getItem('UserId').then(id => {
        var Request = {
         "action": "updateintrest",
         "studentid":JSON.parse(id),
         "merit_based":InterestcheckData[0].value,
         "means_based":InterestcheckData[1].value,
         "cultural_talent":InterestcheckData[2].value,
         "visual_art":InterestcheckData[3].value,
         "literacy_art":InterestcheckData[4].value,
         "sport_talent":InterestcheckData[5].value,
         "science_maths_based":InterestcheckData[6].value,
         "technology_based":InterestcheckData[7].value
          
        };

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
                  console.log('register Response', res.response);
                  if (res.response.code == '200') {

                    this.setState({ loading: false },()=>{
                    
                      this.tabView.goToPage(4)
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

  Interest = () => {
    return (
      <View style={{ flex: 0.10 }}>
        <View style={{ flexDirection: 'row', width: '100%', height: '100%', position: 'absolute', bottom: 0, justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={styles.BottomButton2}
            onPress={() => this.tabView.goToPage(2)}>
            <Text style={styles.BottomText2}>
              Back
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.BottomButton3}
            onPress={() => this.isInterest()}>
            <Text style={styles.BottomText2}>
              Next
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  async upload() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],

      });

      console.log('res', res);

      RNFetchBlob.fs.readFile(res.uri, 'base64').then(encoded => {
        this.setState({ docbase64: encoded, filename: this.state.Document });


        // Android
      });
    } catch (err) {

      if (DocumentPicker.isCancel(err)) {
        setTimeout(() => {
          Toast.show('Canceled by user..!', Toast.SHORT, Toast.BOTTOM);
        }, 50);
      } else {
        setTimeout(() => {
          Toast.show(JSON.stringify(err), Toast.SHORT, Toast.BOTTOM);
        }, 50);
        // this.refs.toastWithStyle.show(JSON.stringify(err), 1500);

        throw err;
      }
    }

  }

  Document_upload = () => {

    if (this.state.docbase64 == '') {
      Toast.show(
        "Please Upload your document",
        Toast.SHORT,
        Toast.BOTTOM
      );

    } else {
      AsyncStorage.getItem('UserId').then(id => {
        this.setState({ loading: true });
        var Request = {

          "action": "update_document",
          "studentid": JSON.parse(id),
          "doctype": this.state.filename,
          "docurl": this.state.docbase64,


        };

        console.log(JSON.stringify(Request));

        NetInfo.fetch().then(state => {
          if (state.isConnected) {
            // timeout(
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
                  console.log('register Response', res.response);
                  if (res.response.code == '200') {

                    this.setState({ loading: false },()=>{
                      AsyncStorage.setItem('Presult',JSON.stringify('80'))
                      this.tabView.goToPage(5)
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
                })
            // ).catch(e => {
            //   console.log(e);
            //   this.setState({ loading: false });
            //   Toast.show(
            //     'Please Check your internet connection',
            //     Toast.SHORT,
            //     Toast.BOTTOM,
            //   );
            // });
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

  }

  Document = () => {
    return (
      <View style={{ flex: 0.10 }}>
        <View style={{ flexDirection: 'row', width: '100%', height: '100%', position: 'absolute', bottom: 0, justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={styles.BottomButton2}
            onPress={() => this.tabView.goToPage(3)}>
            <Text style={styles.BottomText2}>
              Back
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.BottomButton3}
            onPress={() => this.Document_upload()}>
            <Text style={styles.BottomText2}>
              Next
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  // { "action" : "updatereferencei" , "studentid":"1" ,"fullname":"asdas","mobile":"3434343434","occupation":"asdasdasd","relation":"asdasdasdasds"} 

  
  onShow4 = () => {
    this.setState({ visible4: true });
  };

  onSelect4 = (id, name, filter) => {
    console.log('kmkk', id, 'name', name);

    this.setState({
      visible4: false, Roccpation: name
    });

  };

  onCancel4 = () => {
    this.setState({
      visible4: false,
    });
  };

  ChangeText = (filter, text) => {

    this.setState({ visible4: false, Roccpation: filter });
  };

  isReference = () => {

    if (!this.state.RFullname) {
      Toast.show(
        "Please Enter FullName",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.Rphone) {
      Toast.show(
        "Please Enter Phone No",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (!this.state.Roccpation) {
      Toast.show(
        "Please Select Occpation",
        Toast.SHORT,
        Toast.BOTTOM
      );

    }
    else if (!this.state.RRelation) {
      Toast.show(
        "Please Enter Relation",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
   else {
      this.setState({ PmodalVisible1: false, loading: true })
      AsyncStorage.getItem('UserId').then(id => {
        var Request = {
          "action" : "updatereference" ,
           "studentid":JSON.parse(id) ,
           "fullname":this.state.RFullname,
           "mobile":this.state.Rphone,
           "occupation":this.state.Roccpation,
          "relation":this.state.RRelation

        };

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
                  console.log('register Response', res.response);
                  if (res.response.code == '200') {

                
                    this.setState({ loading: false ,PmodalVisible1:false},()=>{
                      AsyncStorage.setItem('Presult',JSON.stringify('100'))
                      this.props.navigation.navigate('Home')
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

  }
  Reference = () => {
    return (
      <View style={{ flex: 0.10, }}>
        <View style={{ flexDirection: 'row', width: '100%', height: '100%', position: 'absolute', bottom: 0, justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={styles.BottomButton2}
            onPress={() => this.tabView.goToPage(4)}>
            <Text style={styles.BottomText2}>
              Back
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
            this.setState({PmodalVisible1:true})
            }}
            style={styles.BottomButton3}
          >
            <Text style={styles.BottomText2}>
              Submit
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }


  render() {

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.reg} barStyle='light-content' />
        <Header
          backIcon={require('../../images/menu.png')}
          pageTitle="My Profile"
          back={() => {
            this.props.navigation.openDrawer();
          }} />
        <Loader loading={this.state.loading} />

        <ScrollableTabView
          style={{ marginTop: 0 }}
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar

            tabBarUnderlineStyle={{ backgroundColor: 'white', height: 1 }} style={{ backgroundColor: Colors.accent }}></ScrollableTabBar>}
          ref={(tabView) => { this.tabView = tabView }}>


          <View tabLabel="Personal info" tabBarTextStyle={styles.text} style={styles.tabView}>
            {/* <PersonalIfo/> */}
            <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>


              <Text style={styles.label}>First Name</Text>


              <TextInput
                placeholder="Enter First Name"
                selectionColor={Colors.primary}
                style={[styles.textInput, {
                  textAlignVertical: this.props.multiline ? "top" : "center",
                  borderColor: this.state.inputBorderColor1,

                }]}
                autoCapitalize='none'

                onFocus={() => this.setState({ inputBorderColor1: Colors.primary })}
                onBlur={() =>
                  this.setState({ inputBorderColor1: Colors.medium_gray })
                }
                onChangeText={fname => this.setState({ fname })}
                returnKeyType={"next"}
                value={this.state.fname}
                onSubmitEditing={(event) => {
                  this.refs.lname.focus();
                }}

              />


              <Text style={styles.label}>Last Name</Text>
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

                ref='lname'
                placeholder="Enter Last Name"
                returnKeyType={"next"}
                value={this.state.lname}
                onChangeText={lname => this.setState({ lname })}
                onSubmitEditing={(event) => {
                  this.refs.email.focus();
                }}
              />


              <Text style={styles.label}>Email id</Text>
              <TextInput
                selectionColor={Colors.primary}
                style={[styles.textInput, {
                  textAlignVertical: this.props.multiline ? "top" : "center",
                  borderColor: this.state.inputBorderColor3,

                }]}
                onFocus={() => this.setState({ inputBorderColor3: Colors.primary })}
                onBlur={() =>
                  this.setState({ inputBorderColor3: Colors.medium_gray })
                }
                autoCapitalize='none'
                value={this.state.email}
                ref='email'
                placeholder="Enter Email Id"
                returnKeyType={"next"}

                onSubmitEditing={(event) => {
                  this.refs.phone.focus();
                }}
                onChangeText={email => this.setState({ email })}
              />

              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                selectionColor={Colors.primary}
                style={[styles.textInput, {
                  textAlignVertical: this.props.multiline ? "top" : "center",
                  borderColor: this.state.inputBorderColor4,

                }]}
                onFocus={() => this.setState({ inputBorderColor4: Colors.primary })}
                onBlur={() =>
                  this.setState({ inputBorderColor4: Colors.medium_gray })
                }
                autoCapitalize='none'
                value={this.state.phone}
                ref='phone'
                placeholder="Enter Phone Number"
                returnKeyType={"next"}
                keyboardType={'phone-pad'}
                onSubmitEditing={(event) => {
                  this.refs.atharno.focus();
                }}
                onChangeText={phone => this.setState({ phone })}
              />

              <Text style={styles.label}>Aathar Number</Text>
              <TextInput
                selectionColor={Colors.primary}
                style={[styles.textInput, {
                  textAlignVertical: this.props.multiline ? "top" : "center",
                  borderColor: this.state.inputBorderColor5,

                }]}
                onFocus={() => this.setState({ inputBorderColor5: Colors.primary })}
                onBlur={() =>
                  this.setState({ inputBorderColor5: Colors.medium_gray })
                }
                autoCapitalize='none'

                ref='atharno'
                placeholder="Enter Aathar Number"
                returnKeyType={"next"}
                value={this.state.atharno}
                onSubmitEditing={(event) => {
                  // this.refs.pni.focus();
                }}
                onChangeText={atharno => this.setState({ atharno })}
              />



              <Text style={styles.label}>Date of birth</Text>
              <TouchableOpacity
                style={{
                  padding: 15,
                  paddingVertical: 10,
                  paddingHorizontal: 10,

                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  backgroundColor: Colors.white,
                  borderWidth: 1,

                  borderRadius: 4,
                  paddingTop: 10,
                  borderColor: Colors.medium_gray,
                }}
                onPress={() => {

                  this._showDateTimePicker();

                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: Fonts.regular,
                    color: Colors.black,
                  }}>
                  {this.state.dob ? moment(this.state.dob).format('DD/MM/YYYY') : "Date of birth"}
                </Text>
              </TouchableOpacity>



              <Text style={styles.label}>Postal address</Text>
              <TextInput
                selectionColor={Colors.primary}
                style={[styles.textInput, {
                  textAlignVertical: this.props.multiline ? "top" : "center",
                  borderColor: this.state.inputBorderColor6,

                }]}
                onFocus={() => this.setState({ inputBorderColor6: Colors.primary })}
                onBlur={() =>
                  this.setState({ inputBorderColor6: Colors.medium_gray })
                }
                autoCapitalize='none'
                value={this.state.paddress}
                ref='paddress'
                placeholder="Enter Address"
                returnKeyType={"next"}

                onSubmitEditing={(event) => {
                  // this.refs.phone.focus();
                }}
                onChangeText={paddress => this.setState({ paddress })}
              />

              <Text style={styles.label}>PinCode</Text>
              <TextInput
                selectionColor={Colors.primary}
                style={[styles.textInput, {
                  textAlignVertical: this.props.multiline ? "top" : "center",
                  borderColor: this.state.inputBorderColor10,

                }]}
                onFocus={() => this.setState({ inputBorderColor10: Colors.primary })}
                onBlur={() =>
                  this.setState({ inputBorderColor10: Colors.medium_gray })
                }
                autoCapitalize='none'

                ref='pincode'
                placeholder="Enter PinCode"
                returnKeyType={"next"}
                keyboardType={'phone-pad'}
                onSubmitEditing={(event) => {
                  // this.refs.phone.focus();
                }}
                value={this.state.pincode}
                onChangeText={pincode => this.setState({ pincode })}
              />




              <Text style={styles.label}>
                State
                     </Text>
              <View
                style={{
                  paddingHorizontal: 10,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  backgroundColor: Colors.white,
                  borderWidth: 1,

                  borderRadius: 4,

                  borderColor: Colors.medium_gray,
                }}>
                <View>
                  <Dropdown
                    containerStyle={{
                      width: width * 0.85,
                      paddingBottom: 15,
                    }}
                    fontSize={15}
                    itemTextStyle={{
                      fontFamily: Fonts.regular,
                      color: Colors.primary,
                    }}
                    //  valueExtractor={({id}) => id}
                    //  labelExtractor={({name}) => name}
                    itemColor={Colors.black}
                    fontFamily={Fonts.regular}
                    selectedItemColor={Colors.black}

                    textColor={
                      this.state.state
                        ? Colors.black
                        : Colors.dark_gray
                    }
                    value={
                      this.state.state
                        ? this.state.state
                        : 'Select your state'
                    }
                    onChangeText={value => {
                      console.log(value);

                      this.setState({ state: value })

                    }}
                    data={State}
                  //  ref={(ref) => {  this.type = ref }}
                  />
                </View>
              </View>


              <Text style={styles.label}>
                District
                     </Text>
              <View
                style={{
                  paddingHorizontal: 10,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  backgroundColor: Colors.white,
                  borderWidth: 1,

                  borderRadius: 4,

                  borderColor: Colors.medium_gray,
                }}>
                <View>
                  <Dropdown
                    containerStyle={{
                      width: width * 0.85,
                      paddingBottom: 15,
                    }}
                    fontSize={15}
                    itemTextStyle={{
                      fontFamily: Fonts.regular,
                      color: Colors.primary,
                    }}
                    //  valueExtractor={({id}) => id}
                    //  labelExtractor={({name}) => name}
                    itemColor={Colors.black}
                    fontFamily={Fonts.regular}
                    selectedItemColor={Colors.black}

                    textColor={
                      this.state.district
                        ? Colors.black
                        : Colors.dark_gray
                    }
                    value={
                      this.state.district
                        ? this.state.district
                        : 'Select your District'
                    }
                    onChangeText={value => {
                      this.setState({ district: value })

                    }}
                    data={District}
                  //  ref={(ref) => {  this.type = ref }}
                  />
                </View>
              </View>

              <Text style={styles.label}>
                City
                     </Text>
              <View
                style={{
                  paddingHorizontal: 10,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  backgroundColor: Colors.white,
                  borderWidth: 1,

                  borderRadius: 4,

                  borderColor: Colors.medium_gray,
                }}>
                <View>
                  <Dropdown
                    containerStyle={{
                      width: width * 0.85,
                      paddingBottom: 15,
                    }}
                    fontSize={15}
                    itemTextStyle={{
                      fontFamily: Fonts.regular,
                      color: Colors.primary,
                    }}
                    //  valueExtractor={({id}) => id}
                    //  labelExtractor={({name}) => name}
                    itemColor={Colors.black}
                    fontFamily={Fonts.regular}
                    selectedItemColor={Colors.black}

                    textColor={
                      this.state.city
                        ? Colors.black
                        : Colors.dark_gray
                    }
                    value={
                      this.state.city
                        ? this.state.city
                        : 'Select your City'
                    }
                    onChangeText={value => {
                      this.setState({ city: value })

                    }}
                    data={City}
                    ref={(ref) => { this.type = ref }}
                  />
                </View>
              </View>

              <Text style={styles.label}>
                Religion
                     </Text>
              <View
                style={{
                  paddingHorizontal: 10,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  backgroundColor: Colors.white,
                  borderWidth: 1,

                  borderRadius: 4,

                  borderColor: Colors.medium_gray,
                }}>
                <View>
                  <Dropdown
                    containerStyle={{
                      width: width * 0.85,
                      paddingBottom: 15,
                    }}
                    fontSize={15}
                    itemTextStyle={{
                      fontFamily: Fonts.regular,
                      color: Colors.primary,
                    }}
                    //  valueExtractor={({id}) => id}
                    //  labelExtractor={({name}) => name}
                    itemColor={Colors.black}
                    fontFamily={Fonts.regular}
                    selectedItemColor={Colors.black}

                    textColor={
                      this.state.religion
                        ? Colors.black
                        : Colors.dark_gray
                    }
                    value={
                      this.state.religion
                        ? this.state.religion
                        : 'Select your Religion'
                    }
                    onChangeText={value => {
                      this.setState({ religion: value })

                    }}
                    data={Religion}
                  //  ref={(ref) => {  this.type = ref }}
                  />
                </View>
              </View>


              <Text style={styles.label}>
                Category
                     </Text>
              <View
                style={{
                  paddingHorizontal: 10,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  backgroundColor: Colors.white,
                  borderWidth: 1,

                  borderRadius: 4,

                  borderColor: Colors.medium_gray,
                }}>
                <View>
                  <Dropdown
                    containerStyle={{
                      width: width * 0.85,
                      paddingBottom: 15,
                    }}
                    fontSize={15}
                    itemTextStyle={{
                      fontFamily: Fonts.regular,
                      color: Colors.primary,
                    }}
                    //  valueExtractor={({id}) => id}
                    //  labelExtractor={({name}) => name}
                    itemColor={Colors.black}
                    fontFamily={Fonts.regular}
                    selectedItemColor={Colors.black}

                    textColor={
                      this.state.category
                        ? Colors.black
                        : Colors.dark_gray
                    }
                    value={
                      this.state.category
                        ? this.state.category
                        : 'Select your Category'
                    }
                    onChangeText={value => {
                      this.setState({ category: value })

                    }}
                    data={Category}
                  //  ref={(ref) => {  this.type = ref }}
                  />
                </View>
              </View>



              <Text style={styles.label}>
                Gender                                   </Text>
              <View
                style={{
                  paddingHorizontal: 10,
                  flexDirection: 'row',
                  paddingVertical: 20,
                }}
                refresh={this.state.refresh}>


                {radioItems.map((item, key) => (
                  <RadioButton
                    key={key}
                    button={item}
                    onClick={this.changeActiveRadioButton.bind(
                      this,
                      key,
                    )}
                  />
                ))}

              </View>




              <Text style={styles.label}>Family Income</Text>
              <TextInput
                selectionColor={Colors.primary}
                style={[styles.textInput, {
                  textAlignVertical: this.props.multiline ? "top" : "center",
                  borderColor: this.state.inputBorderColor3,

                }]}
                onFocus={() => this.setState({ inputBorderColor3: Colors.primary })}
                onBlur={() =>
                  this.setState({ inputBorderColor3: Colors.medium_gray })
                }
                autoCapitalize='none'


                placeholder="Enter Family Income"
                returnKeyType={"next"}
                keyboardType={'phone-pad'}
                value={this.state.fincome}
                onChangeText={fincome => this.setState({ fincome })}
              />

              {this.renderCheckBox()}
              <View style={{ height: 100 }}></View>


              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                mode="date" />
            </ScrollView>


            {this.PersonalInfo()}
          </View>



          <View tabLabel="Education" style={styles.tabView}>
            <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>

              {this.state.EducationmodalVisible1 ?
                <View style={{ height: 100 }}></View> : null}
              <TouchableOpacity
                style={styles.EducationBottomButton}
                onPress={() => { this.setState({ EducationmodalVisible1: true }) }}>
                <Text style={styles.EducationBottomText}>
                  Add Education
              </Text>
                <Image style={{ height: 20, width: 20, tintColor: 'white', marginLeft: 10 }} source={require('../../images/add.png')}></Image>
              </TouchableOpacity>




              <View style={{ height: 100 }}></View>

              <Modal
                ref={'updateModal'}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                visible={this.state.EducationmodalVisible1}
                position="bottom"
                backdrop={true}
                coverScreen={true}
                backdropPressToClose={true}
                backdropOpacity={0.5}
                transparent={true}
                swipeToClose={true}
                onRequestClose={() => {
                  this.setState({ EducationmodalVisible1: false });
                }}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{ flex: 1 }}
                  onPressOut={() => {
                    this.setState({ EducationmodalVisible1: false });
                  }}>
                  <View style={styles.EducationModalContainer}>
                    <TouchableWithoutFeedback>
                      <View style={styles.EducationnetAlert}>
                        <ScrollView style={styles.EducationnetAlertContent}>

                          <View style={{}}>

                            <Text style={styles.Educationlabel}>
                              Degree
                                       </Text>



                            <TouchableOpacity
                              style={{
                                paddingHorizontal: 10,
                                height: 42,
                                // width:'90%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: Colors.white,
                                borderWidth: 1,
                                flexDirection: 'row',
                                borderRadius: 4,
                                marginTop: 5,
                                borderColor: Colors.medium_gray,
                              }}
                              onPress={() => {
                                this.EducationonShow4()

                              }}>
                              <View>
                                <Text
                                  style={{
                                    fontFamily: Fonts.regular,
                                    fontSize: 15,
                                    color: this.state.EducationDegree
                                      ? Colors.black
                                      : Colors.dark_gray,
                                  }}>
                                  {this.state.EducationDegree ? this.state.EducationDegree : ' Select Class / Degree'}
                                </Text>
                              </View>
                              <View>
                                <Image
                                  style={{
                                    height: 11,
                                    width: 11,
                                    tintColor: Colors.cool_gray,
                                  }}
                                  source={require('../../images/down1.png')}
                                />
                              </View>
                            </TouchableOpacity>


                            <Text style={styles.Educationlabel}>
                              Class
                                       </Text>



                            <TouchableOpacity
                              style={{
                                paddingHorizontal: 10,
                                height: 42,
                                // width:'90%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: Colors.white,
                                borderWidth: 1,
                                flexDirection: 'row',
                                borderRadius: 4,
                                marginTop: 5,
                                borderColor: Colors.medium_gray,
                              }}
                              onPress={() => {
                                this.EducationonShow5()

                              }}>
                              <View>
                                <Text
                                  style={{
                                    fontFamily: Fonts.regular,
                                    fontSize: 15,
                                    color: this.state.EducationClass
                                      ? Colors.black
                                      : Colors.dark_gray,
                                  }}>
                                  {this.state.EducationClass ? this.state.EducationClass : ' Select Class / Degree'}
                                </Text>
                              </View>
                              <View>
                                <Image
                                  style={{
                                    height: 11,
                                    width: 11,
                                    tintColor: Colors.cool_gray,
                                  }}
                                  source={require('../../images/down1.png')}
                                />
                              </View>
                            </TouchableOpacity>

                            <Text style={styles.Educationlabel}>
                              Is this your present Class ?                                       </Text>
                            <View
                              style={{
                                paddingHorizontal: 10,
                                flexDirection: 'row',
                                paddingVertical: 20,
                              }}
                              refresh={this.state.refresh}>


                              {EradioItems.map((item, key) => (
                                <RadioButton
                                  key={key}
                                  button={item}
                                  onClick={this.EducationchangeActiveRadioButton.bind(
                                    this,
                                    key,
                                  )}
                                />
                              ))}

                            </View>


                          </View>

                          <Text style={styles.Educationlabel}>Passing year</Text>


                          <TextInput
                            placeholder="Enter Passing year"
                            selectionColor={Colors.primary}
                            style={[styles.EducationtextInput, {
                              textAlignVertical: this.props.multiline ? "top" : "center",
                              borderColor: Colors.medium_gray,

                            }]}
                            keyboardType={'numeric'}
                            autoCapitalize='none'

                            value={this.state.passing_year}
                            onChangeText={passing_year => this.setState({ passing_year })}
                            returnKeyType={"next"}


                          />

                          <Text style={styles.Educationlabel}>Marks</Text>


                          <TextInput
                            placeholder="Enter Marks"
                            selectionColor={Colors.primary}
                            style={[styles.EducationtextInput, {
                              textAlignVertical: this.props.multiline ? "top" : "center",
                              borderColor: Colors.medium_gray,

                            }]}
                            keyboardType={'numeric'}
                            autoCapitalize='none'

                            value={this.state.marks}
                            onChangeText={marks => this.setState({ marks })}
                            returnKeyType={"next"}


                          />


                          <TouchableOpacity onPress={() => { this.isEducation() }} style={{
                            height: 40, width: 100, backgroundColor: Colors.reg, justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                            marginTop: 20, borderRadius: 5
                          }}><Text style={{ fontSize: 16, fontFamily: Fonts.regular, color: Colors.white }}>Add</Text></TouchableOpacity>

                          <View style={{ height: 50 }}></View>
                        </ScrollView>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </TouchableOpacity>
              </Modal>

              <UserModal
                visible={this.state.Educationvisible4}
                onSelect={this.EducationonSelect4}
                onCancel={this.EducationonCancel4}
                textchange={this.EducationChangeText}
                options={EducationData}
                navigation={this.state.navigation}
              />
              <UserModal
                visible={this.state.Educationvisible5}
                onSelect={this.EducationonSelect5}
                onCancel={this.EducationonCancel5}
                textchange={this.EducationChangeText2}
                options={EducationData}
                navigation={this.state.navigation}
              />

            </ScrollView>

            {this.Education()}
          </View>



          <View tabLabel="Family Earnings" style={styles.tabView}>
            <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>

              {this.state.modalVisiblef ?
                <View style={{ height: 100 }}></View> : null}
              <TouchableOpacity
                style={styles.RBottomButton}
                onPress={() => { this.setState({ modalVisiblef: true }) }}>
                <Text style={styles.RBottomText}>
                  Add Family Income
      </Text>
                <Image style={{ height: 20, width: 20, tintColor: 'white', marginLeft: 10 }} source={require('../../images/add.png')}></Image>
              </TouchableOpacity>




              <View style={{ height: 100 }}></View>

              <Modal
                ref={'updateModal'}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                visible={this.state.modalVisiblef}
                position="bottom"
                backdrop={true}
                coverScreen={true}
                backdropPressToClose={true}
                backdropOpacity={0.5}
                transparent={true}
                swipeToClose={true}
                onRequestClose={() => {
                  this.setState({ modalVisiblef: false });
                }}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{ flex: 1 }}
                  onPressOut={() => {
                    this.setState({ modalVisiblef: false });
                  }}>
                  <View style={styles.ModalContainer}>

                    <TouchableWithoutFeedback>
                      <View style={styles.netAlert}>


                        <ScrollView
                          style={{
                            flex: 1,
                            padding: 20,
                          }}
                          showsVerticalScrollIndicator={false}>


                          <Text style={styles.label}>Earning Member</Text>


                          <TextInput
                            placeholder="Name of earning member"
                            selectionColor={Colors.primary}
                            style={[styles.textInput, {
                              textAlignVertical: this.props.multiline ? "top" : "center",
                              borderColor: Colors.medium_gray,

                            }]}
                            keyboardType={'numeric'}
                            autoCapitalize='none'
                            value={this.state.member_name}

                            onChangeText={member_name => this.setState({ member_name })}
                            returnKeyType={"next"}


                          />


                          <View style={{}}>

                            <Text style={styles.label}>
                              Qalification
                               </Text>



                            <TouchableOpacity
                              style={{
                                paddingHorizontal: 10,
                                height: 42,
                                // width:'90%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: Colors.white,
                                borderWidth: 1,
                                flexDirection: 'row',
                                borderRadius: 4,
                                marginTop: 5,
                                borderColor: Colors.medium_gray,
                              }}
                              onPress={() => {
                                this.FonShow4()

                              }}>
                              <View>
                                <Text
                                  style={{
                                    fontFamily: Fonts.regular,
                                    fontSize: 15,
                                    color: this.state.qualification
                                      ? Colors.black
                                      : Colors.dark_gray,
                                  }}>
                                  {this.state.qualification ? this.state.qualification : ' Select Class / Degree'}
                                </Text>
                              </View>
                              <View>
                                <Image
                                  style={{
                                    height: 11,
                                    width: 11,
                                    tintColor: Colors.cool_gray,
                                  }}
                                  source={require('../../images/down1.png')}
                                />
                              </View>
                            </TouchableOpacity>

                          

                           

                          </View>

                          <View style={{}}>

                            <Text style={styles.label}>
                              Occupation
  </Text>



                            <TouchableOpacity
                              style={{
                                paddingHorizontal: 10,
                                height: 42,
                                // width:'90%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: Colors.white,
                                borderWidth: 1,
                                flexDirection: 'row',
                                borderRadius: 4,
                                marginTop: 5,
                                borderColor: Colors.medium_gray,
                              }}
                              onPress={() => {
                                this.FonShow5()

                              }}>
                              <View>
                                <Text
                                  style={{
                                    fontFamily: Fonts.regular,
                                    fontSize: 15,
                                    color: this.state.occupation
                                      ? Colors.black
                                      : Colors.dark_gray,
                                  }}>
                                  {this.state.occupation ? this.state.occupation : 'Select Occupation'}
                                </Text>
                              </View>
                              <View>
                                <Image
                                  style={{
                                    height: 11,
                                    width: 11,
                                    tintColor: Colors.cool_gray,
                                  }}
                                  source={require('../../images/down1.png')}
                                />
                              </View>
                            </TouchableOpacity>

                          </View>


                          <Text style={styles.label}>Annual Income</Text>


                          <TextInput
                            placeholder="Absolute annual income"
                            selectionColor={Colors.primary}
                            style={[styles.textInput, {
                              textAlignVertical: this.props.multiline ? "top" : "center",
                              borderColor: Colors.medium_gray,

                            }]}
                            keyboardType={'numeric'}
                            autoCapitalize='none'
                            value={this.state.income}

                            onChangeText={income => this.setState({ income })}
                            returnKeyType={"next"}


                          />


                          <TouchableOpacity onPress={() => { this.isFaimilyAdd() } } style={{
                            height: 40, width: 100, backgroundColor: Colors.reg, justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                            marginTop: 20, borderRadius: 5
                          }}><Text style={{ fontSize: 16, fontFamily: Fonts.regular, color: Colors.white }}>Add</Text></TouchableOpacity>


                          <View style={{ height: 50 }}></View>

                        </ScrollView>

                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </TouchableOpacity>
              </Modal>

              <UserModal
                visible={this.state.Fvisible4}
                onSelect={this.FonSelect4}
                onCancel={this.FonCancel4}
                textchange={this.FChangeText}
                options={FData}
                navigation={this.state.navigation}
              />
               <UserModal
                visible={this.state.Fvisible5}
                onSelect={this.FonSelect5}
                onCancel={this.FonCancel5}
                textchange={this.FChangeText2}
                options={FData}
                navigation={this.state.navigation}
              />

            </ScrollView>

            {this.FamilyEarnings()}
          </View>



          <View tabLabel="Interest" style={styles.tabView}>
            <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>

              {this.InteresrenderCheckBox()}

              <View style={{ height: 40 }}></View>

            </ScrollView>
            {this.Interest()}
          </View>



          <View tabLabel="Document" style={styles.tabView}>
            {/* <Document /> */}
            {/* {this.showDocument()} */}
            <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>

              <Text style={styles.label}>
                Document
                                 </Text>
              <View
                style={{
                  paddingHorizontal: 10,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  backgroundColor: Colors.white,
                  borderWidth: 1,

                  borderRadius: 4,

                  borderColor: Colors.medium_gray,
                }}>
                <View>
                  <Dropdown
                    containerStyle={{
                      width: width * 0.85,
                      paddingBottom: 15,
                    }}
                    fontSize={15}
                    itemTextStyle={{
                      fontFamily: Fonts.regular,
                      color: Colors.primary,
                    }}

                    itemColor={Colors.black}
                    fontFamily={Fonts.regular}
                    selectedItemColor={Colors.black}

                    textColor={
                      this.state.Document
                        ? Colors.black
                        : Colors.dark_gray
                    }
                    value={
                      this.state.Document
                        ? this.state.Document
                        : 'Select Document Type'
                    }
                    onChangeText={value => {
                      console.log(value);

                      this.setState({ Document: value })

                    }}
                    data={DocumentData}

                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={styles.label10}>Attachment</Text>
                {/* <Text style={styles.required}>*</Text> */}
              </View>
              <TouchableOpacity
                style={{
                  height: 42, marginTop: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.white,
                  borderWidth: 1,
                  borderRadius: 4,
                  borderColor: Colors.medium_gray,
                }}
                onPress={() => {
                  this.state.Document == '' ?
                    Toast.show('Select Document First', Toast.SHORT, Toast.BOTTOM)
                    : this.upload()
                }}>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                  {this.state.filename == "No file chosen" ?
                    <View style={{ backgroundColor: Colors.light_gray, paddingHorizontal: 6, paddingVertical: 6, marginLeft: 5 }}>
                      <Text style={{
                        fontSize: 16,
                        fontFamily: Fonts.regular,
                        color: this.state.filename ? Colors.black : Colors.dark_gray
                      }}>Choose File</Text>
                    </View>
                    : null}
                  <Text style={{
                    fontSize: 16,
                    paddingLeft: 4,
                    fontFamily: Fonts.regular, textAlign: 'left',
                    color: this.state.filename ? Colors.black : Colors.dark_gray
                  }}> {this.state.filename}</Text>
                </View>

              </TouchableOpacity>


              <View style={{ height: 100 }}></View>
            </ScrollView>


            {this.Document()}
          </View>



          <View tabLabel="Reference" style={styles.tabView}>
            {/* <Reference /> */}

            <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>

              {this.state.PmodalVisible1 ?
                <View style={{ height: 100 }}></View> : null}
              <TouchableOpacity
                style={styles.RBottomButton}
                onPress={() => { this.setState({ PmodalVisible1: true }) }}>
                <Text style={styles.RBottomText}>
                  Add Reference
              </Text>
                <Image style={{ height: 20, width: 20, tintColor: 'white', marginLeft: 10 }} source={require('../../images/add.png')}></Image>
              </TouchableOpacity>




              <View style={{ height: 100 }}></View>

              <Modal
                ref={'updateModal'}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                visible={this.state.PmodalVisible1}
                position="bottom"
                backdrop={true}
                coverScreen={true}
                backdropPressToClose={true}
                backdropOpacity={0.5}
                transparent={true}
                swipeToClose={true}
                onRequestClose={() => {
                  this.setState({ PmodalVisible1: false });
                }}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{ flex: 1 }}
                  onPressOut={() => {
                    this.setState({ PmodalVisible1: false });
                  }}>
                  <View style={styles.ModalContainer}>
                    <TouchableWithoutFeedback>
                      <View style={styles.netAlert}>

                        <ScrollView
                          style={{
                            flex: 1,
                            padding: 20,
                          }}
                          showsVerticalScrollIndicator={false}>

                          <Text style={styles.label}>Full Name</Text>


                          <TextInput
                            placeholder="Enter Full Name"
                            selectionColor={Colors.primary}
                            style={[styles.textInput, {
                              textAlignVertical: this.props.multiline ? "top" : "center",
                              borderColor: Colors.medium_gray,

                            }]}
                            keyboardType={'default'}
                            autoCapitalize='none'
                            value={this.state.RFullname}

                            onChangeText={RFullname => this.setState({ RFullname })}
                            returnKeyType={"next"}


                          />


                          <Text style={styles.label}>Phone Number</Text>


                          <TextInput
                            placeholder="Enter Phone Number"
                            selectionColor={Colors.primary}
                            style={[styles.textInput2, {
                              textAlignVertical: this.props.multiline ? "top" : "center",
                              borderColor: Colors.medium_gray,

                            }]}
                            keyboardType={'numeric'}
                            autoCapitalize='none'
                            value={this.state.Rphone}

                            onChangeText={Rphone => this.setState({ Rphone })}
                            returnKeyType={"next"}


                          />

                          <View style={{}}>

                            <Text style={styles.label}>
                              Occupation
                                       </Text>



                            <TouchableOpacity
                              style={{
                                paddingHorizontal: 10,
                                height: 42,
                                // width:'90%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: Colors.white,
                                borderWidth: 1,
                                flexDirection: 'row',
                                borderRadius: 4,
                                marginTop: 1,
                                borderColor: Colors.medium_gray,
                              }}
                              onPress={() => {
                                this.onShow4()

                              }}>
                              <View>
                                <Text
                                  style={{
                                    fontFamily: Fonts.regular,
                                    fontSize: 15,
                                    color: this.state.Roccpation
                                      ? Colors.black
                                      : Colors.dark_gray,
                                  }}>
                                 {this.state.Roccpation ? this.state.Roccpation :'Select Occupation'}
                                         </Text>
                              </View>
                              <View>
                                <Image
                                  style={{
                                    height: 11,
                                    width: 11,
                                    tintColor: Colors.cool_gray,
                                  }}
                                  source={require('../../images/down1.png')}
                                />
                              </View>
                            </TouchableOpacity>


                          </View>

                          <View style={{marginTop:10}}>

                          <Text style={styles.label}>
                          Relation
                                       </Text>
                          <TextInput
                            placeholder="Enter your Relation"
                            selectionColor={Colors.primary}
                            style={[styles.textInput, {
                              textAlignVertical: this.props.multiline ? "top" : "center",
                              borderColor: Colors.medium_gray,

                            }]}
                            keyboardType={'default'}
                            autoCapitalize='none'
                            value={this.state.RRelation}

                            onChangeText={RRelation => this.setState({ RRelation })}
                            returnKeyType={"next"}


                          />




                            <TouchableOpacity onPress={() => { this.isReference() }} style={{
                              height: 40, width: 100, backgroundColor: Colors.reg, justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                              marginTop: 20, borderRadius: 5
                            }}><Text style={{ fontSize: 16, fontFamily: Fonts.regular, color: Colors.white }}>Add</Text></TouchableOpacity>

                            <View style={{ height: 50 }}></View>
                          </View>




                        </ScrollView>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </TouchableOpacity>
              </Modal>

              <UserModal
                visible={this.state.visible4}
                onSelect={this.onSelect4}
                onCancel={this.onCancel4}
                textchange={this.ChangeText}
                options={Data}
                navigation={this.state.navigation}
              />

            </ScrollView>

            {this.Reference()}
          </View>



        </ScrollableTabView>

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode="date" />
      </View>
    );
  }
}

class RadioButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onClick}
        activeOpacity={0.8}
        style={[{ flexDirection: 'row', flex: 1 }, styles.radioButton]}>
        <View
          style={[
            styles.radioButtonHolder,
            {
              flexDirection: 'column',
              height: this.props.button.size,
              width: this.props.button.size,
              borderColor: this.props.button.color,
            },
          ]}>
          {this.props.button.selected ? (
            <View
              style={[
                styles.radioIcon,
                {
                  flexDirection: 'row',
                  height: this.props.button.size / 2,
                  width: this.props.button.size / 2,
                  backgroundColor: Colors.primary,
                },
              ]}
            />
          ) : null}
        </View>
        <Text style={[styles.labelX, { color: Colors.primary }]}>
          {this.props.button.label}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  tabView: {
    flex: 1
  },
  text: {
    color: 'white',

  },
  BottomText: { color: Colors.white, fontFamily: Fonts.regular, fontSize: 18 },
  BottomButton: { backgroundColor: Colors.reg, height: '100%', width: '100%', position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center' },

  BottomText2: { color: Colors.white, fontFamily: Fonts.regular, fontSize: 18 },
  BottomButton2: { backgroundColor: Colors.log, height: '100%', width: '50%', bottom: 0, justifyContent: 'center', alignItems: 'center' },
  BottomButton3: { backgroundColor: Colors.reg, height: '100%', width: '50%', bottom: 0, justifyContent: 'center', alignItems: 'center' }
  , label: {

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
  },
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

  },
  radioButton: {
    //  flexDirection: 'row',
    margin: 0,
  },

  radioButtonHolder: {
    borderRadius: 50,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioIcon: {
    //  flexDirection:'row',
    borderRadius: 50,
  },
  labelX: {
    top: 0,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: Fonts.regular
  },



  textInput2: {
    padding: 15,
    paddingVertical: Platform.OS == "ios" ? 12 : 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginTop: 5,
    fontFamily: Fonts.regular,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 4,

  },
  RBottomText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 18
  },
  RBottomButton: {
    borderRadius: 18,
    elevation: 1,
    backgroundColor: Colors.reg,
    height: 50,
    flexDirection: 'row',
    width: '70%',
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  netAlert: {
    overflow: 'hidden',
    borderRadius: 10,
    shadowRadius: 10,
    width: width * 0.8,
    minHeight: height * 0.5,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    backgroundColor: Colors.white,
  },


  ModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  Educationlabel: {

    marginTop: 15,
    color: Colors.primary,
    fontSize: 14,
    paddingVertical: 3,
    fontFamily: Fonts.medium,
  },
  EducationtextInput: {
    padding: 15,
    paddingVertical: Platform.OS == "ios" ? 12 : 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginTop: 5,
    fontFamily: Fonts.regular,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 4,

  },
  EducationBottomText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 18
  },
  EducationBottomButton: {
    borderRadius: 18,
    elevation: 1,
    backgroundColor: Colors.reg,
    height: 50,
    flexDirection: 'row',
    width: '70%',
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  EducationnetAlert: {
    overflow: 'hidden',
    borderRadius: 10,
    shadowRadius: 10,
    width: width * 0.8,
    minHeight: height * 0.5,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  EducationnetAlertContent: {
    flex: 1,
    padding: 20,
    //  marginTop:20,
  },
  EducationnetAlertTitle: {
    fontSize: 20,
    paddingTop: 20,
    color: Colors.black,
    textAlign: 'center',
    fontFamily: Fonts.bold,
  },
  EducationnetAlertDesc: {
    fontSize: 16,
    paddingTop: 10,
    alignSelf: 'center',
    width: width * 0.8,
    color: Colors.dark_gray,
    fontFamily: Fonts.light,
    paddingVertical: 5,
    textAlign: 'center',
  },
  EducationModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  Educationlabel: {
    marginTop: 10,
    color: Colors.primary,
    fontSize: 14,
    paddingVertical: 3,
    fontFamily: Fonts.medium,
  },
  EducationradioButton: {
    //  flexDirection: 'row',
    margin: 0,
  },

  EducationradioButtonHolder: {
    borderRadius: 50,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  EducationradioIcon: {
    //  flexDirection:'row',
    borderRadius: 50,
  },
  EducationlabelX: {
    top: 0,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: Fonts.regular
  },
});