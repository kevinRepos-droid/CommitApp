import React,{useState, } from 'react'
import { Image, Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

const logo = {
  uri: "https://cengage.force.com/resource/1607465003000/loginIcon",
};
const HomeNica = ({ navigation }) => {
 
  const [user, setUser] = useState("");
  const [password, setPasword] = useState("");

  const ValUser = () => {
    if (user === "Kevin" && password === "123") {
      navigation.navigate("Menu");
    } else {
      alert("Datos no correctos");
    }
  };
  
  return (
    <ScrollView>
      <View style={styles.containerkevin}>
        <View style={styles.logoheader}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.titlekevin}>
          <Text style={styles.text}>Usuario</Text>
        </View>
        <TextInput
          style={styles.inputs}
          placeholder={"Ingrese su usuario"}
          onChangeText={setUser}
        />
        <View style={styles.titlekevin}>
          <Text style={styles.text}>Contraseña</Text>
        </View>
        <TextInput
          style={styles.inputs}
          placeholder={"Contraseña"}
          onChangeText={setPasword}
        />
        <View style={styles.boton}>
          <Button title="iniciar" onPress={ValUser} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeNica

const styles = StyleSheet.create({
        containerkevin: {
        textAlign: "center",
        padding: 24,
        marginTop:'10%',
    },
    titlekevin: {
        marginTop: 16,
        paddingVertical: 8,
        backgroundColor: "#61dafb",
    },
    inputs: {
        backgroundColor: '#F2F8FB',
        padding: 15,
        textAlign: 'center',
        fontSize: 22,
        color: '#004445',
    },
    text:{
        fontSize:26,
        color:'black',
        textAlign: 'center'
    },
    boton:{
        paddingVertical: 20,
        textAlign: "center",
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