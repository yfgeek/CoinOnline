import React, { Component, } from 'react'
import {
    View,
    Text, ImageBackground,Dimensions
} from 'react-native'
import {addCoin} from "../actions/actions";

let contentHeight = Dimensions.get('window').height-40;

class Header extends Component {

    constructor(props) {
        super(props);
    }


    renderEmpty(){
        return (
            <View>
                <ImageBackground style={{
                    backgroundColor: '#1987fb',
                    width: '100%',
                    height: contentHeight,
                }} source={require('../images/background.jpg')} resizeMode='cover' >

                    <View style={{flex: 4, marginTop:0, marginBottom: 15 ,overflow: 'hidden', justifyContent:'center', flexDirection:'column',backgroundColor:'transparent'}}>
                        <View style={{marginBottom: 40}}>
                        <Text style={{ alignSelf: 'center',backgroundColor:'transparent' , color: '#fff', fontSize:48}}>
                            0.00
                        </Text>
                            <Text style={{alignSelf: 'center' , marginTop: 20,alignItems:'center', color: '#fff', fontSize:15,fontWeight: '100'}}>
                                您尚未添加任何数字货币
                            </Text>
                        </View>

                        <View style={{borderColor: '#ddd',backgroundColor:'transparent',borderWidth: 0.8, alignItems:'center', overflow: 'hidden', height: 32,width: 100, borderRadius: 5, alignSelf: 'center' }} >
                            <Text
                                style={{ lineHeight:12, color: '#fff', padding: 10, fontSize:14, fontWeight: '100'}}
                                onPress = { (e) => this.props.nav('AddCoinController') }>
                                点我添加
                            </Text>
                        </View>
                    </View>

                </ImageBackground>
            </View>

        )
    }
    renderAll() {
        return (
            <View>
            <ImageBackground style={{
                backgroundColor: '#1987fb',
                width: '100%',
                height: 250,
                justifyContent: 'center',
            }} source={require('../images/background.jpg')} resizeMode='cover' >
                <View style={{flex:1, marginTop:22, flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end'}}>

                </View>

                <View style={{flex: 4, marginTop:0, marginBottom: 15 ,overflow: 'hidden', justifyContent:'flex-end', flexDirection:'column',backgroundColor:'transparent'}}>
                    <Text style={{marginLeft: 30, marginRight: 2, alignSelf: 'flex-start',backgroundColor:'transparent' ,marginBottom: 3, marginTop: 3, color: '#fff', fontSize:32}}>
                        £{
                        this.props.balance.toFixed(2)
                    }
                    </Text>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{marginLeft: 30, marginRight: 2, alignSelf: 'flex-end' ,alignItems:'flex-end',marginBottom: 3, marginTop: 3, color: '#fff', fontSize:15,fontWeight: '100'}}>
                        总资产(估计)
                    </Text>
                    <View style={{borderColor: '#ddd',backgroundColor:'transparent',borderWidth: 0.8, alignItems:'center', overflow: 'hidden', width: 32, height: 32,borderRadius: 10, marginRight: 20, alignSelf: 'flex-end' }} >
                        <Text
                            style={{ lineHeight:35, color: '#fff', fontSize:38, fontWeight: '100'}}
                            onPress = { (e) => this.props.nav('AddCoinController') }>
                            +
                        </Text>
                    </View>
                    </View>
                </View>
            </ImageBackground>
            </View>

        )
    }

    render(){
        if(this.props.balance<=0) return this.renderEmpty();
        return this.renderAll();
    }
}


export default Header
