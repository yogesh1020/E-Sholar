import React from 'react';
import {
  View,
  Text,
  TextInput, ScrollView, StyleSheet, FlatList
} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import CheckBox from 'react-native-check-box'
export default class Interest extends React.Component {
  state = {
    refresh: false,
    InterestcheckData: [
      {
        value: 0,
        id: 0,
        check: true,
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
        check: true,
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
        check: true,
        name: 'Literacy art (Poetry, essay story)'
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

    ],

  }

  InteresonClick(item, index) {

    this.state.checkData[index].check = !this.state.checkData[index].check
    console.log('loggg', item, index);

    this.setState({ refresh: !this.state.refresh })

  }

  InteresrenderCheckBox() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={this.state.InterestcheckData}

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

  render() {
    return (
      <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>

        {this.InteresrenderCheckBox()}

        <View style={{height:40}}></View>

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

  }
});