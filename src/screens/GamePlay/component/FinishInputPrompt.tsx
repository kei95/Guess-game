import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {Button} from '../../../components/button';
import DefaultBody from '../../../components/defaultBody';
import {GlobalStyles} from '../../../styles/globalStyles';

interface FinishInputPromptProps {
  onPressButton: () => void;
}

export const FinishInputPrompt: React.FC<FinishInputPromptProps> = ({
  onPressButton,
}) => {
  return (
    <DefaultBody>
      <View style={styles.contentsWrapper}>
        <Image
          style={styles.appLogo}
          source={require('../../../../assets/img/multiple-users.png')}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.text}>Now everyone has chosen a number</Text>
          <Text style={styles.text}>
            Please place the device on somewhere everyone can see and let's see
            who can leave the game!
          </Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="OK" onPress={onPressButton} />
      </View>
    </DefaultBody>
  );
};

const styles = StyleSheet.create({
  contentsWrapper: {
    flex: 3,
    width: '100%',
    justifyContent: 'flex-end',
  } as ViewStyle,
  nameContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
  } as ViewStyle,
  text: {
    fontSize: 25,
    color: '#3D405B',
    textAlign: 'center',
    fontFamily: GlobalStyles.defaultFont,
    paddingTop: 20,
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
