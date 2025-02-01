import React from 'react'
import { StyleSheet, View } from 'react-native';

export const Cuadros4 = () => {
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxYellow: {
        width: 100,
        height: 100,
        backgroundColor: '#e6bf5e',
        borderWidth: 10,
        borderColor: 'white',

    },
    boxPurple: {
        width: 100,
        height: 100,
        backgroundColor: '#956bd5',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top:0,
        left: 0,
    },
    boxCian: {
        width: 100,
        height: 100,
        backgroundColor: '#5ee6c9',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom:0,
        right: 0,
    }
    
})