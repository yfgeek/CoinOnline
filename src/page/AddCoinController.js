import React, { Component, } from 'react'
import {
    StyleSheet,
    Button,
    View,
    Text,
    StatusBar,
    ListView,
    Dimensions,
    Platform,

} from 'react-native'
import Spinner from 'react-native-spinkit'
import UltimateListView from "react-native-ultimate-listview";
import FlatListItem from "../component/FlatListItem";


var contentHeight = Dimensions.get('window').height-500;
var contentWidth = Dimensions.get('window').width;

class AddCoinController extends Component {

    static navigationOptions ={
        headerTitle: '添加虚拟货币',
        headerBackTitle: '返回',
        headerStyle:{
            backgroundColor: '#364c62',
        },
        headerTitleStyle: {
            color: '#ffffff',
        },
        headerBackTitleStyle:{
            color: '#ffffff',
        }
    };

    constructor(props) {
        super(props);

        this.state={
            dataSource:null,
            loaded: false,
            layout: 'list',
            text: ''

        }
    }

    onFetch = async (page = 1, startFetch, abortFetch) => {
        try {
            //This is required to determinate whether the first loading list is all loaded.
            let pageLimit = 20;
            if (this.state.layout === 'grid') pageLimit = 60;
            let skip = (page - 1) * pageLimit;

            //Generate dummy data
            fetch("https://www.cryptonator.com/api/currencies",{
                method : 'GET',
            })
                .then((response) => response.json())
                .then(
                    (responseData) => {
                        let rowData = Array.from({length: pageLimit}, (value, index) => `item -> ${index + skip}`);

                        this.setState({
                            dataSource: ds.cloneWithRows(responseData.rows),
                            loaded: true,
                        });
                    }
                )
                .catch((error) => {
                })
                .done();

            //Simulate the end of the list if there is no more data returned from the server
            if (page === 10) {
                rowData = [];
            }
            startFetch(rowData, pageLimit);
        } catch (err) {
            abortFetch(); //manually stop the refresh or pagination if it encounters network error
            console.log(err);
        }
    };
    fetchData() {

    }
    componentDidMount() {
        // this.fetchData();
    }
    renderItem = (item, index, separator) => {
        if (this.state.layout === 'list') {
            return (
                <FlatListItem item={item} index={index} onPress={this.onPressItem}/>
            );
        } else if (this.state.layout === 'grid') {
            return (
                <FlatListGrid item={item} index={index} onPress={this.onPressItem}/>
            );
        }
    };
    renderLoadingView() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: contentHeight/2-this.state.spinkitSize}}>
                <Spinner
                    size={this.state.spinkitSize}
                    color='#474c51'
                    type='CircleFlip'
                />
            </View>
        );
    }

    renderCoin(){
        return(
            <UltimateListView
                ref={(ref) => this.listView = ref}
                key={this.state.layout} //this is important to distinguish different FlatList, default is numColumns
                onFetch={this.onFetch}
                keyExtractor={(item, index) => `${index} - ${item}`}  //this is required when you are using FlatList
                refreshableMode="advanced" //basic or advanced
                item={this.renderItem}  //this takes three params (item, index, separator)
                numColumns={this.state.layout === 'list' ? 1 : 3} //to use grid layout, simply set gridColumn > 1
                //----Extra Config----
                displayDate
                header={this.renderHeader}
                paginationFetchingView={this.renderPaginationFetchingView}

                arrowImageStyle={{width: 20, height: 20, resizeMode: 'contain'}}
                dateStyle={{color: 'lightgray'}}
                refreshViewStyle={Platform.OS === 'ios' ? {height: 80, top: -80} : {height: 80}}
                refreshViewHeight={80}
            />

            // <ListView
            //     dataSource={this.state.dataSource}
            //     renderRow={(item)=>this._renderRow(item)}
            // />

        )
    }

    rendefrItem(item, index) {
        return (
            <View style={styles.list}>
                {/*<Image source={{uri:movie.posters.thumbnail}} style={styles.thunbnail}/>*/}
                <Text>{item.name}</Text>
            </View>
        )
    }
    render() {
        // if (!this.state.dataSource) {
        //     return this.renderLoadingView();
        // }
        return this.renderCoin();
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    list:{
        height: 20,
        lineHeight: 20,
        padding:5,
    }

});

export default AddCoinController
