import React from 'react'
import {ScrollView, View, Text} from 'react-native'
import styles from './styles'
import Card from '../../components/card';

const MainPage = () => {
  return (
    
      <View style={styles.body}>
        <ScrollView>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </ScrollView>
      </View>
  
  );
};

export default MainPage;
