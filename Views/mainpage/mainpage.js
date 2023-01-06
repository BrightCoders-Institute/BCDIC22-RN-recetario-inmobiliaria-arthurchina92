import React from 'react'
import {ScrollView, View, Text} from 'react-native'
import styles from './styles'


const MainPage = () => {
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.imageCard}>
          <Text>Card 1</Text>
        </View>
        <View style={styles.imageCard}>
          <Text>Card 2</Text>
        </View>
        <View style={styles.imageCard}>
          <Text>Card 3</Text>
        </View>
        <View style={styles.imageCard}>
          <Text>Card 4</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MainPage;
