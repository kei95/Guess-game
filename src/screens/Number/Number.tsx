import React, {useContext, useState} from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Button} from '../../components/button';
import DefaultBody from '../../components/defaultBody';
import {PlayersContext} from '../../context/context';
import {navigationTypes} from '../../navigation/navigationTypes';
import {GlobalStyles} from '../../styles/globalStyles';
import {NumberPicker} from './component/NumberPicker';

interface NumberProps extends navigationTypes {}
// TODO: Disable android's back button
export const Number: React.FC<NumberProps> = ({navigation}) => {
  const [isReadyToPic, setIsReadyToPic] = useState<boolean>(false);
  const context = useContext(PlayersContext);
  console.log('context', context);
  return isReadyToPic ? (
    <NumberPicker navigation={navigation} />
  ) : (
    <DefaultBody>
      <View style={styles.contentsWrapper}>
        <Image
          style={styles.appLogo}
          source={require('../../../assets/img/passDevice.png')}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.text}>Next player: </Text>
          <Text style={styles.nameText}>Player1234567</Text>
        </View>
        <Text style={styles.descriptionText}>
          Please pass the device on to the next player
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Ready" onPress={() => setIsReadyToPic(true)} />
      </View>
    </DefaultBody>
  );
};

const styles = StyleSheet.create({
  contentsWrapper: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
  } as ViewStyle,
  nameContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 20,
  } as ViewStyle,
  title: {
    fontSize: 25,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: 20,
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  nameText: {
    fontSize: 25,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  text: {
    fontSize: 25,
    color: '#3D405B',
    textAlign: 'center',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  descriptionText: {
    fontSize: 25,
    color: '#3D405B',
    textAlign: 'center',
    fontFamily: GlobalStyles.defaultFont,
    paddingTop: 15,
  } as TextStyle,
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
  appLogo: {
    width: 150,
    height: 150,
    tintColor: '#3D405B',
    alignSelf: 'center',
  } as ImageStyle,
});
