'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
} from 'react-native' ;

export default class Options extends Component {
    render() {

        return (
                <View style={styles.container}>
                    <View style={styles.heading}>
                    <Text style={styles.price}>MEEE</Text>
                    <Text style={styles.title}>WHOOO</Text>
                    <View style={styles.separator}/>
                    </View>
                    <Text style={styles.description}>BLAHH</Text>
                </View>
               );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 65,
        backgroundColor: 'white'
    },
    heading: {
        backgroundColor: '#F8F8F8',
    },
    separator: {
        height: 1,
        backgroundColor: '#DDDDDD'
    },
    image: {
        width: 400,
        height: 300
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 5,
        color: '#0098DB',
    },
    title: {
        fontSize: 20,
        marginLeft: 5,
        marginBottom: 5,
        color: '#656565'
    },
    description: {
        fontSize: 18,
        margin: 5,
        color: '#656565'
    },
    instructors: {
        fontSize: 17,
        margin: 5,
        color: '#009B76',
    },
});
