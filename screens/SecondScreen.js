import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function SecondScreen({navigation}) {

    avanzarTres =() =>{
        console.log("Avance a la tercera pantalla")
        navigation.navigate('ThirdScreen')
    }

    volverUno =() =>{
        console.log("Volvi a la primera pantalla")
        navigation.navigate('HomeScreen')
    }

  return (
    <View>
      <Text style={styles.textRow} >Esta es la segunda pantalla!</Text>
      <Button color="#3AE8D0" title="Siguiente pantalla" onPress={()=> avanzarTres()}/>
      {/* <Text>{"\n"}</Text> */}
      <Button title="Anterior Pantalla" onPress={()=> volverUno()}/>
    </View>
  );
}

const styles = StyleSheet.create({
    textRow:{
      marginTop: 100,
      fontSize:25,
      color: 'blue',
      fontStyle: 'italic',
      textAlign: 'center'
    }
  });
