import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons'
import Icono from 'react-native-vector-icons/Ionicons'
import Ico from 'react-native-vector-icons/MaterialCommunityIcons'
import Ic from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign' 

const Card = ({inmueble}) => {
  console.log("Este es el inmueble", inmueble)
  return (
    <View style={styles.card} >
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <Image style={{width: 90, height: 100,}}
            source={{uri: inmueble.surface.img_url}}
            borderRadius={20}
         
          />
          <View style={styles.puntuacion}>
             <AntDesign name="star" size={15} style={styles.star}/>
             <Text>{inmueble.qualification}</Text>
          </View>
           
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.title}>
          <Text style={styles.name}> {inmueble.name} </Text>
        </View>
        <View style={styles.address}>
          <Icon name="location" size={25} color="black" />
          <Text>{inmueble.address}</Text>
        </View>
        <View style={styles.caracteristics}>
          <View style={styles.rooms}>
            <Icono name="bed-outline" size={25} />
            <Text style={{fontWeight:'bold', fontSize:20}}> {inmueble.rooms} </Text>
          </View>
          <View style={styles.bathrooms}>
            <Ico name="bathtub-outline" size={25} />
            <Text style={{fontWeight:'bold', fontSize:20}}> {inmueble.bathrooms} </Text>
          </View>
          <View style={styles.surface}>
            <Ic name="house" size={25} />
            <Text style={{fontWeight:'bold', fontSize:20}}>240m2</Text>
          </View>
        </View>
        <View style={styles.cost}>
          
          <Text style={{fontWeight:'bold', fontSize:20}}> {inmueble.cost} </Text>
          <Icono name="heart-circle" size={30} color="green"/>
        </View>
      </View>
    </View>
  );
};

export default Card;
