import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {GlobalStyles} from '../styles/globalStyles';

interface textInputProps {
  label?: string;
}

export const Input: React.FC<textInputProps> = ({label}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  } as ViewStyle,
  label: {
    fontSize: 22,
    color: '#3D405B',
    fontFamily: GlobalStyles.defaultFont,
    paddingBottom: 8,
  } as TextStyle,
  input: {
    borderWidth: 2,
    borderColor: '#3D405B',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D405B',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
});
