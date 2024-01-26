import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native'
import theme from '../theme';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

export const Noticias = ({noticia, width}) => {
    
    const navigation = useNavigation()
    const windowWidth = Dimensions.get('window').width;
    return (
        <TouchableHighlight underlayColor={'#fff'} style={[styles.container, width ? styles.border : {width: windowWidth*.45}]}
        onPress={() => navigation.navigate('NoticiaDetail', noticia.id)}>
            <View >
                <Image source={{uri:noticia.img}} resizeMode={'cover'} style={styles.image}/>
                <Text style={styles.topic}>{noticia.topic}</Text>
                <Text style={styles.text}>{noticia.title}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:15,
        marginBottom:30
    },
    border:{
        paddingTop:40,
        borderTopWidth:1,
        borderTopColor: theme.colors.lineGrey,
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