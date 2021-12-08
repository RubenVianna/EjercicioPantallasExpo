import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ThirdScreen({navigation}) {

    avanzarCuatro =() =>{
        console.log("Avance a la cuarta pantalla")
        navigation.navigate('FourthScreen')
    }

    volverDos =() =>{
        console.log("Volvi a la segunda pantalla")
        navigation.navigate('SecondScreen')
    }

  return (
    <View>
      <Text style={styles.textRow} >Esta es la tercera pantalla!</Text>
      <Button title="Siguiente pantalla" onPress={()=> avanzarCuatro()}/>
      <Button title="Anterior Pantalla" onPress={()=> volverDos()}/>
    </View>
  );
}

const styles = StyleSheet.create({
    textRow:{
      marginTop: 100,
      fontSize:25,
      color: 'green',
      fontStyle: 'italic',
      textAlign: 'center'
    }
  });