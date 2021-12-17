import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';


export default function ListEmail({navigation}){

    const [emaillist, setEmailList] = useState([]);

    useEffect(() => {
        async function getData() {
          const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
          const emaillist = await response.json();
          setEmailList(emaillist);
        }
        getData();
      }, [])

    function renderItem({ item }) {
        return <TouchableOpacity style={styles.email} onPress={() => navigation.navigate("Email", {id: item.id}, )}>
                    <Image style={styles.image} source={{ uri: item.picture }} />
                    <View style={styles.textBox}>
                        <View style={styles.linha}>
                            <Text style={styles.nome}>{item.tittle}</Text>
                            <Text style={styles.time}>{item.time}</Text>                  
                        </View>
                        <View style={styles.linha}>
                        <Text style={styles.corpo}>Para: {item.to}</Text> 
                        <AntDesign name={item.star ? "star" : "staro"} size={26} color="yellow" />    
                        </View>
                    </View>   
            </TouchableOpacity>
    }
    
    return (
        <View style={styles.fundo}>
            <StatusBar style="auto"/>
            <FlatList
                data={emaillist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}          
            />
        </View>
  );
}


const styles = StyleSheet.create({

    fundo:{
        backgroundColor: '#111111',
        flex: 1,
    },

    email: {
        height: 60,
        flexDirection:  'row',
        backgroundColor: '#2E2E2E', 
        margin: 1,  
        borderRadius: 17,
  
    },
    
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 5,
        borderWidth: 1,
        borderColor: 'gray',
    },
    
    textBox: {
        justifyContent: 'center',
        margin: 15,
        height: 30,
    },
    
    linha:{  
        flexDirection: "row",  
        justifyContent: 'space-between',      
        width: 315,
    },

    nome: {
        fontWeight: 'bold',
        fontSize: 20,        
        color: "#00FA9A"
    },

    time:{
        fontSize: 15,
        color: "#00FA9A"
    },

    corpo:{
        color: "white",
        fontSize: 16,
    }

});
