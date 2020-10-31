import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import {Button} from '../../components/button';
import {HeaderBackButton} from '../../components/headerBackButton';
import {PlayersContext} from '../../context/context';
import {User} from '../../context/types';
import {navigationTypes} from '../../navigation/navigationTypes';
import {GlobalStyles} from '../../styles/globalStyles';
import {Buttons} from './components/Buttons';
import {PlayerNameInput} from './components/PlayerNameInput';

const PlayerSetting: React.FC<navigationTypes> = ({navigation}) => {
  const context = useContext(PlayersContext);
  const [players, setPlayers] = useState<User[]>(context!.players);

  const Players: Element[] = players.map((player: User, index: number) => (
    <PlayerNameInput player={player} index={index} key={`player_${index}`} />
  ));

  const onPressNext = () => {
    context!.setPlayers(players);
  };

  return (
    <SafeAreaView style={GlobalStyles.body}>
      <View style={styles.innerBody}>
        <ScrollView style={styles.scrollContainer}>
          <HeaderBackButton navigation={navigation} />
          <View style={styles.scrollInnerContainer}>
            <Text style={styles.title}>Add players and name</Text>
            {Players}
            <Buttons players={players} setPlayers={setPlayers} />
          </View>
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button title="Start game" onPress={onPressNext} />
        </View>
      </View>
    </SafeAreaView>
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
});

export default PlayerSetting;
