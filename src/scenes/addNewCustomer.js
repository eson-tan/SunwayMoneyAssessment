import React from 'react';
import {Text, View, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from '../styles/styles';
import CustomDatePicker from '../utils/customDatePicker';
import getDate from '../utils/dateFormatter';

class NewCustomer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dob: Date().toString(),
      icNo: '',
      registerDate: getDate(),
      address: '',
      id: Math.floor(Math.random() * 100) + 1,
    };
  }

  // updateRegiDate = () => {
  //   this.setState({registerDate: getDate()}, this.checkRegiDate);
  // };

  // // Callback function
  // checkRegiDate = () => {
  //   if (this.state.registerDate != '') {
  //     console.log(
  //       'THE LATEST REGISTER DATE IS ->>>>>>>>> ' + this.state.registerDate,
  //     );
  //   }
  // };

  submit() {
    // this.updateRegiDate()
    const userData = require('../utils/data/userData.json');
    userData.push(this.state);
    // console.log(userData);
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.formTitle}>Add New Customer Details</Text>
        <TextInput
          style={styles.formField}
          placeholder="Name"
          onChangeText={text => {
            this.setState({name: text});
          }}
        />
        <CustomDatePicker
          title={'Pick Birthday'}
          onChangeText={date => {
            this.setState({date: date});
          }}
        />
        <TextInput
          style={styles.formField}
          placeholder="IC No."
          onChangeText={text => {
            this.setState({icNo: text});
          }}
        />
        <TextInput
          style={styles.formField}
          placeholder="Address"
          onChangeText={text => {
            this.setState({address: text});
          }}
        />
        <Button
          color="green"
          title="Add New Customer"
          onPress={() => {
            this.submit();
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

export default NewCustomer;
