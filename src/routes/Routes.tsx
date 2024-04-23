import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParams} from '../types'; /* Hay que tipar para que no exista error en Stack.Screen */
import Home from '../views/Home';
import Detail from '../views/Detail';

const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: 'rgba(7,26,93,255)',
  },
  headerTitleStyle:{
    color: '#fff',
  }
};

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={routeScreenDefaultOptions}/>
      <Stack.Screen name="Detail" component={Detail} options={routeScreenDefaultOptions}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;

/* initialRouteName: Va el nombre de la vista principal de la app */
/* en name: va el nombre de las rutas o vistas que vayamos a tener en la app  */
