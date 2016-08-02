'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ScrollView,
} from 'react-native' ;

export default class CourseView extends Component {
    render() {
        var course = this.props.course;
        
        var courseCode = course.subject + " " + course.code;

        return (
                <ScrollView style={styles.container}>
                <View style={styles.heading}>
                <Text style={styles.price}>{courseCode}</Text>
                <Text style={styles.title}>{course.title}</Text>
                <View style={styles.separator}/>
                </View>
                <Text style={styles.description}>{course.description}</Text>
                {this.miniDesc()}
                </ScrollView>
               );
    }
    miniDesc() {
        var descString = this.props.course.instructors.join(", ")
        descString += " | "
        descString += this.props.course.gers.join(", ")
        descString += " | "
        descString += this.props.course.terms.join(", ")
        return <Text style={styles.instructors}>{descString}</Text>
    }
    // instructors() {
    //     return this.props.course.instructors.map((val, id)=> {
    //         return <Text style={styles.instructors} key={id}>{val}</Text>
    //     })
    // }
    // gers() {
    //     return this.props.course.gers.map((val, id)=> {
    //         return <Text style={style.gers} key={id}>{val}</Text>
    //     })
    // }
    // terms() {
    //     return this.props.course.terms.map((val, id)=> {
    //         return <Text style={style.terms} key={id}>{val}</Text>
    //     })
    // }
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
