import React, { Component, } from 'react'
import {
    View,
    Image, Touchable, TouchableHighlight, TouchableOpacity
} from 'react-native'

import {createIconSetFromIcoMoon } from 'react-native-vector-icons';

import selectionConfig from '../icon/selection.json';
import {ColorConfig} from '../icon/config';

const Icon = createIconSetFromIcoMoon(selectionConfig);
const list = ["0x" , "bcn" , "doge" , "gnt" , "miota" , "pivx" , "steem" , "xmr" , "ada" , "bnb" , "emc" , "hsr" , "mln" , "pot" , "strat" , "xrp" , "amp" , "btc" , "eos" , "icn" , "mona" , "ppc" , "trx" , "xtz" , "ant" , "btcd" , "etc" , "kmd" , "neo" , "ppt" , "usdt" , "zec" , "ardr" , "bts" , "eth" , "knc" , "nlg" , "qtum" , "vtc" , "ark" , "dash" , "fct" , "lkk" , "nmc" , "rep" , "waves" , "bat" , "dcr" , "game" , "lsk" , "nxt" , "salt" , "xcp" , "bcc" , "dgb" , "gbyte" , "ltc" , "omg" , "sc" , "xem" , "bch" , "dgd" , "gno" , "maid" , "pay" , "sngls" , "xlm", "more"];

class CoinIcon extends Component {
    constructor(props) {
        super(props);
    }

    getIcon(cuy){
        cuy = cuy.toLowerCase() || "btc";

        let w = this.props.width || 48;
        let h = this.props.height || 48;

        if(cuy==="more")
            return <Image source={require('../images/more.png')} style = {{width:w,height:h}}/>;

        if(list.indexOf(cuy)>0){
            let color = '#f5922f';
            ColorConfig.forEach((item,index)=>{if(item.cuy === cuy)  color = item.color});
            return <Icon name={cuy} size={w} color={color}/>;
        }
        return <Icon name="btc" size={w}/>;
    }

    render() {
        let icon = this.getIcon(this.props.cuy);
        let w = this.props.width || 48;
        let m = this.props.marginLeft || 15;
        let r = this.props.marginRight || 0;
        let e = this.props.event || null;
        return (
            <TouchableOpacity onPress={e}>
                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginLeft: m,
                    marginRight: r,
                    height: w,
                    width: w,
                }}>
                    {icon}
                </View>
            </TouchableOpacity>
        )
    }
}


export default CoinIcon
