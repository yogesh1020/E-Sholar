
// import React, { Component } from 'react'
// import {
//   View,
//   Image,
//   StatusBar,
//   Dimensions,
//   Text,FlatList,TouchableOpacity
// } from 'react-native';
// import Swiper from 'react-native-swiper';
// import Colors from '../common/Colors';
// import Fonts from '../common/Fonts';
// import { color } from 'react-native-reanimated';
// console.disableYellowBox = true;
// const { width, height } = Dimensions.get('window')
// export default class extends Component {
//   state={
//     dataSource:[
//       {
//         one:require('../images/search.png'),
//         two:'Loking For a',
//         three:'SCHOLARSHIPS',
//         four:require('../images/graph.png'),
//         five:'Tell us about',
//         six:'YOURSELF!',
//         sevene:'PSST! THE MORE WE KNOW ABOUT YOU, THE GREATER',
//         eight:'is your chance of winning a scholarship',
//       },     {
//         one:require('../images/search.png'),
//         two:'Loking For a',
//         three:'SCHOLARSHIPS',
//         four:require('../images/graph.png'),
//         five:'Tell us about',
//         six:'YOURSELF!',
//         sevene:'PSST! THE MORE WE KNOW ABOUT YOU, THE GREATER',
//         eight:'is your chance of winning a scholarship',
//       },     {
//         one:require('../images/search.png'),
//         two:'Loking For a',
//         three:'SCHOLARSHIPS',
//         four:require('../images/graph.png'),
//         five:'Tell us about',
//         six:'YOURSELF!',
//         sevene:'PSST! THE MORE WE KNOW ABOUT YOU, THE GREATER',
//         eight:'is your chance of winning a scholarship',
//       },
    
     
//     ]
//    }
//   render () {
//     return (
//       <View style={{flex:1}}>
//         <StatusBar backgroundColor={Colors.reg} barStyle='light-content' />
//          <Swiper style={{backgroundColor:Colors.primary}}
//           dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
//           activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
//           paginationStyle={{
//             bottom: 70
//           }}
//           autoplayTimeout={3.5}
//           autoplay={true}
//           autoplayDirection={true}
//           loop={true}>
            
         
//          <FlatList
//           data={this.state.dataSource} 
//           horizontal
//           onEndReachedThreshold={0.01}
//           renderItem={({item}) => (
//             <View style={{flex:1,paddingHorizontal:0,alignSelf:'center',paddingVertical:50}}>

//               <Image
//                 source={item.one}
//                 style={{
//                   height:80,
//                   width:80,margin:20,
//                   alignSelf:'center',
//                  tintColor: Colors.yellow,
//                 }}
//               />

//           <Text style={{color:Colors.white,textAlign:'center',margin:0,fontSize:28,fontFamily:Fonts.thin}}>{item.two}</Text>
//           <Text style={{color:Colors.white,textAlign:'center',fontSize:26,fontFamily:Fonts.bold}}>{item.three}</Text>
        

//           <Image
//                 source={item.four}
//                 style={{
//                   height:120,
//                   width:120,
//                   alignSelf:'center',margin:20,
//                  tintColor: Colors.yellow,
//                 }}
//               />

//           <Text style={{color:Colors.white,textAlign:'center',marginTop:20,fontSize:25,fontFamily:Fonts.thin}}>{item.five}</Text>
//           <Text style={{color:Colors.white,textAlign:'center',fontSize:22,fontFamily:Fonts.bold}}>{item.six}</Text>
        
//           <Text style={{color:Colors.white,textAlign:'center',marginTop:30,fontFamily:Fonts.regular,fontSize:12}}>{item.sevene}</Text>
//           <Text style={{color:Colors.white,textAlign:'center',fontFamily:Fonts.regular,fontSize:13}}>{item.eight}</Text>
        
//             </View>
//           )
//         }/>  
//         </Swiper>
             
//         <View style={{ height: '8%', width: '100%',backgroundColor:'white' }}>

//           <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center', alignItems: 'center',height:'100%' }}>

//             <TouchableOpacity style={{ backgroundColor:Colors.log, height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
//               <Text style={{ fontSize: 16, fontFamily: Fonts.regular }}>Login</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{ backgroundColor:Colors.reg, height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
//               <Text style={{ fontSize: 16, fontFamily: Fonts.regular }}>Register</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
             
//       </View>
//     )
//   }
// }



import React, { Component } from 'react'
import {
  View,
  Image,
  StatusBar,
  Dimensions,
  Text,ImageBackground,TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import Colors from '../common/Colors';
import Fonts from '../common/Fonts';
import { color } from 'react-native-reanimated';
console.disableYellowBox = true;
const { width, height } = Dimensions.get('window')
import AsyncStorage from '@react-native-community/async-storage';

export default class extends Component {
  
 
   
  


one=()=>{
  return(
    <View style={{flex:1,paddingHorizontal:0,alignSelf:'center',paddingVertical:50}}>

<Image
  source={require('../images/search.png')}
  style={{
    height:80,
    width:80,margin:0,
    alignSelf:'center',
   tintColor: Colors.yellow,
  }}
/>

<Text style={{color:Colors.white,textAlign:'center',margin:0,fontSize:28,fontFamily:Fonts.thin,marginTop:10}}>Loking For a</Text>
<Text style={{color:Colors.white,textAlign:'center',fontSize:26,fontFamily:Fonts.bold}}>SCHOLARSHIPS</Text>


<Image
  source={require('../images/graph.png')}
  style={{
    height:120,
    width:120,
    alignSelf:'center',margin:20,
   tintColor: Colors.yellow,
  }}
/>

<Text style={{color:Colors.white,textAlign:'center',marginTop:20,fontSize:25,fontFamily:Fonts.thin}}>Tell us about</Text>
<Text style={{color:Colors.white,textAlign:'center',fontSize:22,fontFamily:Fonts.bold}}>YOURSELF</Text>

<Text style={{color:Colors.white,textAlign:'center',marginTop:30,fontFamily:Fonts.regular,fontSize:12}}>PSST! THE MORE WE KNOW ABOUT YOU, THE GREATER</Text>
<Text style={{color:Colors.white,textAlign:'center',fontFamily:Fonts.regular,fontSize:13}}>is your chance of winning a scholarship</Text>

</View>


  )
}

two=()=>{
  return(
    <View style={{flex:1,paddingHorizontal:0,alignSelf:'center',paddingVertical:120}}>

    <View style={{width:'80%',alignSelf:'center'}}>
    <Text style={{color:Colors.white,textAlign:'center',margin:0,fontSize:28,fontFamily:Fonts.bold}}>NEAT!</Text>
    <Text style={{color:Colors.white,textAlign:'left',fontSize:22,fontFamily:Fonts.thin}}>Now Login and access scholarship matching your profile</Text>
    </View>
    
    
    
    <Image
      source={require('../images/shield.png')}
      style={{
        height:120,
        width:120,
        alignSelf:'center',margin:20,
      //  tintColor: Colors.yellow,
      }}
    />
    <View style={{alignSelf:'center',width:'80%',flexDirection:'column'}}>

    <View style={{flexDirection:'row',alignItems:'center'}}>
      <Text style={{color:Colors.white,textAlign:'center',marginTop:20,fontSize:25,fontFamily:Fonts.bold}}>TIP:</Text>
      <Text style={{color:Colors.white,textAlign:'center',marginTop:25,fontSize:18,fontFamily:Fonts.thin}}> Don't search from thousands</Text>
    </View>
    <Text style={{color:Colors.white,textAlign:'left',marginTop:0,fontSize:18,fontFamily:Fonts.thin}}>of scholarship. Let us find them for you. Just complee your profile
  </Text>     
    </View>

    </View>        
  )
}

three=()=>{
  return(
    <View style={{flex:1,paddingHorizontal:0,alignSelf:'center',paddingVertical:100}}>

    <View style={{width:'80%',alignSelf:'center'}}>
    <Text style={{color:Colors.white,textAlign:'center',margin:0,fontSize:28,fontFamily:Fonts.bold}}>BINGO!</Text>
    <Text style={{color:Colors.white,textAlign:'left',fontSize:22,fontFamily:Fonts.thin}}>Found a scholarship that you like? Apply instantly</Text>
    </View>
    
    
    
    <Image
      source={require('../images/lock.png')}
      style={{
        height:110,
        width:110,
        alignSelf:'center',margin:40,
        tintColor: Colors.yellow,
      }}
    />
    <View style={{alignSelf:'center',width:'80%',flexDirection:'column'}}>

    <View style={{flexDirection:'row',alignItems:'center'}}>
      <Text style={{color:Colors.white,textAlign:'center',marginTop:20,fontSize:25,fontFamily:Fonts.bold}}>TIP:</Text>
      <Text style={{color:Colors.white,textAlign:'center',marginTop:25,fontSize:18,fontFamily:Fonts.thin}}> Don't search from thousands</Text>
    </View>
    <Text style={{color:Colors.white,textAlign:'left',marginTop:0,fontSize:18,fontFamily:Fonts.thin}}>of scholarship. Let us find them for you. Just complee your profile
  </Text>     
    </View>

    </View>        
  )
}

four=()=>{
  return(
    <View style={{flex:1,paddingHorizontal:0,alignSelf:'center',paddingVertical:120}}>

    <View style={{width:'80%',alignSelf:'center'}}>
    <Text style={{color:Colors.white,textAlign:'center',margin:0,fontSize:28,fontFamily:Fonts.bold}}>NEAT!</Text>
    <Text style={{color:Colors.white,textAlign:'left',fontSize:22,fontFamily:Fonts.thin}}>Now Login and access scholarship matching your profile</Text>
    </View>
    
    
    
    <Image
      source={require('../images/video-call.png')}
      style={{
        height:140,
        width:140,
        alignSelf:'center',margin:20,
      //  tintColor: Colors.yellow,
      }}
    />
    <View style={{alignSelf:'center',width:'80%',flexDirection:'column'}}>

    <View style={{flexDirection:'row',alignItems:'center'}}>
      <Text style={{color:Colors.white,textAlign:'center',marginTop:20,fontSize:25,fontFamily:Fonts.bold}}>TIP:</Text>
      <Text style={{color:Colors.white,textAlign:'center',marginTop:25,fontSize:18,fontFamily:Fonts.thin}}> Don't search from thousands</Text>
    </View>
    <Text style={{color:Colors.white,textAlign:'left',marginTop:0,fontSize:18,fontFamily:Fonts.thin}}>of scholarship. Let us find them for you. Just complee your profile
  </Text>     
    </View>

    </View>        
  )
}

five=()=>{
  return(
    <View style={{flex:1,paddingHorizontal:0,alignSelf:'center',paddingVertical:120}}>

    <View style={{width:'80%',alignSelf:'center'}}>
    <Text style={{color:Colors.white,textAlign:'center',margin:0,fontSize:28,fontFamily:Fonts.bold}}>HURRAH!</Text>
    <Text style={{color:Colors.white,textAlign:'left',fontSize:22,fontFamily:Fonts.thin}}>Tell us when you win a scholarship. Share the joy.</Text>
    </View>
    
    
    
    <Image
      source={require('../images/medal.png')}
      style={{
        height:140,
        width:140,
        alignSelf:'center',margin:20,
      //  tintColor: Colors.yellow,
      }}
    />
    <View style={{alignSelf:'center',width:'80%',flexDirection:'column'}}>

    <View style={{flexDirection:'row',alignItems:'center'}}>
      <Text style={{color:Colors.white,textAlign:'center',marginTop:20,fontSize:25,fontFamily:Fonts.bold}}>TIP:</Text>
      <Text style={{color:Colors.white,textAlign:'center',marginTop:25,fontSize:18,fontFamily:Fonts.thin}}> Don't search from thousands</Text>
    </View>
    <Text style={{color:Colors.white,textAlign:'left',marginTop:0,fontSize:18,fontFamily:Fonts.thin}}>of scholarship. Let us find them for you. Just complee your profile
  </Text>     
    </View>

    </View>        
  )
}
  render () {
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor={Colors.reg} barStyle='light-content' />
         <Swiper style={{backgroundColor:Colors.primary}}
          dot={<View style={{backgroundColor:Colors.primary,borderWidth:1,borderColor:'white', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{
            bottom: 12
          }}
          autoplayTimeout={4.5}
          autoplay={true}
          autoplayDirection={true}
          loop={true}>

         
          {this.two()}
          {this.three()}  
          {this.four()}  
          {this.one()}
          {this.five()}  
    
        </Swiper>
             
        <View style={{ height: '6.8%', width: '100%',backgroundColor:'white' }}>

          <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center', alignItems: 'center',height:'100%' }}>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}} style={{ backgroundColor:Colors.log, height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontFamily: Fonts.regular,color:'white' }}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Registration')}} style={{ backgroundColor:Colors.reg, height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontFamily: Fonts.regular,color:'white' }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
             
      </View>
    )
  }
}