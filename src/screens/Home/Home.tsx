import React from 'react';
import { View } from 'react-native';
import { Title } from 'components';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Title text='Where do' style={{ fontWeight: 'normal' }} />
      <Title text='you want to go?' />
      <Title text='Explore Attractions' style={styles.subtitle} />
    </View>
  );
};

export default Home;
