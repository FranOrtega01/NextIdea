import React from 'react'
import { Text, View, ScrollView, Image,TouchableHighlight, TouchableOpacity, StyleSheet, Linking, FlatList } from "react-native";
import { Noticias } from './Noticias'

export const NoticiasList = ({noticias}) => {
    return (
        <FlatList data={noticias} renderItem={({item:not}) => (
            <TouchableOpacity activeOpacity={0.75}>
            <View >
                <Noticias noticia={not} />
            </View>
        </TouchableOpacity>
        )} />
    )
}
