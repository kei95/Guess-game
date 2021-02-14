import React, {useContext, useState} from 'react';
import {StyleSheet, View, ViewStyle, ScrollView} from 'react-native';
import {Button} from '../../components/button';
import DefaultBody from '../../components/defaultBody';
import {CurrentRound, PlayersContext} from '../../context/context';
import {navigationTypes} from '../../navigation/navigationTypes';
import {PlayerNames} from './component/PlayerNames';

interface RoundInitialProps extends navigationTypes {}

export const RoundInitial: React.FC<RoundInitialProps> = ({navigation}) => {
  const playersContext = useContext(PlayersContext);
  const currentRound = useContext(CurrentRound!);
  const [isAnimationEnd, setIsAnimationEnd] = useState<boolean>(false);

  const onPressButton = () => {
    !isAnimationEnd ? setIsAnimationEnd(true) : goToGameInput();
  };

  const goToGameInput = () => {
    setIsAnimationEnd(false);
    navigation.navigate('GameInput');
  };

  return (
    <DefaultBody>
      <View style={styles.contentsWrapper}>
        <ScrollView>
          <PlayerNames
            players={playersContext!.players}
            currentRound={currentRound!.roundNumber}
            navigation={navigation}
            isAnimationEnd={isAnimationEnd}
            setIsAnimationEnd={setIsAnimationEnd}
          />
        </ScrollView>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title={'Ready'} onPress={onPressButton} />
      </View>
    </DefaultBody>
  );
};

const styles = StyleSheet.create({
  contentsWrapper: {
    flex: 5,
    width: '100%',
  } as ViewStyle,
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
});
