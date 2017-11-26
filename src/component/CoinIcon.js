import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import selectionConfig from '../icon/selection.json';
import { ColorConfig, list } from '../icon/config';

const Icon = createIconSetFromIcoMoon(selectionConfig);
class CoinIcon extends Component {
  constructor(props) {
    super(props);
  }

  getIcon(cuy) {
    cuy = cuy.toLowerCase() || 'btc';
    const w = this.props.width || 48;
    const h = this.props.height || 48;

    if (cuy === 'more') { return <Image source={require('../images/more.png')} style={{ width: w, height: h }} />; }

    if (list.indexOf(cuy) > 0) {
      let color = '#f5922f';
      ColorConfig.forEach((item, index) => { if (item.cuy === cuy) color = item.color; });
      return <Icon name={cuy} size={w} color={color} />;
    }
    return <Icon name="btc" size={w} />;
  }

  render() {
    const icon = this.getIcon(this.props.cuy);
    const w = this.props.width || 48;
    const m = this.props.marginLeft || 15;
    const r = this.props.marginRight || 0;
    return (
      <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: w / 2,
                    backgroundColor: '#ffffff',
                    marginLeft: m,
                    overflow: 'hidden',
                    marginRight: r,
                    height: w,
                    width: w
                }}
      >
        {icon}
      </View>
    );
  }
}


export default CoinIcon;
