import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import Card from '../../components/card';
import inmuebles from '../../data/inmuebles.json';

const MainPage = () => {
  return (
    <View style={styles.body}>
      <ScrollView>
        {inmuebles.map((inmueble, key) => {
          return <Card inmueble={inmueble} key={key} />;
        })}
      </ScrollView>
    </View>
  );
};

export default MainPage;
