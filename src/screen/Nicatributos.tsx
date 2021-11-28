import React,{ useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'



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
    
    return (
        <View style={styles.container}>
             <Text style={styles.text}>Ingresar producto</Text>
            <TextInput
                style={styles.inputs}
                placeholder="Nombre del producto"
                onChangeText={setProducto}

            />
        <Text style={styles.text}>Ingresar Cantidad</Text>
            <TextInput
                style={styles.inputs}
                placeholder="Cantidad"
                onChangeText={setCantidad}

            />
             <Text style={styles.text}>Precio</Text>
            <TextInput
                style={styles.inputs}
                placeholder="Precio"
                onChangeText={setPrecio}

            />
             <Text style={styles.text}>Descuento</Text>
            <TextInput
                style={styles.inputs}
                placeholder="Descuento"
                onChangeText={setDescuento}

            />
             <Text style={styles.text}>El total es de {resultado}</Text>

             <TouchableOpacity
                onPress={valVentas}
                style={styles.botonReset}
            >
                <Text style={styles.textbotonReset}>Iniciar</Text>
            </TouchableOpacity>
           

        </View>
    )
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
        fontSize: 20,
        color: '#05786A',
        marginTop: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#f0e0b4',
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
    }
})