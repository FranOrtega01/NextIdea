import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native'
import theme from '../theme';

export const Podcasts = ({podcast}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity activeOpacity={0.75} style={[styles.container]}
        onPress={() => navigation.navigate('PodcastDetail', podcast.id)}>
            <View >
                <Image source={{uri:podcast.img}} resizeMode={'cover'} style={styles.image}/>
                <Text style={styles.text}>{podcast.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        marginBottom:15,
        width:'45%'
    },
    border:{
        paddingTop:40,
        borderTopWidth:1,
        borderTopColor: theme.colors.lineGrey,
        borderTopEndRadius:10
    },
    text:{
        fontSize:16,
        fontWeight:'600'
    },
    topic:{
        marginTop:10,
        color: theme.colors.nextBlue,
        fontSize:18,
    },
    image:{
        width: '100%',
        aspectRatio:1,
        borderRadius:6,
        marginBottom:10
    },
})