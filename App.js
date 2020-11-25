import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const facebook_button = (
    <Icon.Button name="facebook" backgroundColor="#3b5998" size={20}>
      <Text style={{fontFamily: 'Arial', fontSize: 15, color: '#fff'}}>
        Login with Facebook
      </Text>
    </Icon.Button>
  );

  const twitter_button = (
    <Icon.Button name="twitter" backgroundColor="#51aaf0" size={20}>
      <Text style={{fontFamily: 'Arial', fontSize: 15, color: '#fff'}}>
        Follow Us on Twitter
      </Text>
    </Icon.Button>
  );

  const android_icon = <Icon name="android" size={60} color="#007c00" />;

  const music_icon = <Icon name="music" size={60} color="#fb3742" />;

  const venus_icon = <Icon name="venus" size={60} color="#fb3742" />;

  const search_icon = <Icon name="search" size={60} color="#fb3742" />;

  const heart_icon = <Icon name="heart" size={60} color="#fb3742" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Vector Icon Example</Text>
      <TouchableOpacity>{facebook_button}</TouchableOpacity>

      <TouchableOpacity style={{marginTop: 10}}>
        {twitter_button}
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop: 10}}>
        {android_icon}
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop: 10}}>{music_icon}</TouchableOpacity>
      <TouchableOpacity style={{marginTop: 10}}>{venus_icon}</TouchableOpacity>
      <TouchableOpacity style={{marginTop: 10}}>{heart_icon}</TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default App;
