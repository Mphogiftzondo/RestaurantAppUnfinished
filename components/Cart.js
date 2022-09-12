import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

import picturess from './assets/pizza.png'

export default class Cart extends Component {
    
  render() {
    return (
      <View >
        <View style={styles.nav}>
            <Text>Back</Text>
            <Text style={styles.cartText}>Cart</Text>
            <Text>Menu</Text>
        </View>

        <TextInput style={styles.search} placeholder="Looking for your food"/>

        <View style={styles.order}>
            <View style={styles.imgback}>
          {/*   <ImageBackground source={img} style={styles.bckImg} >
       */}          <View style={styles.oPic}>
                    <Image style={styles.ourPizza} source={picturess}/> 
                </View>
    {/*         </ImageBackground> */}
         
            </View>
               <View style={styles.details}>
                <Text style={styles.name}>Pizza</Text>
                <Text style={styles.size}>Size: medium</Text>
                <View style={styles.addSub}>
                    <TouchableOpacity><Text style={styles.touch}>-</Text></TouchableOpacity>
                    <Text style={styles.touch}>1</Text>
                    <TouchableOpacity><Text style={styles.touch}>+</Text></TouchableOpacity>
                </View> 
            </View>
            <View style={styles.price}><Text style={styles.pricetxt}>R69.99</Text></View>
        </View>

        <View style={styles.tot}>
            <Text style={styles.total}>Total Amount: </Text>
            <Text style={styles.totalAmt}>R191.97</Text>
        </View>

        <TouchableOpacity style={styles.checkout}>
            <Text style={styles.proceed}>Check Out</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
    },
    imgback:{
    
        width:200,
        borderRadius:'100%'
    
    },
    ourPizza:{
        flex: 1,
    
       borderRadius:'70%',
       margin:10   
    },
    addSub:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7,
        width: 80,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 5,
        backgroundColor: '#C94646'
    },
    cartText: {
        fontSize: 28,
        fontWeight: 700
    },
    search: {
        marginLeft: 40,
        marginTop: 20,
        padding: 10,
        backgroundColor: 'lightgrey',
        width: '80%'
    },
    order: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
        padding:20,
        boxShadow: '0 0 20px 5px '
    }, 
    details: {
        marginRight:20
    },
    price: {
        marginTop: 25,
        
    },
    pricetxt:{
        fontSize: 15,
        fontWeight: 700
    },
    name:{
        fontSize: 20,
        
        fontWeight: 700
    },
    touch:{
        fontWeight: 700,
        color: 'white',
        fontSize: 22
    },
   
    size:{
        fontSize:15,
        opacity:0.5
    },
    bckImg:{
        flex:4,
        padding:20,
        paddingLeft:20,
        height:'100%',
        width: '100%',
        borderRadius:'100%'
    }, 
    tot: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent:'space-around'
    }, 
    total: { 
        fontSize: 28,
        marginLeft: 30,
        fontWeight: 600
    }, 
    totalAmt: {
        fontSize: 28,
        fontWeight: 600
    }, 
    checkout: {
        alignItems: 'center',
        marginLeft: 80,
        marginTop: 60,
        backgroundColor: '#C94646',
        width:'60%'
    }, 
    proceed: {
        color:'white',
        fontSize: 28
    },
    oPic:{
       flex: 5,
       borderRadius:'100%',

    }

})
