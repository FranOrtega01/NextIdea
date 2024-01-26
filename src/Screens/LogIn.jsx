import React, {useState} from "react";
import smallLogo from '../assets/OnlyLogo.png'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { Text, View,ScrollView,SafeAreaView, Image,TouchableHighlight, StyleSheet, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { StyledText } from "../Components/StyledComponents/StyledText";
import { StyledTextInput } from "../Components/StyledComponents/StyledInputText";
import '@expo/match-media'
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../Context/AuthContext";
import theme from "../theme";

export const LogIn = () => {
    const [eyeShow, setEyeShow] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)

    const { login } = useAuth()
    const navigation = useNavigation()

    const Tablet = useMediaQuery({    
        minDeviceWidth: 768
    })

    async function handleSubmit(){
        try {
            if(!load){
                setLoad(true)
                console.log('entro');
                await login(email, password)
                navigation.navigate('Home')
            }
        }catch {
            console.log('hubo un error');
        }
        setLoad(false)
    }

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', backgroundColor:'transparent',marginTop: Constants.statusBarHeight}}>
            <View style={Tablet && {marginHorizontal: 100}}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:'center'}} style={styles.card}>
                    <TouchableHighlight underlayColor={'white'} activeOpacity={.7} onPress={() => navigation.navigate('Home')}>
                        <Image style={styles.image} source={smallLogo}/>
                    </TouchableHighlight>
                    <StyledText fontSize='subTitle' fontWeight='bold' style={{marginTop:10}}>Ingresa a tu cuenta</StyledText>

                    <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
                        <StyledText fontSize='body' fontWeight='normal' >¿Todavía no tienes una cuenta?</StyledText>
                        <TouchableHighlight underlayColor={'white'} activeOpacity={.7} onPress={() => console.log('Ir a Signup')}>
                            <Text onPress={() => navigation.navigate('SignUp')} style={{color:theme.colors.nextBlue, marginLeft:5}}>Crea una</Text>
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

                    <StyledText fontSize='body' fontWeight='bold' style={{margin:30}}>O ingresa con tu Email</StyledText>
                        <StyledTextInput selectionColor={theme.colors.nextBlue} placeholder='Tu cuenta de Email' onChangeText={newText => setEmail(newText)}/>
                    <View style={{position:'relative', width:'100%'}}>
                        <StyledTextInput 
                        selectionColor={theme.colors.nextBlue} 
                        placeholder='Tu contraseña'
                        secureTextEntry={eyeShow}
                        onChangeText={newText => setPassword(newText)}/>
                        {eyeShow ? 
                        <Entypo style={styles.eye} name="eye" size={24} color="black" onPress={() => setEyeShow(!eyeShow)} /> 
                        :
                        <Entypo style={styles.eye} name="eye-with-line" size={24} color="black" onPress={() => setEyeShow(!eyeShow)} />
                        }
                    </View>

                    <TouchableHighlight style={styles.button} underlayColor={'none'} activeOpacity={.7} onPress={handleSubmit}>
                        <Text style={{color:'#fff'}}>Iniciar Sesión</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'white'} activeOpacity={.7}>
                        <Text style={{color:theme.colors.nextBlue, marginVertical:15}}>Olvidé mi contraseña</Text>
                    </TouchableHighlight>
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
        margin:15,
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
    eye:{
        position:'absolute',
        right:5,
        opacity:.6,
        top:'50%',
        transform: [{ translateY: -17 }]
    }
})