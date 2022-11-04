import React from 'react'
import { TextInput, StyleSheet} from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
    textInput:{
        width:"100%",
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal:20,
        paddingVertical:10,
        marginBottom:10
    },
    error:{
        borderColor: 'red'
    }
})

export const StyledTextInput = ({style = {},error, ...props}) => {
    const inputStyle=[
        styles.textInput,
        style,
        error && styles.error
    ]
    
    return <TextInput style={inputStyle} {...props}></TextInput>
}
