import React from 'react'
import { StyleSheet, View } from 'react-native';

export const Cuadros5 = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.boxPurple}></View>
            <View style = {styles.boxYellow}></View>
            <View style = {styles.boxCian}></View>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#31394d',
        flexDirection: 'row',
        justifyContent: 'space-between'
        
        
    },
    boxYellow: {
        width: 100,
        backgroundColor: '#e6bf5e',
        borderWidth: 10,
        borderColor: 'white',

    },
    boxPurple: {
        width: 100,
        backgroundColor: '#956bd5',
        borderWidth: 10,
        borderColor: 'white',

    },
    boxCian: {
        width: 100,
        backgroundColor: '#5ee6c9',
        borderWidth: 10,
        borderColor: 'white',

    }
    
})