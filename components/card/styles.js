import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '95%',
    height: 150,
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#000',
    margin: 10,
  },

  imageContainer: {
    flex: 2,
  },

  image: {
    width: 90,
    height: 100,
    backgroundColor: 'blue',
    marginTop: 20,
    marginLeft: 40,
  },

  textContainer: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  
});
