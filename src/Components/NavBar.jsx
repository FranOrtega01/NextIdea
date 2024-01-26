import React from 'react'
import { StyleSheet, Button, Text, View,SafeAreaView , Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../Context/AuthContext';

export const NavBar = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const handleGoHome = () => {
        navigation.navigate('Home')
    }

    const handleUserNavigation = () => {
        currentUser ? navigation.navigate('Profile') : navigation.navigate('SignUp')
    }

    const { currentUser, scrollUp } = useAuth()

    console.log(route.name);
    return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <TouchableHighlight underlayColor={'white'} activeOpacity={.4} onPress={() => navigation.navigate('drawer')}>
                <FontAwesome style={{marginRight:15}} name="bars" size={28} color="black" />
            </TouchableHighlight>

            <TouchableHighlight onPress={(route.params || route.name === 'Profile' ) ? handleGoHome : scrollUp} underlayColor={'white'} activeOpacity={.4}>
                <Image source={logo} style={styles.image}/>
            </TouchableHighlight>
        </View>
        
        {route.name !== 'Profile' && 
        <TouchableOpacity activeOpacity={0.4} onPress={handleUserNavigation}>
            {currentUser ? <FontAwesome name="user-circle-o" size={24} color="black" /> : <MaterialIcons name="login" size={24} color="black" /> }  
        </TouchableOpacity> }
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