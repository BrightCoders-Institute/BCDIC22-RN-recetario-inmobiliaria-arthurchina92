import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons'
import Icono from 'react-native-vector-icons/Ionicons'
import Ico from 'react-native-vector-icons/MaterialCommunityIcons'
import Ic from 'react-native-vector-icons/MaterialIcons'

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
        <View style={styles.address}>
          <Icon name='location' size={25}/>
          <Text>{inmueble.address}</Text>
        </View>
        <View style={styles.caracteristics}>
          <Icono name='bed-outline' size={25}/>
          <Text> {inmueble.rooms} </Text>
          <Ico name='bathtub-outline' size={25} />
          <Text> {inmueble.bathrooms} </Text>
          <Ic name='house' size={25}/>
          <Text>240m2</Text>
        </View>
        <View>

          <Text> {inmueble.cost} </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
