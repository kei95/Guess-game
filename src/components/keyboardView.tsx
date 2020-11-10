import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  Animated,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface KeyboardViewProps {
  children: React.ReactNode;
}

export const KeyboardView: React.FC<KeyboardViewProps> = ({children}) => {
  const majorVersionIOS = Platform.OS === 'ios' ? Platform.Version : -1;
  const keyBoardOffSet = 20;
  const isIos14: Boolean = majorVersionIOS === 14;
  const [height] = useState(new Animated.Value(0.1));

  useEffect(() => {
    if (isIos14) {
      const animateTo = (y: number, duration: number) =>
        Animated.timing(height, {
          toValue: y,
          duration,
          useNativeDriver: false,
        }).start();

      const willShowListener = Keyboard.addListener(
        'keyboardWillShow',
        (evt) => {
          animateTo(evt.endCoordinates.height - 50, evt.duration);
        },
      );

      const willHideListener = Keyboard.addListener(
        'keyboardWillHide',
        (evt) => {
          animateTo(0, evt.duration);
        },
      );

      return () => {
        willShowListener.remove();
        willHideListener.remove();
      };
    }
  }, [height, isIos14]);

  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView
      style={styles.wrapper}
      keyboardVerticalOffset={keyBoardOffSet}
      behavior={'padding'}>
      {children}
    </KeyboardAvoidingView>
  ) : (
    <>{children}</>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});
