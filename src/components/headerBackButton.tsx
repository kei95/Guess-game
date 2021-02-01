import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {navigationTypes} from '../navigation/navigationTypes';
import {StackActions} from '@react-navigation/native';
import {GlobalStyles} from '../styles/globalStyles';

export const HeaderBackButton: React.FC<navigationTypes> = ({navigation}) => {
  const onPressed: (event: GestureResponderEvent) => void = () =>
    navigation.dispatch(StackActions.pop());
  return (
    <TouchableOpacity onPress={onPressed} style={styles.iconContainer}>
      <Icon name={'arrow-back'} size={35} color={GlobalStyles.primaryColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 10,
    marginTop: 10,
  } as ViewStyle,
});
