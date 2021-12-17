import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Header from '../components/Header';
import ListEmail from '../components/ListEmail';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header navigation={navigation} />
      <ListEmail navigation={navigation}  /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  }
});
