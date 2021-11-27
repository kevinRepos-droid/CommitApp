import React,{useState} from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'



const HomeNica = () => {
    const [user, setUser] = useState('')

    const [password, setPasword] = useState('')

    const ValUser = () =>{
        if (user==='Kevin' && password==='123'){
            alert('Bienvenido')
        }
        else{
            alert('Datos no correctos')
        }
        

    }
    return (
        <View>
            <Text style={styles.text}>Usuario</Text>
            <TextInput
            style={styles.inputs}
            placeholder={'Ingrese su usuario'}
            onChangeText={setUser}

            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
            style={styles.inputs}
            placeholder={'Contraseña'}
            onChangeText={setPasword}
            />
            <View style={styles.button}>
            <Button
            title="iniciar"
            onPress={ValUser}
            />
         </View>

        </View>
    )

}

export default HomeNica

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445',
        
    },
    text:{
        fontSize:26,
        color:'#05786A'
    },
    button:{
        
    }

})