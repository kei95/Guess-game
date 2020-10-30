import React, {useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';

import DefaultBody from '../components/defaultBody';
import {Button} from '../components/button';
import {navigationTypes} from '../navigation/navigationTypes';
import {GlobalStyles} from '../styles/globalStyles';

const PlayerSetting: React.FC<navigationTypes> = ({navigation}) => {
  const [playerNum, setPlayerNum] = useState<number>(2);
  const handleNumBtnPressed = (isIncrement: boolean) => {
    if (isIncrement) {
      setPlayerNum(playerNum + 1);
    } else {
      playerNum > 2 && setPlayerNum(playerNum - 1);
    }
  };
  return (
    <DefaultBody>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          How many players do you want to play with?
        </Text>
        <View style={styles.numberBody}>
          <Button
            title="-"
            onPress={() => handleNumBtnPressed(false)}
            color={'#81B29A'}
            style={styles.numberButton}
            textStyle={styles.buttonText}
          />
          <Text style={styles.number}>{playerNum}</Text>
          <Button
            title="+"
            onPress={() => handleNumBtnPressed(true)}
            color={'#81B29A'}
            style={styles.numberButton}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Next"
          onPress={() => navigation.navigate('NameSetting', {playerNum})}
        />
      </View>
    </DefaultBody>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  } as ViewStyle,
  numberBody: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  buttonWrapper: {
    width: '100%',
    alignSelf: 'flex-end',
  } as ViewStyle,
  title: {
    fontSize: 25,
    color: '#3D405B',
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  number: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#81B29A',
  } as TextStyle,
  numberButton: {
    width: 42,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
  } as ViewStyle,
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  } as TextStyle,
});

export default PlayerSetting;
