import React from 'react'
import { StyleSheet, View } from 'react-native';

export const Cuadros8 = () => {
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
        alignSelf: 'flex-end',
    },
    boxPurple: {
        width: 100,
        height: 100,
        backgroundColor: '#956bd5',
        borderWidth: 10,
        borderColor: 'white',
    },
    boxCian: {
        width: 100,
        height: 100,
        backgroundColor: '#5ee6c9',
        borderWidth: 10,
        borderColor: 'white',
    }
})