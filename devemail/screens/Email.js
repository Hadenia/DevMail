import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

export default function Email({ route }){

    const {id} = route.params;
    
    const [email, setemail] = useState([]);

    useEffect(()=> {
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/' + id);
            const email = await response.json();
            setemail(email);
        }
        getData();
    }, []);


    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>

            <View style={styles.title}>
                    <Text style={styles.titletx}>{email.tittle}</Text>      
                    <AntDesign name={email.star ? "star" : "staro"} size={35} color="yellow" style={styles.star} />           
            </View>

            <View style={styles.container}>   

                <View style={styles.linha}>
                    <Image style={styles.image} source={{ uri: email.picture }} />                
                    <View style={styles.coluna}>
                        <View style={styles.infor}>                
                            <Text style={styles.inforDe}>{email.from}</Text>
                            <Text style={styles.inforTime}>{email.time}</Text>
                        </View>  
                        <Text style={styles.inforPara}>Para: {email.to}</Text> 
                    </View>                            
                </View>                
              
                <WebView style={styles.webview}  source={{ html: `<div style="font-size: 50px;">${email.body}</div>`}}/>    
                
            </View>

         </View>
    )
}


const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: '#111111',
    },

    title:{
        flexDirection: "row",    
        justifyContent: 'space-between',     
        margin: 10,
        height: 50, 
    },

    titletx:{
        fontWeight: 'bold',
        fontSize: 30,        
        color: "#00FA9A",
        padding: 1,
    },

    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        margin: 5,
        borderColor: "#00FA9A",
        borderWidth: 1,
        borderColor: 'gray',
    },

    linha:{  
        margin: 3, 
        flexDirection: "row",  
        justifyContent: 'space-between',      
        width: 402,        
    },

    coluna:{
        flexDirection: "column",  
        margin: 15,
    },

    infor:{
        flexDirection: "row",  
        justifyContent: 'space-between',      
        width: 300,        
    },

    inforDe:{
        fontSize: 20,        
        color: "#00FA9A",        
    },

    inforPara:{

        fontSize: 15,        
        color: "#00FA9A"
    },

    inforTime:{
        fontSize: 15,
        color: "#00FA9A"
    },

    webview:{        
        backgroundColor: '#4F4F4F',
        width: 375,
        margin: 20,
    }    

});