import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Card = ({inmueble}) => {
  console.log("Este es el inmueble", inmueble)
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <Image
            style={{width: 90, height: 100}}
            source={{
              uri: inmueble.surface.img_url,
            }}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text> {inmueble.name} </Text>
        </View>
        <View>
          <Text>{inmueble.address}</Text>
        </View>
        <View>
          <Text> Area</Text>
        </View>
        <View>
          <Text> {inmueble.cost} </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
