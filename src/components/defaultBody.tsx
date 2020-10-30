import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {GlobalStyles} from '../styles/globalStyles';

type Props = {children: React.ReactNode};

const DefaultBody: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView style={GlobalStyles.body}>
      <View style={GlobalStyles.innerContainer}>{children}</View>
    </SafeAreaView>
  );
};

export default DefaultBody;
