

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
export default class FamilyEarnings extends React.Component {
  state = {
    modalVisible1: false, refresh: false, Fvisible4: false,  selectedItem: '',member_name:'',
    qualification: '',
occupation: '',
relation_with_candidate: '',
income: ''

  }
  componentDidMount() {
    FradioItems.map(item => {
      if (item.selected == true) {
        this.setState({ selectedItem: item.value });
      }
    });
  }
  FonShow4 = () => {
    this.setState({ Fvisible4: true });
  };

  FonSelect4 = (id, name, filter) => {
    console.log('kmkk', id, 'name', name);

    this.setState({
      Fvisible4: false, qualification: name
    });

  };

  FonCancel4 = () => {
    this.setState({
      Fvisible4: false,
    });
  };

  FChangeText = (filter, text) => {

    this.setState({ Fvisible4: false, Class: filter });
  };

  FchangeActiveRadioButton(index) {

    FradioItems.map(item => {
      item.selected = false;
    });
    FradioItems[index].selected = true;
    this.setState({ refresh: !this.state.refresh });
    this.setState({ FradioItems: FradioItems }, () => {
      this.setState({ relation_with_candidate: FradioItems[index].value });
      console.log(this.state.FradioItems);

    });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>

        {this.state.modalVisible1 ?
          <View style={{ height: 100 }}></View> : null}
        <TouchableOpacity
          style={styles.BottomButton}
          onPress={() => { this.setState({ modalVisible1: true }) }}>
          <Text style={styles.BottomText}>
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
          visible={this.state.modalVisible1}
          position="bottom"
          backdrop={true}
          coverScreen={true}
          backdropPressToClose={true}
          backdropOpacity={0.5}
          transparent={true}
          swipeToClose={true}
          onRequestClose={() => {
            this.setState({ modalVisible1: false });
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{ flex: 1 }}
            onPressOut={() => {
              this.setState({ modalVisible1: false });
            }}>
            <View style={styles.ModalContainer}>
              
              <TouchableWithoutFeedback>
                <View style={styles.netAlert}>
                 
             
                  <ScrollView 
                  style={{flex: 1,
    padding: 20,}}
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
                              color: this.state.Class
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

                      <Text style={styles.label}>
                        Is this your present Class ?                                       </Text>
                      <View
                        style={{
                          paddingHorizontal: 10,
                          flexDirection: 'row',
                          paddingVertical: 20,
                        }}
                        refresh={this.state.refresh}>


                        {FradioItems.map((item, key) => (
                          <FRadioButton
                            key={key}
                            button={item}
                            onClick={this.FchangeActiveRadioButton.bind(
                              this,
                              key,
                            )}
                          />
                        ))}

                      </View>


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
                          this.FonShow4()

                        }}>
                        <View>
                          <Text
                            style={{
                              fontFamily: Fonts.regular,
                              fontSize: 15,
                              color: this.state.Class
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


<TouchableOpacity onPress={()=>{this.setState({modalVisible1:false})}} style={{height:40,width:100,backgroundColor:Colors.reg,justifyContent:'center',alignItems:'center',alignSelf:'center',
marginTop:20,borderRadius:5}}><Text style={{fontSize:16,fontFamily:Fonts.regular,color:Colors.white}}>Add</Text></TouchableOpacity>


                    <View style={{height:50}}></View>

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

      </ScrollView>

    )
  }
}

class FRadioButton extends React.Component {
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
    marginTop: 5,
    fontFamily: Fonts.regular,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 4,

  },
  BottomText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 18
  },
  BottomButton: {
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
  netAlertContent: {
    flex: 1,
    padding: 20,
    //  marginTop:20,
  },
  netAlertTitle: {
    fontSize: 20,
    paddingTop: 20,
    color: Colors.black,
    textAlign: 'center',
    fontFamily: Fonts.bold,
  },
  netAlertDesc: {
    fontSize: 16,
    paddingTop: 10,
    alignSelf: 'center',
    width: width * 0.8,
    color: Colors.dark_gray,
    fontFamily: Fonts.light,
    paddingVertical: 5,
    textAlign: 'center',
  },
  ModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  label: {
    marginTop: 10,
    color: Colors.primary,
    fontSize: 14,
    paddingVertical: 3,
    fontFamily: Fonts.medium,
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