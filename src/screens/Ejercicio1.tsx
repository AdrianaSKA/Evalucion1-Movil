import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const Ejercicio1 = () => {

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const [pares, setPares]= useState<number[]>([] );
    const [impares, setImpares] =useState<number[] >([]);


    const clasificarNumeros = () => {
        setPares(numeros.filter(num => num % 2 === 0));
        setImpares(numeros.filter(num => num % 2 !== 0));
    };


    return (
        <View style={styles.container}>

            <Text style={styles.title}>BIENVENIDO</Text>
            <Text style={styles.text}><Text style={styles.bold}>Numeros:</Text> {numeros.join(', ')}</Text>
            
            <Button title="CLASIFICAR" 
            onPress={clasificarNumeros} />
            
            {pares.length > 0 && (
                <View>
                    <Text style={styles.text}><Text style={styles.bold}>Pares:</Text> {pares.join(', ')}</Text>
                    <Text style={styles.text}><Text style={styles.bold}>Impares:</Text> {impares.join(', ')}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        padding:20,
    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    text:{
        fontSize: 16,
        marginBottom: 5,
    },
    bold:{
        fontWeight:'bold',

    },
});