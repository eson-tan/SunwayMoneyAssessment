import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Section from '../components/section';
import CustomerDetails from '../components/customerDetails';
import {FlatList} from 'react-native-gesture-handler';

const Home = () => {
  var userData = require('../utils/data/userData.json');

  return (
    <View style={{flex: 1}}>
      <Section title="Customer Listing" />
      <FlatList
      style={{flexDirection: 'column'}}
        data={userData}
        renderItem={({item}) => <CustomerDetails user={item} />}
      />
    </View>
  );
};

export default Home;
