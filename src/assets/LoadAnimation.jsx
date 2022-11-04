import React from "react";
import { View,StyleSheet, TouchableWithoutFeedback, Image } from "react-native";
import Constants from 'expo-constants'
const logo = 'https://firebasestorage.googleapis.com/v0/b/proyecto-react-62e73.appspot.com/o/Next%2FOnlyLogo.png?alt=media&token=ef95ece1-0849-4eb3-a8e9-cfe55fb50311'

export const LoadAnimation = () => {

    return(
        <View style={styles.view}>
            <Image source={{uri: logo}} style={styles.img} />
        </View>
    )   
}

const styles = StyleSheet.create({
    img:{
        width: 100,
        aspectRatio:1,
    },
    view:{
        flex:1, 
        justifyContent:"center", 
        alignItems:'center',
        marginTop: -Constants.statusBarHeight - 20,
    }
})