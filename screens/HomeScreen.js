import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({navigation}) {

    avanzarDos =() =>{
        console.log("Avance a la segunda pantalla")
        navigation.navigate('SecondScreen')
    }
  
return (
    <>
    <View>
      <Text style={styles.textRow}>Pantalla Inicial, Bienvenido! 😃</Text>
      <Button title="Siguiente pantalla" onPress={()=> avanzarDos()}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    textRow:{
      marginTop: 100,
      fontSize:25,
      color: 'red',
      fontStyle: 'italic',
      textAlign: 'center'
    }
  });

