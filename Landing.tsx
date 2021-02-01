import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

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
    flex: 3,
    justifyContent: 'center',
    alignSelf: 'center',
  } as ViewStyle,
  title: {
    fontSize: 25,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
  appLogo: {
    width: 150,
    height: 150,
    tintColor: '#3D405B',
  } as ImageStyle,
});

export default App;
