import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import DefaultBody from './src/components/defaultBody';
import {GlobalStyles} from './src/styles/globalStyles';
import {Button} from './src/components/button';
import {navigationTypes} from './src/navigation/navigationTypes';

const App: React.FC<navigationTypes> = ({navigation}) => {
  return (
    <DefaultBody>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.appLogo}
          source={require('./assets/img/appIcon.png')}
        />
        <Text style={styles.title}>Number Picker</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Start"
          onPress={() => navigation.navigate('PlayerSetting')}
        />
      </View>
    </DefaultBody>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    paddingTop: '30%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 25,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: GlobalStyles.defaultFont,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  appLogo: {
    width: 150,
    height: 150,
    tintColor: '#3D405B',
  },
});

export default App;
