import {TextStyle, ViewStyle} from 'react-native';

export const GlobalStyles = {
  backgroundColor: '#F4F1DE',
  defaultFont: 'Helvetica',
  primaryColor: '#3D405B',
  defaultBackground: {
    backgroundColor: '#F4F1DE',
  } as ViewStyle,
  body: {
    flex: 1,
    backgroundColor: '#F4F1DE',
  } as ViewStyle,
  innerContainer: {
    height: '100%',
    marginHorizontal: '8%',
    paddingBottom: 35,
  } as ViewStyle,
  smallText: {
    fontSize: 16,
    color: '#3D405B',
    textAlign: 'left',
    fontFamily: 'Helvetica',
  } as TextStyle,
};
