import React from 'react'
import  { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Home } from './Screens/Home';
import { LogIn } from './Screens/LogIn';
import { SignUp } from './Screens/SignUp';
import { Profile } from './Screens/Profile'
import { CustomDrawer } from './Screens/CustomDrawer';
import { NoticiaDetailContainer } from './Containers/Detail/NoticiaDetailContainer'
import { PodcastDetailContainer } from './Containers/Detail/PodcastDetailContainer'
import { AuthProvider } from './Context/AuthContext';


const Stack = createStackNavigator();


export const Main = () => {
    return (
        <>
        <AuthProvider>
            <NavigationContainer >
                <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#fff',
                    }}}
                    >
                    <Stack.Screen name='drawer' component={CustomDrawer}
                    options={{
                        gestureEnabled:true,
                        gestureDirection:'horizontal-inverted',
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    }}
                    />
                    <Stack.Screen name='Home' component={Home}
                    options={{
                        gestureEnabled:true,
                        gestureDirection:'horizontal',
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    }}
                    />
                    <Stack.Screen name='SignUp' component={SignUp}
                    options={{
                        gestureEnabled:true,
                        gestureDirection:'horizontal',
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    }}
                    />
                    <Stack.Screen name='LogIn' component={LogIn}
                    options={{
                        gestureEnabled:true,
                        gestureDirection:'horizontal',
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        
                    }}/>
                    <Stack.Screen name='Profile' component={Profile}
                    options={{
                        gestureEnabled:true,
                        gestureDirection:'horizontal',
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        
                    }}/>
                    <Stack.Screen name='NoticiaDetail' component={NoticiaDetailContainer}
                    options={{
                        gestureEnabled:true,
                        gestureDirection:'horizontal',
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        
                    }}/>
                    <Stack.Screen name='PodcastDetail' component={PodcastDetailContainer}
                    options={{
                        gestureEnabled:true,
                        gestureDirection:'horizontal',
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
        </>
    );
}