import React, {useRef} from "react";
import { Text,SafeAreaView } from "react-native";
import { NavBar } from '../Components/NavBar'
import { NoticiasListContainer } from '../Containers/NoticiasListContainer';
import { useRoute } from '@react-navigation/native';
import { DrawerNavigation } from "./CustomDrawer";
import { useAuth } from "../Context/AuthContext";

export const Home = () => {

    const route = useRoute()
    const { scrollRef } = useAuth()
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'transparent'}}>
            <NavBar/>
            <NoticiasListContainer scrollRef={scrollRef} route={route}/>
        </SafeAreaView>
    );
}