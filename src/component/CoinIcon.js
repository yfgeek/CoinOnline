import React, { Component, } from 'react'
import {
    View,
    Image
} from 'react-native'
class CoinIcon extends Component {

    constructor(props) {
        super(props);
        this.list = ["0x" , "bcn" , "doge" , "gnt" , "miota" , "pivx" , "steem" , "xmr" , "ada" , "bnb" , "emc" , "hsr" , "mln" , "pot" , "strat" , "xrp" , "amp" , "btc" , "eos" , "icn" , "mona" , "ppc" , "trx" , "xtz" , "ant" , "btcd" , "etc" , "kmd" , "neo" , "ppt" , "usdt" , "zec" , "ardr" , "bts" , "eth" , "knc" , "nlg" , "qtum" , "vtc" , "ark" , "dash" , "fct" , "lkk" , "nmc" , "rep" , "waves" , "bat" , "dcr" , "game" , "lsk" , "nxt" , "salt" , "xcp" , "bcc" , "dgb" , "gbyte" , "ltc" , "omg" , "sc" , "xem" , "bch" , "dgd" , "gno" , "maid" , "pay" , "sngls" , "xlm"];
     }

    getImage(cuy){
        cuy = cuy.toLowerCase() || "btc";
        const prefix= 'https://blog.yfgeek.com/img/icon/';
        if(this.list.indexOf(cuy)>0){
            return prefix+ cuy + ".png";
        }
        return prefix + "btc.png";
    }

    render() {
        var url = this.getImage(this.props.cuy);
        return (
                <Image source={{uri:url}} style={{
                        width: 48,
                        height: 48,
                        marginLeft: 15,
                }} />
        )
    }
}


export default CoinIcon
