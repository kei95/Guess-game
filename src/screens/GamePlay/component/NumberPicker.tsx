import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Dimensions,
} from 'react-native';
import {Button} from '../../../components/button';

import DefaultBody from '../../../components/defaultBody';
import {GlobalStyles} from '../../../styles/globalStyles';
import Picker from './Picker';

interface NumberPickerProps {
  onPressButton: (number: number) => void;
}

const data = Array.from({length: 100}, (_, i) => i);

export const NumberPicker: React.FC<NumberPickerProps> = ({onPressButton}) => {
  const [number, setNumber] = useState(0);

  const renderItem = (item: string, _: number) => {
    return (
      <View style={styles.itemContainer}>
        <Text
          style={
            number === parseInt(item, 10)
              ? styles.pickerNumberBorder
              : styles.pickerNumber
          }>
          {item}
        </Text>
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
        <Button
          title="Ready"
          // onPress={() => navigation.navigate('PlayerSetting')}
          onPress={() => onPressButton(number)}
        />
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
    height: 70,
    width: 75,
    fontSize: 70,
    color: '#81B29A',
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  pickerNumberBorder: {
    height: 70,
    width: 75,
    fontSize: 70,
    color: '#81B29A',
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  borderLineLeft: {
    borderWidth: 2,
    height: 70,
    position: 'absolute',
    top: 0,
    left: '37%',
    borderColor: '#81B29A',
  } as ViewStyle,
  borderLineRight: {
    borderWidth: 2,
    height: 70,
    position: 'absolute',
    top: 0,
    right: '37%',
    borderColor: '#81B29A',
  } as ViewStyle,
  itemContainer: {
    width: 120,
  } as ViewStyle,
});
