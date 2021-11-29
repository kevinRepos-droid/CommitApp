import React,{useState, } from 'react'
import { Image, Button, StyleSheet, View} from 'react-native';

const logo = {
  uri: "https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-12.jpg",
};

const Separator = () => (
  <View style={styles.separator} />
);

const Menu = ({ navigation }) => {
  const newform = () => {
    navigation.navigate('Lista2')
  }
  const newform2 = () => {
    navigation.navigate('Clientes')
  }
  const newform3 = () => {
    navigation.navigate('Listkey')
  }
  const newform4 = () => {
    navigation.navigate('Lista')
  }
  return (
    <View style={styles.containerkevin}>
      <View style={styles.logoheader}>
          <Image style={styles.logo} source={logo} />
        </View>

      <View style={styles.containerkevin}>
        <Separator />
        <Button
          title="Liquidar"
          onPress={newform}
        />
        <Separator />
        <Button
          title="Clientes"
          onPress={newform2}
        />
        <Separator />
        <Button
          title="Lista Api"
          onPress={newform3}
        />
             <Separator />
        <Button
          title="Nicatributos"
          onPress={newform4}
        />
      </View>
      <View style={styles.boton}>
      <Button 
            title="Regresar" 
            onPress={() => navigation.goBack()} 
            />
            </View>

    </View>
    

  )
}

export default Menu

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
boton:{
  paddingVertical: 20,
  textAlign: "center",
  marginHorizontal: 130,
},
logo:{ 
  width: 200,
  height: 200, 
},
  logoheader:{
  justifyContent: 'center',
  alignItems: 'center',
},
separator: {
  marginVertical: 8,
  borderBottomColor: '#737373',
  borderBottomWidth: StyleSheet.hairlineWidth,
},
fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
})