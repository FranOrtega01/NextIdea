import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet} from "react-native";
import { useAuth } from '../Context/AuthContext';
import { useNavigation } from '@react-navigation/native'
import { NavBar } from '../Components/NavBar'


export const Profile = () => {

    const { currentUser, logout } = useAuth()

    const navigation = useNavigation()

    const handleLogout = async () => {
        try {
            await logout()
            navigation.navigate('SignUp')
        } catch{
            console.log('hubo un error');
        }
    }

    return (
        <>
        <NavBar />
        <View style={styles.container} >
            <View>
                <Text>{currentUser && currentUser.email}</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
