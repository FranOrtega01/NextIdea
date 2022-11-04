import React from 'react'
import { Text, StyleSheet} from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
    text:{
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary:{
        color: theme.colors.primary 
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    bold:{
        fontWeight: theme.fontWeights.bold
    },
    semiBold:{
        fontWeight: theme.fontWeights.semiBold
    },
    subTitle:{
        fontSize: theme.fontSizes.subTitle
    },
    title:{
        fontSize:theme.fontSizes.title
    }
})

export function StyledText({children, color, fontSize, fontWeight, style, ...RestOfProps}) {
    const textStyles = [
        styles.text,
        color == 'primary' && styles.colorPrimary,
        color == 'secondary' && styles.colorSecondary,
        fontSize == 'subTitle' && styles.subTitle,
        fontSize == 'title' && styles.title,
        fontWeight == 'bold' && styles.bold,
        fontWeight == 'semiBold' && styles.semiBold,

        style
    ]
    return (
        <Text style={textStyles} {...RestOfProps}>{children}</Text>
    )
}