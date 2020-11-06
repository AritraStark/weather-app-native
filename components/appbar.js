import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

function Appbar(){
  const styles = StyleSheet.create({
  bg: {
    display:"flex",
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding:25,
    paddingTop:40,
    backgroundColor:'#646464',
    
  },
  text: {
    color: 'white',
    fontFamily:'monospace',
    fontSize:35,
    fontWeight:"800"
  }

  });

  return(
    <View style={styles.bg}>
          
          <Text style={styles.text}>Weather</Text>
          
      </View>
  )
}

export default Appbar;