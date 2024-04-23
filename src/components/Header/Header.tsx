import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftcontainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rigthcontainer}>
        <Image
          source={require('../../assets/nasa-logo.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftcontainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rigthcontainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title:{
    fontSize: 20,
    color: '#fff'
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default Header;
