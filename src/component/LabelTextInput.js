import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity ,Platform} from 'react-native';
import colors from '../common/Colors';
import Fonts from '../common/Fonts';

export default class Textinput extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontFamily: 'Roboto-Bold',fontSize: 14 }}>{this.props.label}</Text>
                <TextInput placeholder={this.props.placeholder} />
            </View>
        )
    };
}

export class LabelTextInput extends Component {
    state = {
        color: colors.medium_gray
    }
    render() {
        return (
            <View style={{ paddingVertical: 5}}>
                <Text style={{  color:colors.primary,fontFamily:Fonts.medium, marginBottom: 6, paddingLeft: 5 }}>{this.props.label}</Text>
               
                <TextInput secureTextEntry={this.props.secureTextEntry}
                 onChangeText={this.props.onChangeText} 
                 selectionColor={'#C41E28'}
                 keyboardType={this.props.keyboardType}
                 onFocus={() => this.setState({ color: colors.primary })} 
                 onBlur={() => this.setState({ color:colors.accent})}
                 editable = {this.props.editable}
                  style={{ padding: 15,color:'black',
                    paddingVertical: Platform.OS == "ios" ? 12 : 6,
                    paddingHorizontal: 10,
                    fontSize: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.white,
                    borderWidth: 1,
                    borderRadius: 4,
                    borderColor: this.state.color, 
                    fontFamily: 'Roboto-Regular',
                    textAlignVertical:this.props.multiline ? "top" : null,
                    minHeight: this.props.multiline ? 100 : null
                        }} placeholder={this.props.placeholder} value={this.props.value} />
            </View>
        )
    };
}

export class Textbtn extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 15 }}>

                <TouchableOpacity activeOpacity={0.8} 
                style={{borderRadius: 8, justifyContent: 'center', alignItems: 'center',
                height: 45, marginHorizontal:15 , backgroundColor: colors.primary, elevation: 2, marginTop: 20, }} onPress={this.props.onPress}>
                    <Text style={{  fontFamily:Fonts.bold,fontSize:16 ,color:colors.white}}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    };
}