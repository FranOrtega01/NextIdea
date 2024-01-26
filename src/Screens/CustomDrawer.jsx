import React from "react";
import { Image, ScrollView,SafeAreaView, Text, View,StyleSheet, Linking, TouchableHighlight } from "react-native";
import logo from '../assets/OnlyLogo.png'
import Constants from 'expo-constants';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useAuth } from "../Context/AuthContext";
import theme from "../theme";

export const CustomDrawer = () => {
    const navigation = useNavigation()
    const { currentUser } = useAuth()
    //Redirects
    const handlePressAboutUs = async () => {
        await Linking.openURL('https://www.nextidea4u.com/pages/sobre-nosotros-antiguo')
    }
    const handlePressTerms = async () => {
        await Linking.openURL('https://www.nextidea4u.com/pages/terminos-y-condiciones')
    }
    const handlePressPrivacy = async () => {
        await Linking.openURL('https://www.nextidea4u.com/pages/politica-de-privacidad')
    }
    const handlePressCookies = async () => {
        await Linking.openURL('https://www.nextidea4u.com/pages/politica-de-cookies')
    }

    //Navigation
    const handleGoHome = () => {
        navigation.navigate('Home')
    }
    const handleGoNoticias = () => {
        navigation.navigate('Home', 'noticia')
    }
    const handleGoPodcasts = () => {
        navigation.navigate('Home', 'podcast')
    }
    const handleGoProfile = () => {
        navigation.navigate('Profile')
    }

    const handleGoBack = () => {
        navigation.goBack()
    }
    return (
        <>
            <SafeAreaView style={styles.card}>
                <ScrollView >
                    <View style={styles.line}>
                        <View style={[styles.viewHeader]}>
                            <TouchableHighlight underlayColor='#fff' onPress={handleGoHome} style={{width:80, aspectRatio:1}} >
                                <Image source={logo} resizeMode={'contain'} style={{height:'100%', aspectRatio:1}}  />
                            </TouchableHighlight>
                            <Entypo name="cross" size={42} color="black" onPress={handleGoBack}/>
                        </View >
                        <TouchableHighlight underlayColor='#ededed' style={{borderRadius:4}} onPress={handleGoNoticias}>
                            <Text style={styles.text}>Noticias</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#ededed' style={{borderRadius:4}} onPress={handleGoPodcasts}>
                            <Text style={styles.text} >Podcasts</Text>
                        </TouchableHighlight>

                        {/* Display perfil o login/signup */}

                        {currentUser ?
                        <TouchableHighlight underlayColor='transparent' onPress={handleGoProfile}>
                            <Text style={styles.profile} >Mi perfil</Text>
                        </TouchableHighlight>
                        :
                        (<>
                            <TouchableHighlight underlayColor='transparent' 
                            onPress={() => navigation.navigate('LogIn')}>
                                <Text style={[styles.profile, styles.login]}>Iniciar Sesión</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor='transparent'
                            onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.profile} >Registrarse</Text>
                            </TouchableHighlight>
                        </>)
                        }
                    </View>
                    {/*Redes */}
                    <View style={styles.line}>
                        <Text style={styles.text}>Seguinos</Text>
                        <View style={styles.iconsCont}>
                            <Entypo name="instagram" size={24} color="black" 
                            onPress={async () => await Linking.openURL('https://www.instagram.com/nextidea4u/')}/>
                            <Entypo name="facebook" size={24} color="black" 
                            onPress={async () => await Linking.openURL('https://www.facebook.com/nextidea4u')}/>
                            <AntDesign name="linkedin-square" size={24} color="black"
                            onPress={async () => await Linking.openURL('https://www.linkedin.com/company/nextidea4u')}/>
                            <Entypo name="twitter" size={24} color="black"
                            onPress={async () => await Linking.openURL('https://www.twitter.com/nextidea4u')}/>
                            <Entypo name="youtube" size={24} color="black"
                            onPress={async () => await Linking.openURL('https://www.youtube.com/channel/UCgfn7CcOW8n0VOn-NPZLr4w')}/>
                            <FontAwesome5 name="tiktok" size={24} color="black"
                            onPress={async () => await Linking.openURL('https://www.tiktok.com/@nextidea4u')}/>
                        </View>
                        <Text style={styles.text}>Escuchanos</Text>
                        <View style={styles.iconsCont}>
                            <Entypo name="spotify" size={24} color="black"
                            onPress={async () => await Linking.openURL('https://open.spotify.com/show/3XyUugkQz4bTHKb96MqBem?si=55bae6b8e9104efd')}/>
                            <FontAwesome5 name="podcast" size={24} color="black"
                            onPress={async () => await Linking.openURL('https://podcasts.apple.com/us/podcast/podcasts-de-next-idea-4u/id1597339890')}/>
                            <AntDesign name="google" size={24} color="black"
                            onPress={async () => await Linking.openURL('https://podcasts.google.com/feed/aHR0cHM6Ly9teC5pdm9veC5jb20vZXMvcG9kY2FzdHMtbmV4dC1pZGVhLTR1X2ZnX2YxMTQxMTEyNF9maWx0cm9fMS54bWw')}/>
                            <FontAwesome5 name="headphones" size={24} color="black"
                            onPress={async () => await Linking.openURL('https://www.ivoox.com/podcast-podcasts-next-idea-4u_sq_f11411124_1.html')}/>
                        </View>
                    </View>
                    <Text style={styles.text}>NextIdea4U</Text>
                    <TouchableHighlight underlayColor='#ededed' style={{borderRadius:4}} onPress={handlePressAboutUs}>
                        <Text style={styles.subText} >Sobre Nosotros</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#ededed' style={{borderRadius:4}} onPress={handlePressTerms}>
                        <Text style={styles.subText}>Términos y Condiciones</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#ededed' style={{borderRadius:4}} onPress={handlePressPrivacy}>
                        <Text style={styles.subText}>Políticas de Privacidad</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#ededed' style={{borderRadius:4}} onPress={handlePressCookies}>
                        <Text style={styles.subText}>Políticas de Cookies</Text>
                    </TouchableHighlight>

                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        marginHorizontal:10,
        marginTop: Constants.statusBarHeight,
        paddingVertical:10
    },
    viewHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10
    },
    line:{
        borderBottomWidth:2,
        borderBottomColor:theme.colors.lineGrey, 
        paddingBottom:20,
        marginBottom:20
    },
    iconsCont:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:20
    },
    text:{
        marginVertical:5,
        marginLeft:15,
        fontWeight:'500',
    },
    subText:{
        marginVertical:5,
        marginLeft:15,
        color: '#828282'
    },
    profile:{
        marginTop:15,
        marginHorizontal:15,
        padding:10,
        color:'white',
        backgroundColor:theme.colors.nextBlue,
        borderRadius:4,
        overflow:'hidden',
        textAlign:'center'
    },
    login:{
        backgroundColor:'white',
        color:theme.colors.nextBlue,
        borderWidth:1,
        borderColor:theme.colors.nextBlue
    }
})