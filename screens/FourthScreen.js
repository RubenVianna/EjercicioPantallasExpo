import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function FourthScreen({navigation}) {

    volverInicio =() =>{
        console.log("Volvi al inicio")
        navigation.navigate('HomeScreen')
    }

    volverTres =() =>{
        console.log("Volvi al la tercera pantalla")
        navigation.navigate('ThirdScreen')
    }

  return (
    <View>
      <Text style={styles.textRow} >Esta es la cuarta y ultima pantalla!😢</Text>
      <Button title="Pagina de Inicio" onPress={()=> volverInicio()}/>
      <Button title="Anterior Pantalla" onPress={()=> volverTres()} />
    </View>
  );
}

const styles = StyleSheet.create({
    textRow:{
      marginTop: 100,
      fontSize:25,
      color: 'orange',
      fontStyle: 'italic',
      textAlign: 'center'
    }
  });