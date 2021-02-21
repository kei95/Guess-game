import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Dimensions,
  Platform,
} from 'react-native';
import {Button} from '../../../components/button';

import DefaultBody from '../../../components/defaultBody';
import {GuessableNumbers} from '../../../context/context';
import {GlobalStyles} from '../../../styles/globalStyles';
import Picker from './Picker';

interface NumberPickerProps {
  onPressButton: (number: number) => void;
}

export const NumberPicker: React.FC<NumberPickerProps> = ({onPressButton}) => {
  const context = useContext(GuessableNumbers);
  const [number, setNumber] = useState(0);
  const [data, setData] = useState<number[]>(
    Array.from({length: 100}, (_, i) => i),
  );

  useEffect(() => {
    setData(
      Array.from(
        {
          length:
            context!.guessableNumber.greatest -
            context!.guessableNumber.smallest,
        },
        (v, k) => k + context!.guessableNumber.smallest,
      ),
    );
  }, [context]);

  const renderItem = (item: string, _: number) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.pickerNumber}>{item}</Text>
      </View>
    );
  };
  return (
    <DefaultBody>
      <View style={styles.contentsWrapper}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Decide your number:</Text>
        </View>
        <View style={styles.numberPickerContainer}>
          <Picker
            data={data}
            renderItem={renderItem}
            itemWidth={120}
            onChange={setNumber}
          />
          <View style={styles.borderLineLeft} />
          <View style={styles.borderLineRight} />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Choose" onPress={() => onPressButton(number)} />
      </View>
    </DefaultBody>
  );
};

const styles = StyleSheet.create({
  contentsWrapper: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
  } as ViewStyle,
  numberPickerContainer: {
    width: Dimensions.get('window').width,
    alignSelf: 'center',
  } as ViewStyle,
  nameContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 5,
  } as ViewStyle,
  title: {
    fontSize: 25,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: 20,
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  nameText: {
    fontSize: 25,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  text: {
    fontSize: 25,
    color: '#3D405B',
    textAlign: 'center',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
  pickerNumber: {
    height: Platform.OS === 'android' ? 80 : 70,
    width: Platform.OS === 'android' ? 80 : 75,
    fontSize: 70,
    color: GlobalStyles.secondPrimaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  borderLineLeft: {
    borderWidth: 2,
    height: 70,
    position: 'absolute',
    top: Platform.OS === 'android' ? 10 : 0,
    left: '37%',
    borderColor: GlobalStyles.secondPrimaryColor,
  } as ViewStyle,
  borderLineRight: {
    borderWidth: 2,
    height: 70,
    position: 'absolute',
    top: Platform.OS === 'android' ? 10 : 0,
    right: '37%',
    borderColor: GlobalStyles.secondPrimaryColor,
  } as ViewStyle,
  itemContainer: {
    width: 120,
    alignItems: 'center',
  } as ViewStyle,
  numberPicker: {
    left: 0,
    width: '100%',
    height: 70,
  } as ViewStyle,
});
