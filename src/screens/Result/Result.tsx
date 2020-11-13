import React, {useContext} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Button} from '../../components/button';
import DefaultBody from '../../components/defaultBody';
import {PlayersContext} from '../../context/context';
import {navigationTypes} from '../../navigation/navigationTypes';
import {GlobalStyles} from '../../styles/globalStyles';

interface ResultProps extends navigationTypes {}

export const Result: React.FC<ResultProps> = ({navigation}) => {
  const context = useContext(PlayersContext);

  return (
    <DefaultBody>
      <View style={styles.contentsWrapper}>
        <View style={styles.textsContainer}>
          <Text style={styles.title}>The closest player(s)</Text>
          <Text style={styles.playerName}>Keisuke</Text>
          {/* <Text style={styles.playerName}>Itsuki Shiokawa</Text>
          <Text style={styles.playerName}>Satoshi Yamashina</Text> */}
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Ready"
          onPress={() => navigation.navigate('GameInput')}
        />
      </View>
    </DefaultBody>
  );
};

const styles = StyleSheet.create({
  contentsWrapper: {
    flex: 5,
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
  } as ViewStyle,
  textsContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
  } as ViewStyle,
  title: {
    fontSize: 25,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  playerName: {
    fontSize: 40,
    color: '#81B29A',
    fontWeight: 'bold',
    fontFamily: GlobalStyles.defaultFont,
    paddingTop: 10,
  } as TextStyle,
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
});
