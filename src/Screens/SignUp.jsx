import React from "react";
import smallLogo from '../assets/OnlyLogo.png'
import { FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { Text, View, Image,TouchableHighlight, StyleSheet, Linking } from "react-native";
import { StyledText } from "../Components/StyledComponents/StyledText";
import { useNavigation } from '@react-navigation/native'
import { StyledTextInput } from "../Components/StyledComponents/StyledInputText";

export const SignUp = () => {

    const handlePressTerms = async () => {
        await Linking.openURL('https://www.nextidea4u.com/pages/terminos-y-condiciones')
    }

    const navigation = useNavigation()

    return (
        <View style={{flex:1,justifyContent:'center', marginTop: Constants.statusBarHeigh}}>
            <View style={styles.card}>
                <TouchableHighlight underlayColor={'white'} activeOpacity={.7} onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.image} source={smallLogo}/>
                </TouchableHighlight>
                <StyledText fontSize='subTitle' fontWeight='bold' style={{marginTop:10}}>Crea una cuenta</StyledText>
                <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
                    <StyledText fontSize='body' fontWeight='normal' >¿Ya tienes una cuenta?</StyledText>
                    <TouchableHighlight underlayColor={'white'} activeOpacity={.7} onPress={() => console.log('Ir a Signup')}>
                        <Text onPress={() => navigation.navigate('LogIn')} style={{color:'#005cff', marginLeft:5}}>Ingresa</Text>
                </TouchableHighlight>
                </View>

                <TouchableHighlight style={styles.buttonFacebook} underlayColor={'none'} activeOpacity={.7} onPress={() => console.log('Click!')}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name="facebook-f" style={{marginRight:10}} size={18} color="white" />
                        <StyledText fontWeight={'bold'} style={{color:'#fff'}}>Continúa con Facebook</StyledText>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonGoogle} underlayColor={'none'} activeOpacity={.7} onPress={() => console.log('Click!')}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name="google" style={{marginRight:10}} size={18} color="white" />
                        <StyledText fontWeight={'bold'} style={{color:'#fff'}}>Continúa con Google</StyledText>
                    </View>
                </TouchableHighlight>

                <StyledText fontSize='body' fontWeight='bold' style={{margin:20}}>O regístrate con tu Email</StyledText>

                <StyledTextInput placeholder='Tu cuenta de Email'/>
                <StyledTextInput placeholder='Crea una contraseña de ingreso'/>

                <TouchableHighlight style={styles.button} underlayColor={'none'} activeOpacity={.7} onPress={() => console.log('Click!')}>
                    <Text style={{color:'#fff'}}>Registrarse</Text>
                </TouchableHighlight>

                <Text style={{marginVertical:15, textAlign:'justify'}}>Al continuar y hacer click en el boton de registro aceptas los <Text onPress={handlePressTerms} style={{color:'#005cff'}}>Términos y Condiciones</Text> de NextIdea4U.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        aspectRatio:1,
        height:100,
    },
    card:{
        margin:15,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:6,
        alignItems:'center',
    },
    button:{
        backgroundColor:'#005cff',
        width:'100%',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:5
    },
    buttonFacebook:{
        marginVertical:5,
        backgroundColor:'#3b5999',
        width:'100%',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:5
    },
    buttonGoogle:{
        marginVertical:5,
        backgroundColor:'#fb5252',
        width:'100%',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:5
    }
})