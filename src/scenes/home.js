import React from 'react';
import {SafeAreaView, Text, StatusBar, ScrollView, View} from 'react-native';
import Section from '../components/section';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: '#FFFFFF',
          }}>
          <Section title="Customer Listing" />
          <View
            style={{
              flexDirection: 'row',
              height: 100,
              paddingHorizontal: 20,
            }}>
            <View style={{backgroundColor: 'blue', flex: 0.3}} />

            <Text style={{paddingHorizontal: 20}}>Hello World!</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
