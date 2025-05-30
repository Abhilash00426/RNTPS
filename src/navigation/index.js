
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NAVIGATION_ROUTE_NAME } from '../constants';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgetPasswordScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContext, AppStateProvider } from '../context';

const Stack = createNativeStackNavigator();
const {LOGIN, FORGET_PASSWORD, HOME, DETAILS, PROFILE, SETTINGS, TAB} = NAVIGATION_ROUTE_NAME;
const Tab = createBottomTabNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={FORGET_PASSWORD} component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen name={DETAILS} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={PROFILE} component={ProfileScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const RootTabNavigator = props => {
  return (
    <Tab.Navigator>
         <Tab.Screen
        name={TAB.HOME_TAB}
        component={HomeStack}
        options={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: 'Georgia',
            fontWeight: '600',
          },
        }}
      />
         <Tab.Screen
        name={TAB.PROFILE_TAB}
        component={ProfileStack}
        options={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: 'Georgia',
            fontWeight: '600',
          },
        }}
      />
    </Tab.Navigator>
  )
}

const RootStack =()=>{
    return(
<Stack.Navigator>
 <Stack.Screen name ={HOME} component = {HomeScreen}/> 
 <Stack.Screen name = {PROFILE}  component = {ProfileScreen}/>
</Stack.Navigator>
    )
}

const RootTabStack =()=>{
    const {appState} = React.useContext(AppContext);
   console.log("appState" ,appState)
  if (appState.isLoggedIn) {
    return <RootTabNavigator />;
  }  else {
    return <AuthStack />;
  }

   
}

const AppNavigator =()=>{
return(
    <AppStateProvider>
    <NavigationContainer  >
        <RootTabStack/>
    </NavigationContainer>
     </AppStateProvider>
)
}

export default AppNavigator;
