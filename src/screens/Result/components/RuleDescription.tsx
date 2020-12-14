import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {GlobalStyles} from '../../../styles/globalStyles';

export const RuleDescription: React.FC = ({}) => {
  return (
    <View style={styles.body}>
      <Icon name={'question'} size={22} color={GlobalStyles.primaryColor} />
      <Text style={GlobalStyles.smallText}>
        Next round will be without the player(s)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    marginRight: 10,
  } as ViewStyle,
});
