import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {GlobalStyles} from '../styles/globalStyles';

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<Props> = ({
  title,
  onPress,
  color = '#3D405B',
  style = styles.container,
  textStyle = styles.text,
}) => {
  const buttonColor = {backgroundColor: color};

  return (
    <TouchableOpacity style={[style, buttonColor]} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: GlobalStyles.defaultFont,
  },
});
