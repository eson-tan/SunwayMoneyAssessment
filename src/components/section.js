import styles from '../styles/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text, View, useColorScheme} from 'react-native';
import React from 'react';

const Section = ({title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default Section;
