import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './../styles.js';

var background = require('./../images/background.png');

var boxes = [,,,,,,,,];
var padTop = 0;

class RB306 extends React.Component {
  static navigationOptions = {
    title: 'RB 306 Availability',
    header: navigation => ({
      style: {
        //backgroundColor: '#F5FCFF'
        //backgroundColor: '#A9A9A9'
        backgroundColor: 'rgba(50, 50, 50, .5)',
      },
    })
  };
  render() {
    const { navigate } = this.props.navigation;
    colorizeBoxes();
    return (
      <Image source={background} style={styles.backgroundImage}>
        <View style={styles.picContainer}>
          <View style={styles.text}>
            <View style = {{flex: 10, flexDirection: 'column', borderWidth: 1, backgroundColor: 'rgba(50, 50, 50, .5)'}}>
              <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{backgroundColor: boxes[0], width: 70, height: 80, margin: 15}}></View>
                <View style = {{backgroundColor: boxes[1], width: 70, height: 80, margin: 15}}></View>
              </View>
              <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{backgroundColor: boxes[2], width: 70, height: 80, margin: 15}}></View>
                <View style = {{backgroundColor: boxes[3], width: 70, height: 80, margin: 15}}></View>
              </View>
              <View><Text>{'\n'}</Text></View>
              <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{backgroundColor: boxes[4], width: 70, height: 80, margin: 15}}></View>
                <View style = {{backgroundColor: boxes[5], width: 70, height: 80, margin: 15}}></View>
              </View>
              <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{backgroundColor: boxes[6], width: 70, height: 80, margin: 15}}></View>
                <View style = {{backgroundColor: boxes[7], width: 70, height: 80, margin: 15}}></View>
              </View>
            </View>
            <Text></Text>
            <View style={{alignItems: 'center'}}>
              <Text>White = Available</Text>
              <Text>Black = Unavailable</Text>
            </View>
          </View>
        </View>
      </Image>
    );
  }
}

function colorizeBoxes() {
  for (var i=0; i<boxes.length; i++) {
    var color = Math.floor(Math.random() * 2);
    if(color === 1) {
      boxes[i] = '#FFFFFF';
    }
    else {
      boxes[i] = '#000000';
    }
    padTop = padTop + 20;
  }
}

module.exports = {RB306};
