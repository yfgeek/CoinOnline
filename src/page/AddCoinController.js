import React, { Component, } from 'react'
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import {connect} from "react-redux";
import CoinIcon from "../component/CoinIcon";
import CoinCard from "../component/CoinCard";
import {addCoinMiddleware, editCoinMiddleware} from "../middleware/CustomMiddleware";
import {deleteCoin, MODE_ADD, MODE_EDIT} from "../actions/actions";
import Modal from 'react-native-modalbox';
import SelectCoinController from "./SelectCoinController";

const contentHeight = Dimensions.get('window').height - 50;
const dismissKeyboard = require('dismissKeyboard');

let _this = null;

class AddCoinController extends Component {

    static navigationOptions = ({navigation}) => ({

        // header : null,
        headerTitle: navigation.state.params.id<0 ? '添加虚拟货币' : '修改虚拟货币' ,
        headerBackTitle: '返回',
        headerStyle:{
            backgroundColor: '#244f85',
        },
        headerTitleStyle: {
            color: '#ffffff',
        },
        headerBackTitleStyle:{
            color: '#ffffff',
        },
        headerRight:(
            <View>
                <Text style={{
                    color: '#ffffff',
                    marginRight: 12,
                }}
                   onPress={(e) => _this.doAction(_this.state.mode)}
                >保存</Text>
            </View>
        ),
    });

    constructor(props) {
        super(props);
        let { id, cuy, numbers, description} = this.props.navigation.state.params;
        if (numbers) numbers = numbers.toString();
        const mode = id <0 ? MODE_ADD : MODE_EDIT;
        this.state={
            id : id,
            numbers: numbers || '',
            description: description || '',
            cuy: cuy || 'btc',
            mode: mode,
            swipeToClose: true,
        };
    }

    componentDidMount() {
        _this = this;
    }

    _onPress() {
        console.warn("press");
        this.refs.inputNumber.blur();
    }

    render() {
        return(
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={280}>
                <ImageBackground  style={styles.main} resizeMode='stretch' >
                    <View style={styles.card} onPress={()=>dismissKeyboard()}>
                    <CoinCard cuy={this.state.cuy} description = {this.state.description}/>
                    </View>
                    <View style={styles.box}>
                        <View>
                        </View>

                        <View style={styles.secondLayer} >
                            <Text style={styles.label}>拥有货币数量 (*)</Text>
                            <TextInput
                                style={styles.inputNumber}
                                onChangeText={(text) => this.setState({numbers: text})}
                                keyboardType ='numeric'
                                placeholder = '0.1'
                                defaultValue = {this.state.numbers}
                            />

                        </View>
                        <View style={styles.thirdLayer}>
                            <Text style={styles.label}>数字货币类型 (*)</Text>
                            <View style={styles.icons}>
                                {
                                    ["btc","ltc","etc","xmr"].map(
                                        (item, index)=>{
                                            return (
                                                <TouchableOpacity key={index}  onPress={(e)=>{
                                                    this.setState({
                                                            cuy : item,
                                                        }
                                                    );
                                                }
                                                } >
                                                    <CoinIcon style={styles.thumb} cuy={item} width={42} height={42} marginLeft ={3} marginRight ={5}/>
                                                </TouchableOpacity>
                                                )

                                        }
                                    )
                                }
                                <TouchableOpacity onPress={(e)=>{
                                    dismissKeyboard();
                                    this.refs.modal1.open();
                                }
                                } >
                                <CoinIcon style={styles.thumb} cuy="more" width={42} height={42} marginLeft ={3} marginRight ={5} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.forthLayer}>
                            <Text style={styles.label}>数字货币账户</Text>
                            <TextInput
                                onChangeText={(text) => this.setState({description: text})}
                                style={styles.inputDescription}
                                defaultValue = {this.state.description}
                                placeholder = '1geekH9EiFeitKpigP8NKNJ6U...'
                            />
                        </View>
                    </View>
                </ImageBackground>
                <Modal style={styles.modal} position={"bottom"} ref={"modal1"} swipeArea={20}>
                    <ScrollView>
                        <View style={{width: Dimensions.get('window').width}}>
                            <SelectCoinController setCode={(cuy)=>(this.setState({
                                    cuy : cuy,
                            })
                            )}/>
                        </View>
                    </ScrollView>
                </Modal>
            </KeyboardAvoidingView>

        )
    }


    doAction(e){
        switch(e){
            case MODE_EDIT:
                this.editToCoin();
                break;
            case MODE_ADD:
                this.addToCoin();
                break;
            default:
                this.addToCoin();
        }
    }

    addToCoin(){
        const { dispatch } = this.props;
        dispatch(
            addCoinMiddleware(
                this.state.cuy +'-' + this.props.visibleSettings.nation,
                parseFloat(this.state.numbers),
                this.state.description
        ));
        this.props.navigation.goBack();
    }

    editToCoin(){
        const { dispatch } = this.props;
            dispatch(editCoinMiddleware(
                this.state.id,
                this.state.cuy +'-' + this.props.visibleSettings.nation,
                parseFloat(this.state.numbers),
                this.state.description
            ));
        this.props.navigation.goBack();
    }

    deleteCoin(index){
        const { dispatch } = this.props;
        dispatch(deleteCoin(index));
    }

}

function select(state) {
    return {
        visibleCoins: state.reducer.coins,
        visibleSettings: state.reducer.settings,
    }
}


const styles = StyleSheet.create({
    box: {
        width: '100%',
        height:contentHeight*0.6,
    },
    card:{
        width: '90%',
        height: contentHeight*0.4,
        justifyContent: 'center',
    },
    main: {
        backgroundColor: '#244f85',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondLayer:{
        backgroundColor: '#3d6b9c',
        flex : 1,
        width: '100%',
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 10,

    },
    thirdLayer:{
        backgroundColor: '#275288',
        flex : 1,
        width: '100%',
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 10,

    },
    forthLayer:{
        backgroundColor: '#244c7f',
        flex : 1,
        width: '100%',
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 10,

    },
    label:{
        fontSize: 12,
        lineHeight: 12,
        color: '#bdc0d1',
        fontWeight: '100',
        paddingBottom:15,
    },

    icons: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    title:{
        position: 'absolute',
        top: 50,
        backgroundColor:'transparent',

    },
    titleText:{
        color: '#ffffff',
        fontSize: 18,
        shadowColor: '#071e48',
        shadowOffset:{
            width: 0,
            height: 0,
        },
        shadowRadius: 2,
    },
    inputNumber:{
        lineHeight: 40,
        color: '#fff',
        fontSize: 48,
        borderColor: null,
        borderWidth: 0
    },
    inputDescription:{
        lineHeight: 40,
        color: '#ffffff',
        fontSize: 25,
        borderColor: null,
        borderWidth: 0
    },
    modal: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '90%',
        backgroundColor: "#f3f3f3",
    },

});

export default connect(select)(AddCoinController)