import React, { Component, } from 'react'
import {
    View,
    Text, ImageBackground
} from 'react-native'
class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
            <ImageBackground style={{
                backgroundColor: '#364c62',
                width: '100%',
                height: 250,
                justifyContent: 'center',
            }} source={require('../images/background.jpg')} resizeMode='cover' >
                <View style={{flex:1, marginTop:22, flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end'}}>

                </View>

                <View style={{flex: 4, marginTop:0, marginBottom: 15 ,overflow: 'hidden', justifyContent:'flex-end', flexDirection:'column',backgroundColor:'transparent'}}>
                    <Text style={{marginLeft: 30, marginRight: 2, alignSelf: 'flex-start',backgroundColor:'transparent' ,marginBottom: 3, marginTop: 3, color: '#fff', fontSize:32}}>
                        £{
                        this.props.balance
                    }
                    </Text>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{marginLeft: 30, marginRight: 2, alignSelf: 'flex-end' ,alignItems:'flex-end',marginBottom: 3, marginTop: 3, color: '#fff', fontSize:15,fontWeight: '100'}}>
                        总资产(估计)
                    </Text>
                    <View style={{borderColor: '#ddd',backgroundColor:'transparent',borderWidth: 0.8, alignItems:'center', overflow: 'hidden', width: 32, height: 32,borderRadius: 10, marginRight: 20, alignSelf: 'flex-end' }} >
                        <Text style={{ lineHeight:35, color: '#fff', fontSize:38, fontWeight: '100'}}
                            //   onPress={() =>
                            // this.props.nav('AddCoinController')
                              onPress = { (e) => this.handleClick(e)
                              }>
                            +
                        </Text>
                    </View>
                    </View>
                </View>
            </ImageBackground>
            </View>

        )
    }

    handleClick(e) {
            let a  = 'btc-gbp';
            this.props.onAddCoin(a);
    }
}


export default Header
