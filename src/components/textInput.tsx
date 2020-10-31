import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {GlobalStyles} from '../styles/globalStyles';

interface textInputProps {
  label?: string;
  value: string;
  onChange?: (_: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export const Input: React.FC<textInputProps> = ({label, value, onChange}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} value={value} onChange={onChange} />
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
