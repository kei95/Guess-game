import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import DefaultBody from '../components/defaultBody';
import {Button} from '../components/button';
import {Input} from '../components/textInput';
import {navigationTypes} from '../navigation/navigationTypes';
import {GlobalStyles} from '../styles/globalStyles';

const NameSetting: React.FC<navigationTypes> = ({navigation, route}) => {
  console.log(route);

  return (
    <DefaultBody>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Names for players </Text>
        <ScrollView style={styles.scrollContainer}>
          <PlayerNameInput label={'this is test label'} />
          <PlayerNameInput label={'this is test label'} />
          <PlayerNameInput label={'this is test label'} />
          <PlayerNameInput label={'this is test label'} />
          <PlayerNameInput label={'this is test label'} />
          <PlayerNameInput label={'this is test label'} />
          <PlayerNameInput label={'this is test label'} />
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('PlayersSetting')}
          />
        </View>
      </View>
    </DefaultBody>
  );
};

const PlayerNameInput: React.FC<{label: string}> = ({label}) => {
  return (
    <>
      <Input label={label} />
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    width: '100%',
  },
  buttonWrapper: {
    width: '100%',
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 25,
    color: '#3D405B',
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: GlobalStyles.defaultFont,
  },
});

export default NameSetting;
