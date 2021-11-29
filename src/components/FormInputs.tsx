import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native'

interface Props{
    title: string;
    placeholder: string;
    onChangeText:(text:string) => void;
}
    
    const FormInputs = ({title, placeholder, onChangeText}:Props) =>{
 
    return (
        <View>
        <Text style={styles.text}>{title}</Text>
        
       <TextInput
           style={styles.inputs}
           placeholder={placeholder}
           onChangeText={text => onChangeText(text)}
       />
       </View>
    )
}
export default FormInputs

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'left',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445',
        
    },
    text: {
        fontSize: 20,
        color: '#05786A',
        marginTop: 30
    }

})
