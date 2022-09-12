import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import DropShadow from "react-native-drop-shadow";
import { Button, Menu, Divider, Provider } from 'react-native-paper';
//import { color, round } from 'react-native-reanimated';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default  function SignUp ({ navigation }){

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
    return (
      < SafeAreaView style={styles.main}>
        <Provider>
         <View style={styles.HeaderDetails}>

            <View style={styles.headerMenu}>
<View style={{
            
            alignSelf: 'flex-end'
          }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<TouchableOpacity onPress={openMenu}
          style={{
            width: 30,
            alignSelf: 'flex-end',
            flex: 1,
            color: colors.textDark,
          }}
          ><Feather
          name="align-right"
          size={30}
          style={styles.menuIcon}
          /> </TouchableOpacity>}>
          <Menu.Item onPress={() => { navigation.navigate('Meals')}} title="Meals"  />
          <Divider />
          <Menu.Item onPress={() => { navigation.navigate('Dessert')}} title="Dessert" />
          <Divider />
          <Menu.Item onPress={() => { navigation.navigate('Drinks')}} title="Drinks" />
          <Divider />
          <Menu.Item onPress={() => { navigation.navigate('SignIn')}} title="SignIn" />
          <Divider />
          <Menu.Item onPress={() => { navigation.navigate('SignUp')}} title="Register" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Cart" />
          <Divider />
          <Menu.Item onPress={() => {}} title="My Account" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Signout" />
          
        </Menu>
      </View>

  
 <TouchableOpacity onPress={() => navigation.goBack()}>
   <View style={styles.headerLeft}>
     <Feather name="chevron-left" size={12} color={colors.textDark}  style={styles.featheeBack}></Feather>
   </View>
 </TouchableOpacity>
 </View>
 </View>
        <View style={styles.container}>
           <Image
           style={{width: 200, height: 200}}
              source={
                require('../assets/icon.png')
              }
    
              />
              <Text style={styles.black}>Sign up to Skaftin</Text>
          
          <TextInput
            style={{
              height: 40,
              width: 400,
              marginTop: 50,
              color: 'lightgrey',
              borderColor: 'white',
              borderWidth: 1,
              backgroundColor: 'white',
              boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
            placeholder="Name and Surname"
          />
           <View>
           <TextInput
            style={{
              height: 40,
              width: 400,
              marginTop: 20,
              color: 'lightgrey',
              borderColor: 'white',
              borderWidth: 1,
              backgroundColor: 'white',
              boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
              backDropFilter:'blur(4px)'
            }}
           
            placeholder="Cell number"
          />
          </View>
          <View>
           <TextInput
            style={{
              height: 40,
              width: 400,
              marginTop: 20,
              color: 'lightgrey',
              borderColor: 'white',
              borderWidth: 1,
              backgroundColor: 'white',
              boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
            placeholder="Email Address"
          />
          </View>
          <View>
           <TextInput
            style={{
              height: 40,
              width: 400,
              marginTop: 20,
              color: 'lightgrey',
              borderColor: 'white',
              borderWidth: 1,
              backgroundColor: 'white',
              boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
            secureTextEntry={true}
            placeholder="Password"
          />
          </View>
          <View>
           <Text
            style={{
              height: 40,
              width: 200,
              fontFamily: 'Bitter',
              textAlign: 'center',
              marginTop: 20,
              color: 'white',
              fontWeight: 'bold',
              fontSize: 30,
              borderColor: '#C94646',
              borderWidth: 1,
              backgroundColor: '#C94646',
              boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
        
          >SIGN UP</Text>
          </View>
    
          <Text>Already have an accound?
             <TouchableOpacity
         
          onPress={() =>
            navigation.navigate('SignIn')
          }><Text style={{ color: 'blue' }}>click here</Text></TouchableOpacity></Text>
         
        </View>
        </Provider>
        </SafeAreaView>
      );
    }
    
    
    const styles = StyleSheet.create({
      main:{
        flex:0.79,
        justifyContent: 'center',
        
    },
      container: {
       
        alignItems: 'center',
       
      },
      black: {
        fontWeight: 'bold',
        fontSize: 30,
      
    },
      red:{
        fontSize: 20,
        marginTop:20,
        fontFamily: 'Bitter',
      },
      green:{
        color: 'blue',
        backgroundColor: 'blue',
      },
      headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        width:40,
        
        borderRadius: 10,
        marginTop: -35,
      },
      HeaderDetails:{
        flexDirection: 'reverse-row',
        justifyContent:"space-around"
    },
    menuIcon:{
      alignSelf: 'flex-end',
      marginTop:-30,
    },
    }); 
