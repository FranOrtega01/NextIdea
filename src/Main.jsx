import React from 'react'
import  { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Text, View, Image,TouchableHighlight, StyleSheet, Linking } from "react-native";
import { Home } from './Screens/Home';
import { LogIn } from './Screens/LogIn';
import { SignUp } from './Screens/SignUp';

const Stack = createStackNavigator();


export const Main = () => {
    return (
        <>
            <NavigationContainer >
                <Stack.Navigator screenOptions={{
                    cardStyle: {
                        backgroundColor: '#fff',
                    }}}
                    >
                    <Stack.Screen name='Home' component={Home}
                    options={{
                        gestureEnabled:true,
                        gestureDirection:'horizontal',
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        transitionSpec:{
                            open:config,
                            close:config
                        },
                    }}
                    />
                    <Stack.Screen name='SignUp' component={SignUp}
                    options={{
                        gestureEnabled:true,
                        gestureDirection:'horizontal',
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        transitionSpec:{
                            open:config,
                            close:config
                        },
                    }}
                    />
                    <Stack.Screen name='LogIn' component={LogIn}
                    options={{
                        gestureEnabled:true,
                        gestureDirection:'horizontal',
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const config = {
    animation: 'spring',
    config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    },
}; 