import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type navigationTypes = {
  navigation: StackNavigationProp<any, any>;
  route?: RouteProp<any, any>;
};
