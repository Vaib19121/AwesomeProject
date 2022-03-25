import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import RazorpayCheckout from 'react-native-razorpay';

function App() {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <TouchableOpacity
        onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_XDD5Q8OHdBIkQT',
            amount: '8000',
            name: 'Vaibhav Mehar corporation Limited',
            prefill: {
              email: 'vaibhavmehar16@gmail.com',
              contact: '9158755311',
              name: 'Vaibhav Mehar',
            },
            theme: {color: '#00008B'},
          };
          RazorpayCheckout.open(options)
            .then(data => {
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}>
        <Text>CLICK HERE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '500',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.6,
    color: 'white',
    padding: 5,
  },
});

export default App;
