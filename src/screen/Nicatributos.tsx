import React,{ useState, useEffect, } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import FormInputs from '../components/FormInputs';

const NicaAtributo = () => {
    const [producto, setProducto] = useState<string>("");
    const [cantidad, setCantidad] = useState<string>("");
    const [precio, setPrecio] = useState<string>("");
    const [descuento, setDescuento] = useState<string>("");
    const [resultado, setResultado] = useState<number>(0);

    const valVentas = ()=>{
        let calculo =parseFloat(cantidad) * parseFloat(precio)
        let caldescuento = calculo * parseFloat(descuento) / 100
        let resultado = calculo -caldescuento
        setResultado(resultado)
    }
    useEffect (valVentas, [cantidad,descuento,precio])
    const resetData =() =>{
        setResultado(0)
    }
    const resetDatos=()=> {
        setCantidad('')
    }
    
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>El total es de {resultado}</Text>  
        <View style={styles.container}>
          <FormInputs
            title={"Nombre Producto"}
            placeholder={"Producto"}
            onChangeText={setProducto}
          />
          <FormInputs
            title={"Ingresar la cantidad"}
            placeholder={"Cantidad"}
            onChangeText={setCantidad}
          />
          <FormInputs
            title={"Precio"}
            placeholder={"Precio"}
            onChangeText={setPrecio}
          />
          <FormInputs
            title={"Descuento"}
            placeholder={"Descuento"}
            onChangeText={setDescuento}
          />
          <TouchableOpacity onPress={valVentas} style={styles.botonReset}>
          <Text style={styles.textbotonReset}>Iniciar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
}

export default NicaAtributo

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445',
        marginTop: 30,
    },
    text: {
        fontSize: 30,
        color: 'black',
        marginTop: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#7ECFED',
        width:'95%',
        marginLeft: 10
    },
    textbotonReset: {
        color: '#00514E',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
    botonReset: {
        backgroundColor: '#00C1AC',
        borderRadius: 8,
        width: '100%',
        paddingVertical: 7,
        marginTop: 1
    },
    scrollView: {
        backgroundColor: '#8FB5C3',
        marginHorizontal: 20
    }
})