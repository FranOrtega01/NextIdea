import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableHighlight, Share, TouchableOpacity } from 'react-native';
import { NavBar } from '../../Components/NavBar';
import theme from '../../theme';
import { Entypo } from '@expo/vector-icons';

export const NoticiaDetail = ({noticia}) => {
    const n = noticia;
    const date = new Date(n.date.seconds * 1000 + n.date.nanoseconds/1000000);
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const shareData = async () => {
        try {
            await Share.share({
                message:
`Mira esta noticia: 

${n.title}

${n.link}`,
            });
        }catch(error){
            alert(error.message);
        }

    };
    return (
        <>
            <NavBar />
            <ScrollView >
                <View style={styles.cont}>
                    <Text style={styles.topic}>{noticia.topic.toUpperCase()}</Text>
                    <Text style={styles.title}>{n.title}</Text>
                    <Text style={styles.description}>{n.description}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Entypo name="calendar" size={16} color="#828282" />
                        <Text style={styles.date}>{`${date.getDate()} de ${monthNames[date.getMonth()]} del ${date.getFullYear()}`}
                        </Text>
                    </View>
                    <Image source={{uri: n.img}} resizeMode={'cover'} style={{width: '100%',aspectRatio:5/4,borderRadius:6,marginTop:10, marginBottom:10 }}/>
                    <TouchableOpacity onPress={shareData} activeOpacity={.4} style={styles.share}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Entypo name="share" size={24} color="black" />
                            <Text style={{marginLeft:5}}>Compartir noticia</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    cont:{
        flex:1,
        borderTopWidth:1,
        borderTopColor:theme.colors.lineGrey,
        padding:15
    },
    topic:{
        color: theme.colors.nextBlue,
        fontSize:16,
        marginVertical:10
    },
    title:{
        fontSize:28,
        marginVertical:10
    },
    description:{
        fontSize:18,
        marginVertical:10,
        lineHeight:24,
    },
    date:{
        color:'#828282',
        marginLeft:5,
        marginVertical:10
    },
    share:{
        marginVertical:10,
        borderWidth:1,
        borderRadius:30,
        alignSelf:'center',
        paddingHorizontal:8,
        paddingVertical:2
    }
})