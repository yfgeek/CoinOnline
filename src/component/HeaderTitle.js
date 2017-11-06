import React, { Component, } from 'react'
import {
    View,
    Text
} from 'react-native'
class HeaderTitle extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.title ? this.props.title  : "未设置标题" ;
        return (
            <View style={{flexDirection:'row', justifyContent:'center',height:66,backgroundColor:'#364c62'}}>
                <View style={{flex:1, marginTop:22, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

                    <View style={{marginLeft: 20}}>
                        <Text style={{color:'#FFFFFF', fontSize:17, letterSpacing: 10, textAlign: "center"}}>{ title }</Text>
                    </View>
                </View>
            </View>

        )
    }
}


export default HeaderTitle
