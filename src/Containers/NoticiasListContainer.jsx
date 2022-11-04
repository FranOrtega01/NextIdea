//Tomar todas las noticias y mandarlas a NoticiasList
import React,{ useState, useEffect } from "react"
import { customNoticias } from "../assets/Noticias/noticias";
import { Text, View, Image,TouchableHighlight, StyleSheet, Linking } from "react-native";
import { noticiasFetch } from '../assets/CustomFetch'
import { NoticiasList } from "./NoticiasList";
import { LoadAnimation } from "../Components/LoadAnimation";

export const NoticiasListContainer = () => {

    const [noticias, setNoticias] = useState([]);
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        noticiasFetch(customNoticias)
        .then(res => {
            setNoticias(res)
            setLoad(false)
        })
    }, [])

    return (
        <>
            {/* {load ? <LoadAnimation /> : <NoticiaList noticias={noticias} />} */}
            <NoticiasList noticias={noticias} />

        </>
    )
}
