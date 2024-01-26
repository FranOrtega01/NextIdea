import React, {useState, useEffect, useRef} from "react";
import smallLogo from '../assets/OnlyLogo.png'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { Text, View,ScrollView,SafeAreaView, Image,TouchableHighlight, StyleSheet, Linking } from "react-native";
import { StyledText } from "../Components/StyledComponents/StyledText";
import { useNavigation } from '@react-navigation/native'
import { StyledTextInput } from "../Components/StyledComponents/StyledInputText";
import '@expo/match-media'
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../Context/AuthContext";
import { userSchema } from "../Validations/Validation";

import theme from "../theme";

export const SignUp = () => {

    const Tablet = useMediaQuery({    
        minDeviceWidth: 768
    })
    const navigation = useNavigation()

    const [eyeShow, setEyeShow] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)

    const {signup} = useAuth()

    const userValidation = async () => {
        let formData = {
            email: email,
            password: password
        }
        const isValid = await userSchema.isValid(formData)
        isValid && handleSubmit()
        
    }

    async function handleSubmit(){
        try {
            if(!load){
                setLoad(true)
                console.log('entro');
                await signup(email, password)
                navigation.navigate('Home')
            }
        }catch {
            console.log('hubo un error');
        }
        setLoad(false)
    }
    const handlePressTerms = async () => {
        await Linking.openURL('https://www.nextidea4u.com/pages/terminos-y-condiciones')
    }
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', backgroundColor:'transparent',marginTop: Constants.statusBarHeight}}>
            <View style={Tablet && {marginHorizontal: 100}}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent:'center', alignItems:'center'}} style={styles.card}>
                <TouchableHighlight underlayColor={'white'} activeOpacity={.7} onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.image} source={smallLogo}/>
                </TouchableHighlight>
                <StyledText fontSize='subTitle' fontWeight='bold' style={{marginTop:10}}>Crea una cuenta</StyledText>

                <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
                    <StyledText fontSize='body' fontWeight='normal' >¿Ya tienes una cuenta?</StyledText>
                    <TouchableHighlight underlayColor={'white'} activeOpacity={.7} onPress={() => console.log('Ir a Signup')}>
                        <Text onPress={() => navigation.navigate('LogIn')} style={{color:theme.colors.nextBlue, marginLeft:5}}>Ingresa</Text>
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

                <StyledText fontSize='body' fontWeight='bold' style={{margin:30}}>O regístrate con tu Email</StyledText>

                <StyledTextInput 
                placeholder='Tu cuenta de Email' 
                selectionColor={theme.colors.nextBlue}
                onChangeText={newText => setEmail(newText)} />

                <View style={{position:'relative', width:'100%'}}>

                <StyledTextInput 
                placeholder='Crea una contraseña de ingreso' 
                selectionColor={theme.colors.nextBlue}
                secureTextEntry={eyeShow}
                onChangeText={newText => setPassword(newText)}/>
                {eyeShow ? 
                <Entypo style={styles.eye} name="eye" size={24} color="black" onPress={() => setEyeShow(!eyeShow)} /> 
                :
                <Entypo style={styles.eye} name="eye-with-line" size={24} color="black" onPress={() => setEyeShow(!eyeShow)} />
                }
                </View>
                <TouchableHighlight style={styles.button} underlayColor={'none'} activeOpacity={.7} onPress={userValidation}>
                    <Text style={{color:'#fff'}}>Registrarse</Text>
                </TouchableHighlight>

                <Text style={{marginTop:5, marginBottom:10, textAlign:'justify'}}>Al continuar y hacer click en el boton de registro aceptas los <Text onPress={handlePressTerms} style={{color:theme.colors.nextBlue}}>Términos y Condiciones</Text> de NextIdea4U.</Text>
            </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image:{
        aspectRatio:1,
        height:100,
    },
    card:{
        marginHorizontal:15,
        marginVertical:20,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:6,
    },
    button:{
        backgroundColor:theme.colors.nextBlue,
        width:'100%',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:5
    },
    buttonFacebook:{
        flex:1,
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
    },
    alignItems:{
        flex:1,
        alignItems:'center'
    },
    eye:{
        position:'absolute',
        right:10,
        opacity:.6,
        top:'50%',
        transform: [{ translateY: -17 }]
    }
})