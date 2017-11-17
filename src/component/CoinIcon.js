import React, { Component, } from 'react'
import {
    View,
    Image, Touchable, TouchableHighlight, TouchableOpacity
} from 'react-native'
class CoinIcon extends Component {

    constructor(props) {
        super(props);
        this.list = ["0x" , "bcn" , "doge" , "gnt" , "miota" , "pivx" , "steem" , "xmr" , "ada" , "bnb" , "emc" , "hsr" , "mln" , "pot" , "strat" , "xrp" , "amp" , "btc" , "eos" , "icn" , "mona" , "ppc" , "trx" , "xtz" , "ant" , "btcd" , "etc" , "kmd" , "neo" , "ppt" , "usdt" , "zec" , "ardr" , "bts" , "eth" , "knc" , "nlg" , "qtum" , "vtc" , "ark" , "dash" , "fct" , "lkk" , "nmc" , "rep" , "waves" , "bat" , "dcr" , "game" , "lsk" , "nxt" , "salt" , "xcp" , "bcc" , "dgb" , "gbyte" , "ltc" , "omg" , "sc" , "xem" , "bch" , "dgd" , "gno" , "maid" , "pay" , "sngls" , "xlm"];
     }

    getImage(cuy){
        cuy = cuy.toLowerCase() || "btc";
        const prefix= 'https://raw.githubusercontent.com/yfgeek/yfgeek.github.io/source/public/img/icon/';
        if(this.list.indexOf(cuy)>0){
            return prefix+ cuy + ".png";
        }
        return prefix + "btc.png";
    }

    render() {
        var url = this.getImage(this.props.cuy);
        let w = this.props.width || 48;
        let h = this.props.height || 48;
        let m = this.props.marginLeft || 15;
        let r = this.props.marginRight || 0;
        let e = this.props.event || null;
        return (
            <TouchableOpacity onPress={e}>
                <Image source={{uri:url}} style={{
                        width: w,
                        height: h,
                        marginLeft: m,
                        marginRight: r,
                }} />
            </TouchableOpacity>
        )
    }
}


export default CoinIcon
