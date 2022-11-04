import React from 'react'
import { Text, View, ScrollView, Image,TouchableHighlight, StyleSheet, Linking } from "react-native";
import theme from '../theme';

export const Noticias = ({noticia}) => {
    return (
    <View style={styles.container}>
        <Image source={{uri:noticia.img}}  resizeMode={'cover'} style={styles.image}/>
        <Text style={styles.topic}>{noticia.topic}</Text>
        <Text style={styles.text}>{noticia.title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({

    container:{
        marginHorizontal:20,
        marginTop:20,
        paddingTop:40,
        paddingBottom:10,
        paddingHorizontal:5,
        borderRadius:4,
        borderTopWidth:1,
        borderTopColor: '#dedede',
        borderTopEndRadius:10
    },
    subContainer:{
        flexDirection:'row',
        alignItems: 'center'
    },
    text:{
        fontSize:22,
    },
    topic:{
        marginTop:10,
        color: theme.colors.nextBlue,
        fontSize:18,
    },
    image:{
        width: '100%',
        aspectRatio:5/4,
        borderRadius:6
    },
})