import React from 'react';
import {
    View,
    Text,
    TextInput,ScrollView,StyleSheet,TouchableOpacity,Dimensions,FlatList
}from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {Dropdown} from '../../component/dropdown';
import CheckBox from 'react-native-check-box'
const radioItems = [
  {
    label: 'Male',
    size: 20,
    color: Colors.primary,
    selected: true,
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
  {name: 'Andman & Nicobar', id: '1'},
  {name: 'ANdhra Pradesh', id: '2'},
  {name:'Assam',id:'3'},
  {name:'Bihar',id:'4'},
  {name:'Chandigarh',id:'5'},
  {name:'Delhi',id:'6'},
  {name:'Goa',id:'7'},
  {name:'Gujrat',id:'8'},
  {name:'Haryana',id:'9'},
  {name:'Keral',id:'10'}

];
let District = [
  {name: 'Andman & Nicobar', id: '1'},
  {name: 'ANdhra Pradesh', id: '2'},
  {name:'Assam',id:'3'},
  {name:'Bihar',id:'4'},
  {name:'Chandigarh',id:'5'},
  {name:'Delhi',id:'6'},
  {name:'Goa',id:'7'},
  {name:'Gujrat',id:'8'},
  {name:'Haryana',id:'9'},
  {name:'Keral',id:'10'}

];
let City = [
  {name: 'Andman & Nicobar', id: '1'},
  {name: 'ANdhra Pradesh', id: '2'},
  {name:'Assam',id:'3'},
  {name:'Bihar',id:'4'},
  {name:'Chandigarh',id:'5'},
  {name:'Delhi',id:'6'},
  {name:'Goa',id:'7'},
  {name:'Ahmedabad',id:'8'},
  {name:'Haryana',id:'9'},
  {name:'Keral',id:'10'}

];
let Religion = [
  {name: 'Buddhism', id: '1'},
  {name: 'Christian', id: '2'},
  {name:'Hindu',id:'3'},
  {name:'Jain',id:'4'},
  {name:'Parsi',id:'5'},
  {name:'Sikh',id:'6'},
  {name:'Muslim',id:'7'},
];
let Category = [
  {name: 'General', id: '1'},
  {name: 'NTDNT', id: '2'},
  {name:'OBC-C',id:'3'},
  {name:'OBC-NC',id:'4'},
  {name:'SC',id:'5'},
  {name:'ST',id:'6'},
  {name:'VJ/NT',id:'7'},
  {name:'Other Reservation',id:'8'}
];

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class PersonalIfo extends React.Component{
    state={
        inputBorderColor1: Colors.medium_gray,
        inputBorderColor2: Colors.medium_gray,
        inputBorderColor3: Colors.medium_gray,
        inputBorderColor4: Colors.medium_gray,
        inputBorderColor5: Colors.medium_gray,
        inputBorderColor6: Colors.medium_gray,
        inputBorderColor7: Colors.medium_gray,
        inputBorderColor8: Colors.medium_gray,
        inputBorderColor9: Colors.medium_gray,
        isDateTimePickerVisible:false,
        dob:'',
        refresh: false,
        checkData: [
          {
            value: 0,
            id: 0,
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
        lname:'',
        fname:'',
        email:'',
        phone:'',
        atharno:'',
        dob:'',
        paddress:'',
        pincode:'',
        state:'',
        district:'',
        city:'',
        religion:'',
        category:'',
        gender:'',
        fincome:'',
        others1:'',
        other2:''  
      }
       _showDateTimePicker = () =>
       this.setState({isDateTimePickerVisible: true});
     _hideDateTimePicker = () =>
       this.setState({isDateTimePickerVisible: false});
     _handleDatePicked = date => {
       this.setState({Sdate: date});
       this._hideDateTimePicker();
     };



  onClick(item, index) {

    this.state.checkData[index].check = !this.state.checkData[index].check
    console.log('loggg', item, index);

    this.setState({ refresh: !this.state.refresh })

  }

  changeActiveRadioButton(index) {
 
    radioItems.map(item => {
      item.selected = false;
    });
    radioItems[index].selected = true;
    this.setState({ refresh: !this.state.refresh });
    this.setState({ radioItems: radioItems }, () => {
      this.setState({ selectedItem: radioItems[index].value });
      console.log(this.state.radioItems);

    });
  }
  CheckValueIsNumberOrNot = () => {

    if (isNaN(this.state.phone)) {
      Toast.show(
        "Number is invalid ",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else { }

  }
  Update_Profile=()=>{
 
    if(!this.state.atharno){
        Toast.show(
          "Please Enter Aathar No",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
      else if(!this.state.dob){
        Toast.show(
          "Please Select Date of birth",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
      else if(!this.state.paddress){
        Toast.show(
          "Please Enter Postal Address",
          Toast.SHORT,
          Toast.BOTTOM
        );

      }
      else if(!this.state.pincode){
        Toast.show(
          "Please Enter PinCode",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
      else if(!this.state.state){
        Toast.show(
          "Please Select State",
          Toast.SHORT,
          Toast.BOTTOM
        );
    
      }
      else if(!this.state.district){
        Toast.show(
          "Please Select District",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
      else if(!this.state.city){
        Toast.show(
          "Please Select City",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
      else if(!this.state.religion){
        Toast.show(
          "Please Select Religion",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
      else if(!this.state.category){
        Toast.show(
          "Please Select Category",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
      else if(!this.state.fincome){
        Toast.show(
          "Please Enter Family Income",
          Toast.SHORT,
          Toast.BOTTOM
        );
   } else {
       this.setState({ loading: true });
      var Request = {
  
          "action":"personal_info",
          "studentid":"1",
          "adharno":this.state.atharno,
          "dob":this.state.dob,
          "address":this.state.paddress,
          "pincode":this.state.pincode,
          "state":this.state.state,
          "district":this.state.district,
          "city":this.state.city,
          "religion":this.state.religion,
          "category":this.state.category,
          "gender":this.state.gender,
          "family_income":this.state.fincome,
          "are_you_physically_challenged":other1,
          "are_you_looking_abroad_student":other2
          
      };
       console.log( API.login);  
       console.log(JSON.stringify(Request));
       
        // NetInfo.fetch().then(state => {
        //   if (state.isConnected) {
        //     timeout(
        //       15000,
        //       fetch('http://trivediservices.com/scholar/api.php', {
        //         method: 'POST',
        //         headers: {
        //           Accept: 'application/json',
        //           'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(Request),
        //       })
        //         .then(res => res.json())
        //         .then(res => {
        //           console.log('register Response', res.response);
        //           if (res.response.code == '200') {
        //             const resetAction = StackActions.reset({
        //               index: 0,
        //               actions: [
        //                 NavigationActions.navigate({ routeName: 'Login' }),
        //               ],
        //             });
        //             this.props.navigation.dispatch(resetAction);
        
        //             this.setState({ loading: false });
        //           } else {
        //             setTimeout(() => {
        //               Toast.show(res.response.message, Toast.SHORT, Toast.BOTTOM);
        //             }, 50);
        //             this.setState({ loading: false });
        //           }
        //         })
        //         .catch(e => {
        //           this.setState({ loading: false });
        //           console.log(e);
        //           Toast.show(
        //             'Something went wrong...',
        //             Toast.SHORT,
        //             Toast.BOTTOM,
        //           );
        //         }),
        //     ).catch(e => {
        //       console.log(e);
        //       this.setState({ loading: false });
        //       Toast.show(
        //         'Please Check your internet connection',
        //         Toast.SHORT,
        //         Toast.BOTTOM,
        //       );
        //     });
        //   } else {
        //     this.setState({ loading: false });
        //     Toast.show(
        //       'Please Check your internet connection',
        //       Toast.SHORT,
        //       Toast.BOTTOM,
        //     );
        //   }
        // });
    
    }
  
  }

  Profile=()=>{
   
  
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
      if(!this.state.fname){
        Toast.show(
          "Please Enter First name",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
      else if(!this.state.lname){
        Toast.show(
          "Please Enter Last name",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
     
      else if (this.CheckValueIsNumberOrNot() == "") {
        Toast.show(
          "Number is invalid..",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
      else if(!this.state.email){
        Toast.show(
          "Please Enter Email",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
      else if (reg.test(this.state.email) === false) {
        Toast.show(
          "Email is invalid.",
          Toast.SHORT,
          Toast.BOTTOM
        );
      }
      else if(!this.state.phone){
        Toast.show(
          "Please Enter Phone",
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
      }
      else if(!this.state.repassword){
        Toast.show(
          "Please Enter Confirm Password",
          Toast.SHORT,
          Toast.BOTTOM
        );
  
      }
      else if(this.state.password != this.state.repassword){
        Toast.show(
          "Please Enter Same password",
          Toast.SHORT,
          Toast.BOTTOM
        );
        
    } else {
       this.setState({ loading: true });
      var Request = {
  
          "action":"register",
          "email":this.state.email,
          "password":this.state.password,
          "firstname":this.state.fname,
          "lastname":this.state.lname,
          "mobile":this.state.phone,
          
      };
       console.log( API.login);  
       console.log(JSON.stringify(Request));
       
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
                  console.log('register Response', res.response);
                  if (res.response.code == '200') {
                    const resetAction = StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({ routeName: 'Login' }),
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
    
    
      }
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
              paddingVertical: 14,marginTop:0,
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
    render(){
        return(
            <ScrollView  style={{ flex:1,paddingHorizontal:20,paddingVertical:10}}>


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
{                              this.state.dob ?   moment(this.state.dob).format('DD/MM/YYYY') :"Date of birth"}
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
                                borderColor: this.state.inputBorderColor6,
                              
                              }]}
                              onFocus={() => this.setState({ inputBorderColor6: Colors.primary })}
                              onBlur={() =>
                                this.setState({ inputBorderColor6: Colors.medium_gray })
                              }
                              autoCapitalize='none'
            
                              ref='repassword'
                              placeholder="Enter PinCode"
                              returnKeyType={"next"}
                              keyboardType={'phone-pad'}
                              onSubmitEditing={(event) => {
                                // this.refs.phone.focus();
                              }}
                              onChangeText={repassword => this.setState({ repassword })}
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
                                     valueExtractor={({id}) => id}
                                     labelExtractor={({name}) => name}
                                     itemColor={Colors.black}
                                     fontFamily={Fonts.regular}
                                     selectedItemColor={Colors.black}
                                  
                                     textColor={
                                       this.state.type
                                         ? Colors.black
                                         : Colors.dark_gray
                                     }
                                     value={
                                       this.state.type
                                         ? this.state.type
                                         : 'Select your state'
                                     }
                                     onChangeText={value =>{
                                       console.log(value);
                                       
                                     }}
                                     data={State}
                                     ref={(ref) => {  this.type = ref }}
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
                                     valueExtractor={({id}) => id}
                                     labelExtractor={({name}) => name}
                                     itemColor={Colors.black}
                                     fontFamily={Fonts.regular}
                                     selectedItemColor={Colors.black}
                                  
                                     textColor={
                                       this.state.type
                                         ? Colors.black
                                         : Colors.dark_gray
                                     }
                                     value={
                                       this.state.type
                                         ? this.state.type
                                         : 'Select your District'
                                     }
                                     onChangeText={value =>{
                                       console.log(value);
                                       
                                     }}
                                     data={District}
                                     ref={(ref) => {  this.type = ref }}
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
                                     valueExtractor={({id}) => id}
                                     labelExtractor={({name}) => name}
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
                                     onChangeText={value =>{
                                       console.log(value);
                                       
                                     }}
                                     data={City}
                                     ref={(ref) => {  this.type = ref }}
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
                                     valueExtractor={({id}) => id}
                                     labelExtractor={({name}) => name}
                                     itemColor={Colors.black}
                                     fontFamily={Fonts.regular}
                                     selectedItemColor={Colors.black}
                                  
                                     textColor={
                                       this.state.type
                                         ? Colors.black
                                         : Colors.dark_gray
                                     }
                                     value={
                                       this.state.type
                                         ? this.state.type
                                         : 'Select your Religion'
                                     }
                                     onChangeText={value =>{
                                       console.log(value);
                                       
                                     }}
                                     data={Religion}
                                     ref={(ref) => {  this.type = ref }}
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
                                     valueExtractor={({id}) => id}
                                     labelExtractor={({name}) => name}
                                     itemColor={Colors.black}
                                     fontFamily={Fonts.regular}
                                     selectedItemColor={Colors.black}
                                  
                                     textColor={
                                       this.state.type
                                         ? Colors.black
                                         : Colors.dark_gray
                                     }
                                     value={
                                       this.state.type
                                         ? this.state.type
                                         : 'Select your Category'
                                     }
                                     onChangeText={value =>{
                                       console.log(value);
                                       
                                     }}
                                     data={Category}
                                     ref={(ref) => {  this.type = ref }}
                                   />
                                 </View>
                               </View>



                               <Text style={styles.label}>
Gender                                   </Text>
                                     <View
                          style={{
                            paddingHorizontal:10,  
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
                             
                              onChangeText={email => this.setState({ email })}
                            />

{this.renderCheckBox()}
                            <View style={{height:100}}></View>


                            <DateTimePicker
                             isVisible={this.state.isDateTimePickerVisible}
                             onConfirm={this._handleDatePicked}
                             onCancel={this._hideDateTimePicker}
                             mode="date"/>
                            </ScrollView>
            
                   
        )
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
  });
