import React from "react";
import { Text, View,StyleSheet } from "react-native";
import 'react-native-gesture-handler';

function App (){
    return (
      <View >
        <Text style={styles.text}>Hello</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "500",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
    padding: 5
  }
});

export default App;