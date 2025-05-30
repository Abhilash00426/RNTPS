import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';


const  SettingsScreen = ({route}) =>  {
  const navigation = useNavigation();
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
   
    </View>
  );
}
export default SettingsScreen;