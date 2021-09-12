import React from 'react';
import {View, Button} from 'react-native';
import Section from '../components/section';
import CustomerDetails from '../components/customerDetails';
import {FlatList} from 'react-native-gesture-handler';

TODO: 'Add floating button';
const Home = ({navigation}) => {
  var userData = require('../utils/data/userData.json');

  return (
    <View style={{flex: 1}}>
      <Section title="Customer Listing" />
      <FlatList
        style={{flexDirection: 'column'}}
        data={userData}
        renderItem={({item}) => <CustomerDetails user={item} />}
      />
      <Button
        title="Add New Customer"
        onPress={() => navigation.navigate('NewCustomer')}
      />
    </View>
  );
};

export default Home;
