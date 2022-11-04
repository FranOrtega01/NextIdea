import React from 'react'
import { StyleSheet, Button, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png';

export const NavBar = () => {

    const navigation = useNavigation()

    return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <TouchableHighlight underlayColor={'white'} activeOpacity={.4}>
                <FontAwesome style={{marginRight:15}} name="bars" size={28} color="black" />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('Home')} underlayColor={'white'} activeOpacity={.4}>
                <Image source={logo} style={styles.image}/>
            </TouchableHighlight>
        </View>
        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('SignUp')}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        marginTop: Constants.statusBarHeight,
        paddingVertical:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subContainer:{
        flexDirection:'row',
        alignItems: 'center'
    },
    image:{
        width: 200,
        height:45,
    },
})