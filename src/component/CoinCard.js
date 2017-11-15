import React, { Component, } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import CoinIcon from "./CoinIcon";
class CoinCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let cuy = this.props.cuy || "btc";
        return (
            <View style={styles.card}>
                <View style={{
                    alignSelf: 'flex-end',
                }}>
                    <CoinIcon style={styles.thumb} cuy={cuy} width={38} height={38} marginLeft ={3} />
                </View>
                <View style={{
                    marginBottom: 20,
                }}>
                    <Text style={styles.cardTitle}>CARD NUMBER</Text>
                    <Text style={styles.cardNumber}>···· ···· ···· ···· ···· xmjw</Text>

                </View>

                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between'

                }}>
                    <View style={{
                        alignSelf: 'flex-start'
                    }}>
                        <Text style={styles.cardTitle}>CARD HOLDER</Text>
                        <Text style={styles.text}>Your Name</Text>
                    </View>
                    <View style={{
                        alignSelf: 'flex-end'
                    }}>
                        <Text style={styles.cardTitle}>EXPIRATION DATE</Text>
                        <Text style={styles.text}>Never</Text>
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    card:{
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#f5f5f5',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRadius: 7,
        shadowColor: '#0d2959',
        shadowOffset:{
            width: 0,
            height: 0,
        },
        shadowRadius: 2,
        shadowOpacity: 0.3,
    },
    thumb:{
        marginRight: 5,
    },
    cardTitle: {
        color: '#8a8a8a',
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor:'transparent',

    },
    cardNumber: {
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: '600',
        backgroundColor: '#eeeeee',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,

    },
    text: {
        backgroundColor: '#eeeeee',
        padding: 8,
    }


});

export default CoinCard
