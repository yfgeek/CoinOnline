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
        const headerColor = this.props.color ? this.props.color : '#364c62';
        const indent = this.props.indent ? this.props.indent : 10;
        return (
            <View style={{flexDirection:'row', justifyContent:'center',height:66,backgroundColor:headerColor}}>
                <View style={{flex:1, marginTop:22, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

                    <View style={{marginLeft: 20}}>
                        <Text style={{color:'#FFFFFF', fontSize:17, letterSpacing: indent, textAlign: "center"}}>{ title }</Text>
                    </View>
                </View>
            </View>

        )
    }
}


export default HeaderTitle
