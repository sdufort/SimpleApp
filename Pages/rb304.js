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

var boxes = [,,,,,,,,,];
var padTop = 0;

class RB304 extends React.Component {
  static navigationOptions = {
    title: 'RB 304 Availability',
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
            <View style = {{flex: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: 'rgba(50, 50, 50, .5)'}}>
              <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{backgroundColor: boxes[0], height: 70, width: 80, margin: 10}}></View>
                <View style = {{backgroundColor: boxes[1], height: 70, width: 80, margin: 10}}></View>
                <View><Text>           </Text></View>
                <View style = {{backgroundColor: boxes[2], height: 70, width: 80, margin: 10}}></View>
              </View>
              <View><Text></Text></View>
              <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{backgroundColor: boxes[3], height: 70, width: 80, margin: 10}}></View>
                <View style = {{backgroundColor: boxes[4], height: 70, width: 80, margin: 10}}></View>
                <View><Text>           </Text></View>
                <View style = {{backgroundColor: boxes[5], height: 70, width: 80, margin: 10}}></View>
              </View>
              <View><Text></Text></View>
              <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{backgroundColor: boxes[6], height: 70, width: 80, margin: 10}}></View>
                <View style = {{backgroundColor: boxes[7], height: 70, width: 80, margin: 10}}></View>
                <View><Text>           </Text></View>
                <View style = {{backgroundColor: boxes[8], height: 70, width: 80, margin: 10}}></View>
              </View>
            </View>
            <Text></Text>
            <View style={{alignItems: 'center'}}>
              <Text>White = Available</Text>
              <Text>Black = Unavailable</Text>
            </View>
            <View style={{flex: 1}}></View>
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

module.exports = {RB304};
