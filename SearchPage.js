'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicator,
    Image,
    Modal,
} from 'react-native' ;

import api from './api'
import SearchResults from './SearchResults'


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'CS 140',
            isLoading: false,
            modalVisible: false

        };

    }

    onSearchTextChanged(event) {
        console.log('onSearchTextChanged');
        this.setState({ searchString: event.nativeEvent.text  });
        console.log(this.state.searchString);

    }
    _handleResponse(courses) {
        this.setState({ isLoading: false , message: 'found ' + courses.length + ' courses!'  });
        this.props.navigator.push({
            title: 'Results',
            passProps: {
                component: SearchResults,
                courses: courses
            }
        });
    }

    _executeQuery(query) {
        this.setState({ isLoading: true  });
        api.searchCourses(query)
        .then((json) => {
            console.log(json)
            this._handleResponse(json)
        })
        .catch(error =>{
            this.setState({
                isLoading:false,
                message: 'Something bad happened' + error
            })
        })
    }

    onSearchPressed() {
        console.log("hello")
        console.log(api)
        this._executeQuery(this.state.searchString);
    }
    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    render() {
        var spinner = this.state.isLoading ?  ( <ActivityIndicator size='large'/> ) : ( <View/> ); 
        return ( 
        
                <View>
                <Modal
                visible={this.state.modalVisible}
                onRequestClose={() => {this._setModalVisible(false)}}
                animationType={"slide"}
                >
                </Modal>
                <View style={styles.container}>
                <Text style={styles.description}>
                Search Explore Courses!
                </Text>
                <Text style={styles.description}>
                Search by course title or description!
                </Text>
                <View style={styles.flowRight}>
                <TextInput
                  style={styles.searchInput}
                  value={this.state.searchString}
                  onChange={this.onSearchTextChanged.bind(this)}
                  placeholder='Search For Courses!'/>
                <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={this.onSearchPressed.bind(this)}>
                <Text style={styles.buttonText}>Go</Text>
                </TouchableHighlight>
                </View>
                <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
                <Text onPress={this._setModalVisible.bind(this)}style={styles.buttonText}>Options</Text>
                </TouchableHighlight>
                {spinner}
                <Text style={styles.description}>{this.state.message}</Text>
                </View>
                </View>
                );

    }

}
var styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'

    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'

    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'

    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'

    },
    button: {
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#0098DB',
        borderColor: '#007C92',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'

    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#0098DB',
        borderRadius: 8,
        color: '#007C92'

    }

});

module.exports = SearchPage;
