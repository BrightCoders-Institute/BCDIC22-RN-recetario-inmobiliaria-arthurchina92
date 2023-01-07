import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';   
   


const Card = () => {

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <View style={styles.image}>
                    <Image style={{width:90, height:100,}} source={{ uri: "https://i0.wp.com/casactualdiseno.com/wp-content/uploads/2021/11/wi_2-Photo.jpg?fit=1024%2C576&ssl=1"}}/>
                </View>
            </View>
            <View style={styles.textContainer}>
                <View></View>
                <View></View>
                <View></View>
                <View></View>
            </View>
        </View>
    );
};


export default Card;