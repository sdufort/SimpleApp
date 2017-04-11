import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  weatherPicContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  picContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'transparent',
    backgroundColor: 'rgba(255, 255, 255, .5)',
  },
  text: {
    margin: 25,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    //borderWidth: 1,
  },
  welcomeContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  instructContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  copyright: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    //borderWidth: 1,
  },
  buttonContainer: {
    //justifyContent: 'flex-end',
    backgroundColor: '#2E9298',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    //borderWidth: 1,
  },
  icon: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'flex-start',

  },
  iconContainer: {
    justifyContent: 'flex-end',
    backgroundColor: '#2E9298',
    borderRadius: 30,
    padding: 10,
    marginTop: 10,
    //width: 60,
    //height: 60,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  weather: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'rgba(50, 50, 50, .5)',
    paddingTop: 0,
  },
  weatherContainer: {
    justifyContent: 'center',
    margin: 15,
  },
  weatherText: {
    //color: '#2E9298',
    fontWeight: 'bold',
  },
  weatherAddress: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
});

module.exports = {styles};
