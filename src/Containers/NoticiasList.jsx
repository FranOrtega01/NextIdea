import React, {useEffect} from 'react'
import { ScrollView, View, Text,StyleSheet } from "react-native";
import { Noticias } from './Noticias'
import { Podcasts } from './Podcasts'
import '@expo/match-media'
import { useMediaQuery } from "react-responsive";
import { FontAwesome5 } from '@expo/vector-icons';

export const NoticiasList = ({noticias, podcasts, scrollRef}) => {

    const PortraitCellphone = useMediaQuery({    
        maxDeviceWidth: 500
    })

    useEffect(() => {
        console.log(PortraitCellphone);
    }, [PortraitCellphone])
    
    return(
        <View style={{flex:1}}>
            <ScrollView ref={scrollRef}>
                <View style={!PortraitCellphone && styles.columns} >
                    {noticias.map(not => <Noticias key={`${not.title} - ${not.id}`} noticia={not} width={PortraitCellphone}/>)}
                </View>
                <View style={styles.podcastsCont}>
                    <View style={styles.titleCont}>
                        <FontAwesome5 name="podcast" size={24} color="#9E9E9E" />
                        <Text style={styles.text}>Podcasts</Text>
                    </View>
                    <View style={[styles.columns, {paddingVertical:0}]}> 
                        {podcasts.map(pod => <Podcasts key={`${pod.title} - ${pod.id}`} podcast={pod} /> )}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    columns:{
        // borderWidth:1,
        paddingVertical:15,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    podcastsCont:{
        backgroundColor:'#FAF9F9'
    },
    titleCont:{
        flexDirection:'row',
        alignItems:'center',
        padding:15,
        marginLeft:15
    },
    text:{
        marginLeft:10,
        fontSize:20,
        fontWeight:'600'
    }
})


