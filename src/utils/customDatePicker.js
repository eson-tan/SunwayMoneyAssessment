import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Button, View} from 'react-native';
import styles from '../styles/styles';

const CustomDatePicker = ({title}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={{marginVertical: 10}}>
      <Button title={title} onPress={() => setOpen(true)} />
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onCancel={() => {
          setOpen(false);
        }}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
      />
    </View>
  );
};

export default CustomDatePicker;
