import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <Text style={styles.superior}>Caixa de Entrada</Text>     
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'space-between' 

  },

  superior: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#00FA9A",
  },


});