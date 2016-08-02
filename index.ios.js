/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
} from 'react-native';
var SearchPage = require('./SearchPage');
import SearchResults from './SearchResults'
import CourseView from './CourseView'
import Options from './Options'


class exploreCourses extends Component {
    render() {
        return (
            <Navigator
            initialRoute={{ title: 'Search', index: 0, passProps: {}  }}
            renderScene={this.renderScene}
            configureScene={this.configureScene}
            navigationBar={
                <Navigator.NavigationBar
                style={styles.navbar}
                routeMapper={{
                    Title: (route, navigator, index, navState) => {
                        return (<Text style={styles.navbarText}>{route.title}</Text>)
                    }, 
                    LeftButton: this.LeftButton,
                    RightButton: () => {
                        return null 
                    }
                }}
                />
            }>
            </Navigator>
            );
    }
    configureScene(route, routeStack) {
        if (route.title == "Options")
            return Navigator.SceneConfigs.FloatFromBottom
        else return Navigator.SceneConfigs.PushFromRight
    }
    renderScene(route, navigator) {
        console.log(route)
        if (route.title == "Search")
            return <SearchPage navigator={navigator} {...route.passProps}/>
        else if (route.title == "Results")
            return <SearchResults navigator={navigator} {...route.passProps}/>
        else if (route.title == "Options")
            return <Options navigator={navigator} {...route.passProps}/>
        else  /* assumed to be course view */
            return <CourseView navigator={navigator} {...route.passProps}/>
    }
    LeftButton(route, navigator, index, navState) {
        if (route.index === 0) {
          return null;
        } else {
          return (
            <TouchableHighlight style={styles.navbarButton} onPress={() => navigator.pop()}>
              <Text style={styles.navbarButtonText}>Back</Text>
            </TouchableHighlight>
          );
        }
    }
}

const styles = StyleSheet.create({
    navbarButton: {
        padding: 10,
    },
    navbarButtonText: {
        fontSize: 17,
        fontWeight: '500',
        color: 'blue',
    },
    navbarText: {
       fontSize: 25,
       color: 'white'
    },
    navbar: {
        backgroundColor: '#8C1515'
    },
    navigator: {
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('exploreCourses', () => exploreCourses);
