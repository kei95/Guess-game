import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import {Button} from '../components/button';
import {HeaderBackButton} from '../components/headerBackButton';
import {Input} from '../components/textInput';
import {PlayersContext} from '../context/context';
import {navigationTypes} from '../navigation/navigationTypes';
import {GlobalStyles} from '../styles/globalStyles';

const PlayerSetting: React.FC<navigationTypes> = ({navigation, route}) => {
  const context = useContext(PlayersContext);
  console.log(route, context);

  return (
    <SafeAreaView style={GlobalStyles.body}>
      <View style={styles.innerBody}>
        <ScrollView style={styles.scrollContainer}>
          <HeaderBackButton navigation={navigation} />
          <View style={styles.scrollInnerContainer}>
            <Text style={styles.title}>Add players </Text>
            <PlayerNameInput label={'this is test label'} />
            <PlayerNameInput label={'this is test label'} />
            <PlayerNameInput label={'this is test label'} />
            <View style={styles.addReduceButtonWrapper}>
              <Button
                title="-"
                color={'#E07A5F'}
                onPress={() => navigation.navigate('PlayersSetting')}
                style={styles.addReduceButton}
                textStyle={styles.addReduceButtonText}
              />
              <Button
                title="+"
                color={'#81B29A'}
                onPress={() => navigation.navigate('PlayersSetting')}
                style={styles.addReduceButton}
                textStyle={styles.addReduceButtonText}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('PlayersSetting')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const PlayerNameInput: React.FC<{label: string}> = ({label}) => {
  return (
    <View style={styles.nameInputContainer}>
      <Input label={label} />
    </View>
  );
};

const styles = StyleSheet.create({
  innerBody: {
    height: '100%',
    paddingBottom: 35,
  } as ViewStyle,
  scrollContainer: {
    width: '100%',
  } as ViewStyle,
  scrollInnerContainer: {
    marginHorizontal: '8%',
    alignItems: 'center',
  } as ViewStyle,
  addReduceButtonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  } as ViewStyle,
  addReduceButton: {
    width: '45%',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  } as ViewStyle,
  addReduceButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: GlobalStyles.defaultFont,
  } as ViewStyle,
  buttonWrapper: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: '8%',
  } as ViewStyle,
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3D405B',
    textAlign: 'center',
    paddingTop: 10,
    fontFamily: GlobalStyles.defaultFont,
  } as ViewStyle,
  nameInputContainer: {
    width: '100%',
    paddingTop: 20,
  } as ViewStyle,
});

export default PlayerSetting;
