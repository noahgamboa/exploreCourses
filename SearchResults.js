'use strict';

import React, { Component  } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicator,
    Image,
    ListView,
} from 'react-native' ;

export default class SearchResults extends Component {

    constructor(props) {
        super(props);
        var dataSource = new ListView.DataSource(
                {rowHasChanged: (r1, r2) => r1.guid !== r2.guid}
                );
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.courses)

        };

    }

    renderRow(rowData, sectionID, rowID) {
        return (
                <TouchableHighlight
                onPress={() => this.rowPressed(rowData)}
                underlayColor='#dddddd'>
                  <View>
                    <View style={styles.rowContainer}>
                      <View  style={styles.textContainer}>
                        <Text style={styles.price}>{rowData.subject + " " + rowData.code}</Text>
                        <Text style={styles.title}
                              numberOfLines={1}>{rowData.title}</Text>
                      </View>
                    </View>
                    <View style={styles.separator}/>
                  </View>
                </TouchableHighlight>

               );

    }
    rowPressed(course) {
       this.props.navigator.push({
            title: "",
            passProps: {
                course: course
            }
       }) 
    }

    render() {
        return (
        <View style={styles.container}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}/>
                </View>

               );

    }


}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 65
    },
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10

    },
    textContainer: {
        flex: 1

    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'

    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'

    },
    title: {
        fontSize: 20,
        color: '#656565'

    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10

    }

})
