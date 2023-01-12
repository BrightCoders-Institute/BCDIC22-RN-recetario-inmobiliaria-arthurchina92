import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '95%',
    height: 150,
    backgroundColor: '#e8fcfb',
    borderColor: '#000',
    margin: 10,
    borderRadius: 15,
  },

  imageContainer: {
    flex: 2,
  },

  image: {
    width: 90,
    height: 100,
    marginTop: 20,
    marginLeft: 40,
    
  },

  textContainer: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text: {
    fontStyle:'italic',
    fontSize: 40,
    color: '#000'
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  address: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
  },
  caracteristics: {
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
  },
  rooms: {
    flexDirection: 'row',
    marginLeft: 20
  },
  bathrooms: {
    flexDirection: 'row',
  },
  surface: {
    flexDirection: 'row',
    marginRight: 20,
  },
  cost: {
    width: 230,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  puntuacion: {
    borderRadius: 7,
    flexDirection: 'row',
    position:'absolute',
    marginTop: 75,
    marginLeft: 26,
    width: 40,
    height: 20,
    backgroundColor: '#fff'
  },
  star: { 
    color: 'yellow',
  },
});
