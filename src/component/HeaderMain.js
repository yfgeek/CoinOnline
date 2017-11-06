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
                height: 200,
                justifyContent: 'center',
            }} source={require('../images/background.jpg')} resizeMode='cover' >
                <View style={{flex:1, marginTop:22, flexDirection:'row', justifyContent:'flex-end', alignItems:'baseline'}}>
                    <View style={{backgroundColor: '#363b40', overflow: 'hidden', borderRadius: 6, marginRight: 15}} >
                        <Text style={{marginLeft: 2, marginRight: 2, marginBottom: 3, marginTop: 3, color: '#b7bec5', fontSize:17}}  onPress={() =>
                            this.props.nav('AddCoinController') }>
                            币
                        </Text>
                    </View>
                </View>

                <View style={{alignItems:'flex-start',flex:4, marginTop:0,overflow: 'hidden', justifyContent:'center', flexDirection:'row',backgroundColor:'transparent'}}>
                    <Text style={{marginLeft: 2, marginRight: 2, marginBottom: 3, marginTop: 3, color: '#ffc107', fontSize:25}}>
                        Coin Online
                    </Text>

                </View>
            </ImageBackground>
            </View>

        )
    }
}


export default Header
