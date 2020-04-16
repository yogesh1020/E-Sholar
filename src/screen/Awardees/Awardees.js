// 
import React, { Component } from 'react';
import { View, Text, FlatList,ScrollView,SafeAreaView, StatusBar,TouchableOpacity } from 'react-native';
import Header from '../../component/Header';
import Loader from '../../common/Loader';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts' 
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/FontAwesome';
const Datasource = [
  
  {
      icon: 'home',
      title: 'RNB HOusing Finance Limited Protsahan Schoolarship 2018-19',
      title1: '1st Yr MBA, 3rd/4th Yr BA.LLB'
  },
  {
      icon: 'question-circle',
      title: 'RNB HOusing Finance Limited Protsahan Schoolarship 2018-19',
      title1: '1st Yr MBA, 3rd/4th Yr BA.LLB'
  },
  {
      icon: 'graduation-cap',
      title: 'RNB HOusing Finance Limited Protsahan Schoolarship 2018-19',
      title1: '1st Yr MBA, 3rd/4th Yr BA.LLB'
  }, 
  {
      icon: 'trophy',
      title: 'RNB HOusing Finance Limited Protsahan Schoolarship 2018-19',
      title1: '1st Yr MBA, 3rd/4th Yr BA.LLB'
    
  } ,
  {
      icon: 'edit',
      title: 'RNB HOusing Finance Limited Protsahan Schoolarship 2018-19',
      title1: '1st Yr MBA, 3rd/4th Yr BA.LLB'
    
  } ,
  {
      icon: 'key',
      title: 'RNB HOusing Finance Limited Protsahan Schoolarship 2018-19',
      title1: '1st Yr MBA, 3rd/4th Yr BA.LLB'
    
  } ,

];
export default class Awardees extends Component {
  state={
    loading:false
  }


render_FlatList_footer = () => {
 
    var footer_View = (
 
    <View style={{height:30}}>
 
  
    </View>
 
    );
 
    return footer_View;
 
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
            <StatusBar backgroundColor={Colors.reg} barStyle='light-content' />
            <Header
              backIcon={require('../../images/menu.png')}  
              pageTitle="Awardees"
              back={() => {
                this.props.navigation.openDrawer();
              }}
         
        />

        <Loader loading={this.state.loading}/>
       
      <View style={{ flex: 1, backgroundColor:Colors.whites,paddingHorizontal:12 }}>
      <View style={{height:10}}>
 
  
 </View>

       
        <ScrollView showsVerticalScrollIndicator={false}>
   <View style={{elevation:2,flex:1,backgroundColor:'white'}}>

   <FlatList
                    style={{ marginTop: 10 }}
                    data={Datasource}
                    ListFooterComponent={this.render_FlatList_footer}
                    renderItem={({ item }) =>
                        <View style={{ padding: 0,width:'100%',height:100,alignSelf:'center',margin:8,borderColor:Colors.log,borderWidth:1 }}>
                        
                             <View style={{flexDirection: 'row', height:'100%' }}>
                                <View style={{
                                  height:'96%',width:80,backgroundColor:Colors.light_gray,justifyContent:'center',alignItems:'center',margin:2
                                }}>
                                  <View style={{flexDirection:'column',height:50}}>

                                  <Text style={{ textAlign:'left', flex: 4, color: Colors.reg, fontFamily: 'Roboto-Bold', fontSize: 15 }}>15</Text>
                                 <Text style={{ textAlign:'left', flex: 4, color: Colors.reg, fontFamily: 'Roboto-Bold', fontSize: 15 }}>Awardees</Text>

                                  </View>
                                </View>
                                
                                <View style={{flexDirection:'column',height:'100%',width:'80%',alignSelf:'center',marginLeft:10,marginTop:10}}>
                                <Text style={{ textAlign:'left', flex: 4, color: Colors.reg, fontFamily:Fonts.regular, fontSize: 15 }}>{item.title}</Text>
                                <Text style={{ textAlign:'left', flex: 4, color: Colors.primary, fontFamily:Fonts.thin, fontSize: 15,marginTop:10 }}>{item.title1}</Text>
                                </View>
                                
                            </View>
                    
               
                        </View>
                    }
                />

   </View>
   
       
        </ScrollView>
        
      
      
        </View>
      </SafeAreaView>
    )
  };
}