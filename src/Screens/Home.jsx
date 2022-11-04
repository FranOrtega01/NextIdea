import React from "react";
import { Text } from "react-native";
import { NavBar } from '../Components/NavBar'
import { NoticiasListContainer } from '../Containers/NoticiasListContainer';


export const Home = () => {
    return (
        <>
            <NavBar/>
            <NoticiasListContainer />
        </>
    );
}