import React, { useEffect } from  'react'
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import { useState } from 'react'

const Liquidacion = ({navigation}) => {
    const [nombre, setNombre] = useState ('');
    const [salario, setSalario] = useState ('');
     const [result, setResul] = useState <number>(0);
    const calcularSalario = () =>{
        const anio=12
        const total = anio * parseInt(salario)
        setResul (total);
    };
    useEffect(calcularSalario,[salario]);
    return (
        
        <View>
             <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>Ingrese su nombre</Text>
            <TextInput style={styles.inputs}
            onChangeText={setNombre}
            />
            <Text style={styles.text}>Ingrese su salario por mes</Text>
            <TextInput style={styles.inputs}
            onChangeText={setSalario}
            />
            <Text style={styles.text}>{nombre} su salario anual es de:{result.toString()}</Text>

             <Button 
            title="Regresar" 
            onPress={() => navigation.goBack()} 
            />
             
             </ScrollView>
            </View>   
    )
}

export default Liquidacion

const styles = StyleSheet.create({
    containerkevin: {
    textAlign: "center",
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea",
      marginTop:'10%',
    },
    titlekevin: {
      marginTop: 16,
      paddingVertical: 8,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 5,
        padding: 15,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445',
    },
    text:{
        fontSize:26,
        color:'black',
        textAlign: 'center'
    },
    boton:{
      paddingVertical: 20,
      color: "#20232a",
      textAlign: "center",
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginVertical: 8,
      flex: 1,
      marginHorizontal: 100,
 
    },
    logo:{ 
    width: 200,
    height: 200, 
    },
    logoheader:{
        justifyContent: 'center',
        alignItems: 'center',
    }
     
   })