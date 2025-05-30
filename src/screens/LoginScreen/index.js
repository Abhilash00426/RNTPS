
import {useNavigation} from '@react-navigation/native';
import React, {useState, useReducer, useContext, act} from 'react';
import {View, Text, TextInput, Button, Switch} from 'react-native';
import { NAVIGATION_ROUTE_NAME } from '../../constants';
import { AppContext } from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const stateChangerFxn =(prevState,action) =>{
  const{type , payload} = action ; 
  switch(type){
    case 'SET-EMAIL' : return{...prevState ,email : payload }
      case 'SET-PASSWORD' : return{...prevState ,password : payload }
      default : return prevState;
  }
}
// acti n -> Plain Javascript Object
const INITIAL_STATE = {
  email: '',
  password: '',
};


const LoginScreen =()=> {
     const navigation = useNavigation();
//  const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
const{appStateDispatch} = useContext(AppContext);
     const [myState, dispatch] = useReducer(stateChangerFxn, INITIAL_STATE);
  console.log('myState: ', myState);
const onPressLogin = () => {
  const action = {
    type : 'SET_IS_LOGIN',
    payload: true
  }
  console.log('setting action ' , action)
 appStateDispatch(action);
 AsyncStorage.setItem('SET_IS_LOGIN', true);
    };

    
  const onSetEmail =(emailVal) => {
    const action = {
      type : 'SET-EMAIL' ,
  payload : emailVal
    }
    dispatch(action);

  }
    const onSetPassword =(passVal) => {
    const action = {
      type : 'SET-PASSWORD' ,
  payload : passVal
    }
    dispatch(action);

  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{'Login Screen'}</Text>
      <TextInput
        value={myState.email}
        onChangeText={onSetEmail}
        placeholder="Enter User Id or Email"
        style={{padding: 8, margin: 8, borderWidth: 1}}
      />
      <TextInput
        value={myState.password}
        onChangeText={onSetPassword}
        placeholder="Enter Password"
        style={{padding: 8, margin: 8, borderWidth: 1}}
      />
          <Button title="Login" onPress={onPressLogin} />
          <Button
        title="Forget Password"
        onPress={() =>
          navigation.navigate(NAVIGATION_ROUTE_NAME.FORGET_PASSWORD)
        }
      />
    </View>
  );
}
export default LoginScreen;
