import React from 'react';
import {
  View,
  Text, Image, TouchableWithoutFeedback,
  TextInput, ScrollView, StyleSheet, TouchableOpacity, Modal, Dimensions
} from 'react-native';
import UserModal from '../../component/UserModal';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

var width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
var EducationData = [
  {name: 'KG',id:'1'},
  {name: 'Class 1',id:'2'},
  {name: 'Class 2',id:'3'},
  {name: 'Class 3',id:'4'},
  {name: 'Class 4',id:'5'},
  {name: 'Class 5',id:'6'},
  {name: 'Class 6',id:'7'},
  {name: 'Class 7',id:'8'},
  {name: 'Class 8',id:'9'},
  {name: 'Class 9',id:'10'},
  {name: 'Class 10',id:'11'},
  {name: 'Class 11',id:'12'},
  {name: 'Class 12',id:'13'},
  {name: 'Class 12 Passed',id:'14'},
  {name: 'Polytechnic/Diploma',id:'15'},
  {name: 'ITI',id:'16'},
  {name: 'Vocational Course',id:'17'},
  {name: 'Coaching Classes',id:'18'},
  {name: 'Graduation',id:'19'},
  {name: 'Post Graduation',id:'20'},
  {name:'Post Graduation Diploma',id:'21'},
  {name:'PhD',id:'22'},
  {name:'Post Doctoral',id:'23'},
  {name:'Others',id:'24'}
];
const EradioItems = [
  {
    label: 'Yes',
    size: 20,
    color: Colors.primary,
    selected: true,
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
export default class Education extends React.Component {
  state = {
    EducationmodalVisible1: false,   refresh: false,  Educationvisible4: false,EducationClass:'',      EducationselectedItem: '',
  }
componentDidMount(){
  radioItems.map(item => {
    if (item.selected == true) {
      this.setState({ selectedItem: item.value });
    }
  });
}
EducationonShow4 = () => {
    this.setState({Educationvisible4: true});
  };

  EducationonSelect4= (id, name,filter) => {
     console.log('kmkk',id, 'name',name);
      
     this.setState({
      Educationvisible4: false,Class:name
    });
     
  };

  EducationonCancel4 = () => {
    this.setState({
      Educationvisible4: false,
    });
  };

  EducationChangeText = (filter, text) => {
    
 this.setState({Educationvisible4: false,Class:filter});
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

  render() {
    return (
      <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>
       
       {this.state.EducationmodalVisible1 ?
        <View style={{height:100}}></View>:null}
        <TouchableOpacity
          style={styles.EducationBottomButton}
          onPress={() => { this.setState({EducationmodalVisible1:true})}}>
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
                  <View style={styles.EducationnetAlertContent}>
  
                  <View style={{}}>
                                    
                                       <Text style={styles.Educationlabel}>
                                         Class / Degree
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
                                         marginTop:5,
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
                                             color: this.state.EducationClass
                                               ? Colors.black
                                               : Colors.dark_gray,
                                           }}>
                                        {this.state.EducationClass ? this.state.EducationClass :' Select Class / Degree'}
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
                            paddingHorizontal:10,  
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

           
              onChangeText={fname => this.setState({ fname })}
              returnKeyType={"next"}
              

            />


                  </View>
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
        style={[{ flexDirection: 'row', flex: 1 }, styles.EducationradioButton]}>
        <View
          style={[
           styles.EducationradioButtonHolder,
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
                styles.EducationradioIcon,
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
        <Text style={[styles.EducationlabelX, { color: Colors.primary }]}>
          {this.props.button.label}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
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
marginTop:5,
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
      marginTop:  20,
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