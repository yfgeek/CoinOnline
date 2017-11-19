import React, { Component, } from 'react'
import {
    StyleSheet,
    Dimensions,
    Platform, ListView, Text, View, TouchableOpacity,

} from 'react-native'

import {ButtonGroup, List, ListItem} from 'react-native-elements'
import CoinIcon from "../component/CoinIcon";
import {CoinList} from "../icon/config"

class SelectCoinController extends Component {

    static navigationOptions ={
        header : null,
    };

    constructor(props) {
        super(props);
        this.state={
            dataSource:null,
            loaded: false,
            layout: 'list',
            text: '',
            selectedIndex: 0
        };
        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    componentDidMount() {
        this.loadFromConfig();
    }
    loadFromAPI(){
        fetch('https://www.cryptonator.com/api/currencies')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data:  new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2 }).cloneWithRows(json.rows),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    loadFromConfig(){
        this.setState({
            data:  new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2 }).cloneWithRows(CoinList),
        });
    }

    renderRow (rowData,index) {
            return (
                <TouchableOpacity onPress = { (e) => {
                } }>
                <ListItem
                    avatar={<CoinIcon
                        cuy = {rowData.code.toLowerCase()}
                        marginLeft ={0}
                    />}
                    key={index}
                    title={rowData.name}
                    subtitle={rowData.code}
                />
                </TouchableOpacity>
            );
    }

    render () {
        const buttons = ['常用', '所有', '搜索'];
        const { selectedIndex } = this.state;

        return (
            <View>
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{marginTop:20,height: 30}}
            />
                {this.renderList()}
            </View>
        )
    }

    renderList() {
        if (!this.state.data) {
            return(
                <Text>loading...</Text>
            );
        }
        return (
            <List style={styles.list}>
                <ListView
                    renderRow={this.renderRow}
                    dataSource={this.state.data}
                />
            </List>
        )
    }
}

const styles = StyleSheet.create({
    list:{
        position: 'relative',
        top: -50,
    }

});

export default SelectCoinController
