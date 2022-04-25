import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../components/Button';
import {StackParams} from '../../routes/Routes';

type props = NativeStackScreenProps<StackParams>;

export const Login: React.FC<props> = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Home"
        type="secondary"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="List"
        type="secondary"
        onPress={() => {
          navigation.navigate('List');
        }}
      />
      <Button
        title="Search"
        type="secondary"
        onPress={() => {
          navigation.navigate('Search');
        }}
      />
      <Button
        title="SinglePage"
        type="secondary"
        onPress={() => {
          navigation.navigate('SinglePage');
        }}
      />
      <Button
        title="User"
        type="secondary"
        onPress={() => {
          navigation.navigate('User');
        }}
      />
    </View>
  );
};
