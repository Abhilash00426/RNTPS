
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATION_ROUTE_NAME} from '../../constants';

const HomeScreen = ({route}) =>{
//   console.log('route.params: ', route.params);
//   const [state, setState] = useState(1);
//   const [name, setName] = useState('himanshu');

    const navigation = useNavigation();
    return (
        <View style = {{flex:1 , justifyContent:'center' , alignItems:'center'}}>
            <Text> HomeScreen </Text>
              <Button onPress={() => navigation.navigate(NAVIGATION_ROUTE_NAME.PROFILE )} title ={" Go to PROFILE"}/>
       
     
        </View>
    )
}
export default HomeScreen ; 