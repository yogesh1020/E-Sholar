import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, FlatList,Image  ,TouchableOpacity,  Dimensions ,
  Text, TextInput, ActivityIndicator, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from './modalStyle';

import Colors from '../common/Colors';
import Fonts from '../common/Fonts';

import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";
import { StackActions, NavigationActions } from "react-navigation";


const { width, height } = Dimensions.get('window')

export default class UserModal extends Component {
  constructor (props, ctx) {
    super(props, ctx)

    this.state = {
      filter: '',
      loading: false,
      ds: props.options,
      arrayInput:"",
      // noResult:"No Data found",
       
    }
  }



  componentWillReceiveProps (newProps) {
    if ((!this.props.visible && newProps.visible) || (this.props.options !== newProps.options)) {
      this.setState({
        filter: '',
        ds: newProps.options,
      })
    }
  }

  render () {
    const {
      title,
      titleTextStyle,
      overlayStyle,
      cancelContainerStyle,
      renderList,
      keyExtractor,
      renderCancelButton,
      visible,
      modal,
      onCancel
    } = this.props

    const renderedTitle = (!title) ? null : (
      <Text style={titleTextStyle || styles.titleTextStyle}>{title}</Text>
    )

    return (
      <Modal
        onRequestClose={onCancel}
        {...modal}
        visible={visible}
        supportedOrientations={['portrait', 'landscape']}
      >
        
        <View style={overlayStyle || styles.overlay}>
       
      
          {renderedTitle}
          {(renderList || this.renderList)()}

        </View>
      </Modal>
    )
  }

  renderList = () => {
    const {
      showFilter,
      autoFocus,
      listContainerStyle,
      androidUnderlineColor,
      placeholderText,
      placeholderTextColor,
      filterTextInputContainerStyle,
      filterTextInputStyle,
    } = this.props;

    const filter = (!showFilter) ? null : (
      <View>
      <View style={filterTextInputContainerStyle || styles.filterTextInputContainer}>
      <TextInput
          onChangeText={(filter) => this.setState({filter}) , this.onFilterChange }
          autoCorrect={false}
          blurOnSubmit={true}
          autoFocus={true}
          autoCapitalize="none"
          underlineColorAndroid={androidUnderlineColor}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholderText}
          onSubmitEditing={this.onSearchChange}
          style={filterTextInputStyle || styles.filterTextInput} />
      </View>

      {this.state.ds == 0 ? 
          <TouchableOpacity
          activeOpacity={0.1}
          onPress={() => this.props.onSelect(name  , this.state.filter) }
          // onPress={() => this.props.onSelect(filter)  }
          style={{
            borderBottomWidth:0.8,
            borderBottomColor:Colors.light_gray,
            paddingTop:10, 
            width: '100%' ,
            maxHeight:50,
            backgroundColor: Colors.white,
        }}>
     
     <TextInput
         onChangeText={(filter) => this.setState({filter})}
         editable={false}
         value={this.state.filter}          
         placeholderTextColor={placeholderTextColor}
         androidUnderlineColor= 'rgba(0,0,0,0)' 
         style={{
          fontFamily:Fonts.regular,
          fontSize:15,
          color:Colors.black,
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
         onSubmitEditing={this.onSearchChange}
         underlineColorAndroid = "transparent"
          placeholderTextColor = "red"
          />
     </TouchableOpacity> 
  : null }
          
</View>


    )

    return (
      <View style={listContainerStyle || styles.listContainer}>
       
          {(this.renderCancelButton || this.renderCancelButton)()}
       
        {filter}
        {this.renderOptionList()}
      </View>
    )
  }

  renderOptionList = () => {
    const {
      noResultsText,
      flatListViewProps,
      keyExtractor,
      keyboardShouldPersistTaps
    } = this.props

    const { ds } = this.state
    if(this.state.loading) {
        return(
            <View style={styles.noResults}>
            <ActivityIndicator size="large" color={Colors.primary} animating={this.state.loading} />
            </View>
        )
            }
    else if (ds.length == 0) {
      return (
       
            <View style={styles.noResults}>
              <Text style={styles.noResultsText}>{this.state.noResult}</Text>
            </View>
         
      )
    } else {
      return (
        <FlatList
          keyExtractor={keyExtractor||this.keyExtractor}
          {...flatListViewProps}
          data={ds}
          renderItem={(item)=> this.renderOption(item.item)}
          keyboardShouldPersistTaps="always"
        />
      )
    }
  }

  renderOption = (item) => {
   
    
    const {
        selectedOption,
        renderOption,
        optionTextStyle,
        selectedOptionTextStyle
    } = this.props

    const { id, name} = item

    let style = styles.optionStyle
    let textStyle = optionTextStyle||styles.optionTextStyle

    if (id === selectedOption) {
      style = styles.selectedOptionStyle
      textStyle = selectedOptionTextStyle ||styles.selectedOptionTextStyle
    }
    if (renderOption) {
      return renderOption(item, id === selectedOption)
     
    } else {

      return (
<View>
       
        <TouchableOpacity activeOpacity={0.7}
          style={[style, {flexDirection:'row', flex:1,  paddingHorizontal:20 }]}
          onPress={() => this.props.onSelect(id , name  , this.state.filter)  
            // ,  this.props.onText(id, name , this.state.filter)
          }
        >
        <Text style={textStyle}>{name}</Text>
        {/* <Text style={textStyle}>{phone}</Text> */}
        </TouchableOpacity>
</View>
      )
    }
  }
  keyExtractor = (item, index) => item.id;

  renderCancelButton = () => {
    const {
      cancelButtonStyle,
      cancelButtonTextStyle,
      cancelButtonText
    } = this.props

    return (
      <TouchableOpacity onPress={this.props.onCancel}
        activeOpacity={0.7}
        style={cancelButtonStyle || styles.cancelButton}>

    {/* <ImageBackground 
     source={require('../images/primaryfill.png')}
     style={{height: 35, width: 35 , justifyContent:'center' , alignItems:'center' }}> */}
         <Image 
          source={require('../images/IClose.png')}
          style={{height:25 , width: 25 , tintColor:Colors.primary}}
          />
    {/* </ImageBackground> */}

          {/* <Icon name="times" color="#e3202d" size={35} /> */}
 
      </TouchableOpacity>
    )
  }

  onFilterChange = (text) => {
    const { options } = this.props
      const filter = text.toLowerCase()
     
      const filtered = (!filter.length)
        ? options
        : options.filter(({ searchKey, name , id }) => (
          0 <= name.toLowerCase().indexOf(filter) ||
            (searchKey && 0 <= searchKey.toLowerCase().indexOf(filter))
            
            
        ))
      this.setState({
        filter: text.toLowerCase(),
        ds: filtered
      })
      //  console.log("filter", this.state.ds);
  }

  onSearchChange = (text) => {
    this.props.textchange( this.state.filter , text) 
    //  console.log('Cuser',this.state.filter);
  }
}

UserModal.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  androidUnderlineColor: PropTypes.string,
  cancelButtonText: PropTypes.string,
  title: PropTypes.string,
  noResultsText: PropTypes.string,
  visible: PropTypes.bool,
  showFilter: PropTypes.bool,
  modal: PropTypes.object,
  selectedOption: PropTypes.string,
  renderOption: PropTypes.func,
  renderCancelButton: PropTypes.func,
  renderList: PropTypes.func,
  flatListViewProps: PropTypes.object,
  filterTextInputContainerStyle: PropTypes.any,
  filterTextInputStyle: PropTypes.any,
  cancelContainerStyle: PropTypes.any,
  cancelButtonStyle: PropTypes.any,
  cancelButtonTextStyle: PropTypes.any,
  titleTextStyle: PropTypes.any,
  overlayStyle: PropTypes.any,
  listContainerStyle: PropTypes.any,
  optionTextStyle:PropTypes.any,
  selectedOptionTextStyle:PropTypes.any,
  keyboardShouldPersistTaps: PropTypes.string
}

UserModal.defaultProps = {
  placeholderText: 'Search...',
  placeholderTextColor: '#ccc',
  androidUnderlineColor: 'rgba(0,0,0,0)',
  cancelButtonText: 'Close',
  noResultsText: 'No matches',
  visible: false,
  showFilter: true,
  keyboardShouldPersistTaps: 'never'
}
