import React from 'react';
import {
    View,
    Text,
    TextInput,ScrollView,StyleSheet,Dimensions,TouchableOpacity
}from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import {Dropdown} from '../../component/dropdown';
import DocumentPicker from 'react-native-document-picker';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import Toast from 'react-native-simple-toast';
let DocumentData = [
  {name: '10th Marksheet', id: '1'},
  {name: '12th Marksheet', id: '2'},
  {name:'Graduation Marksheet',id:'3'},
  {name:'PG Degree',id:'4'},
  {name:'Others',id:'5'},
  {name:'Passport',id:'6'},
  {name:'PAN Card',id:'7'},
  {name:'Birth certificate',id:'8'},
  {name:'Age Proof',id:'9'},
  {name:'Resume',id:'10'},

]

export default class Document extends React.Component{
    state={
      Document:'',     filename: "No file chosen",
    }
    async upload() {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
  
        console.log('res', res);
        this.setState({ filename: res.name })
  
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
    render(){
        return(
            <ScrollView  style={{ flex:1,paddingHorizontal:20,paddingVertical:10}}>

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
                                     valueExtractor={({id}) => id}
                                     labelExtractor={({name}) => name}
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
                                     onChangeText={value =>{
                                      this.setState({Document:value})
                                       
                                     }}
                                     data={DocumentData}
                                     ref={(ref) => {  this.Document = ref }}
                                   />
                                 </View>
                               </View>
                          
                               <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.label10}>Attachment</Text>
                                {/* <Text style={styles.required}>*</Text> */}
                              </View>
                              <TouchableOpacity
                                style={{
                                  height: 42,
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
                                  :this.upload()
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

           
                            <View style={{height:100}}></View>
                            </ScrollView>
            
                   
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
  
    },
    label10: {
      marginTop: 10,
      color: Colors.primary,
      fontSize: 14,
      paddingVertical: 3,
      fontFamily: Fonts.medium,
    },
  });