import React from 'react';
import {View, Text} from 'react-native';

function CustomerDetails({user}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <View style={{backgroundColor: 'blue', flex: 0.5}} />
      <View style={{flex: 1, flexDirection: 'column', paddingHorizontal: 10}}>
        <Text style={{paddingHorizontal: 10}}>NAME: {user.name}</Text>
        <Text style={{paddingHorizontal: 10}}>DOB: {user.dob}</Text>
        <Text style={{paddingHorizontal: 10}}>IC: {user.icNo}</Text>
        <Text style={{paddingHorizontal: 10}}>
          REGISTER DATE: {user.registerDate}
        </Text>
        <Text style={{paddingHorizontal: 10}}>ADDRESS: {user.address}</Text>
      </View>
    </View>
  );
}

export default CustomerDetails;
