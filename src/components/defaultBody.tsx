import React from 'react';
import {SafeAreaView, View, ViewStyle} from 'react-native';

import {GlobalStyles} from '../styles/globalStyles';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  innerStyle?: ViewStyle;
};

const DefaultBody: React.FC<Props> = ({children, style, innerStyle}) => {
  return (
    <SafeAreaView style={[GlobalStyles.body, style]}>
      <View style={[GlobalStyles.innerContainer, innerStyle]}>{children}</View>
    </SafeAreaView>
  );
};

export default DefaultBody;
