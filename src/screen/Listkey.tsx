import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native'

const ListKey = () => {

    const [usuario, setUsuario] = useState('')
    const [usuarios, setUsuarios] = useState([])

    const getUsuarios = async () => {

        const peticion = await fetch('https://hidfzr.deta.dev/')

        const datos = await peticion.json()
        setUsuarios(datos.data)

    }
    const crearUsuarios = async () => {
        const form = {
            "user_id": 1,
            "tweet_text": usuario
        }
        const peticion = await fetch(`https://hidfzr.deta.dev/tweets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        getUsuarios()
    }

    const eliminarUsuario = async (id: number) => {
        const peticion = await fetch(`https://hidfzr.deta.dev/tweets/${id}`, {
            method: 'DELETE',
        })
        getUsuarios()
    }
    const actualizarUsuario = async (id: number) => {
        const form = {
            "tweet_text": "Actualizado...."
        }
        const peticion = await fetch(`https://hidfzr.deta.dev/tweets/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        getUsuarios()
    }
    useEffect(() => { getUsuarios() }, [])

    return (
        <View style={styles.containerBase}>
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={setUsuario}
                    />
                    <Button
                        title="Agregar"
                        onPress={() => crearUsuarios()}
                    />
                </View>
                {
                    usuarios.map(lista => (
                        <View style={styles.container} key={lista.id} >
                            <Text style={styles.text} >{lista.tweet_text}</Text>
                            <View>
                                <Button
                                    color="#bd0404"
                                    title="ELiminar"
                                    onPress={() => eliminarUsuario(lista.id)}
                                />
                                <Button
                                    color="#0aa81d"
                                    title="Actualizar"
                                    onPress={() => actualizarUsuario(lista.id)}
                                />
                            </View>

                        </View>
                    ))
                }
            </ScrollView>


        </View>
    )
}

export default ListKey

const styles = StyleSheet.create({

    container: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C2DDF5',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginLeft: 10,
        borderColor: 'black',
        borderWidth: 2
    },

    text: {
        fontSize: 20,
        color: '#000000',
        width: '70%'
    },
    containerBase: {
        flex: 1,
        backgroundColor: '#AED9FF',
    },
        inputs: {
        borderRadius: 8,
        padding: 10,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        },
})