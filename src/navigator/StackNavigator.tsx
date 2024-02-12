import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { ScreenInicio } from '../screens/ScreenInicio';
import { ScreenFormulario } from '../screens/ScreenFormulario';

export type RootStackParamList = {
    ScreenInicio: undefined;
    ScreenFormulario: undefined;
   
}
const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator=()=> { 
    return ( 
        <Stack.Navigator screenOptions={{ 
            cardStyle:{ 
            }}}> 
   
      <Stack.Screen name="ScreenInicio" component={ScreenInicio} />
      <Stack.Screen name="ScreenFormulario" component={ScreenFormulario} />
      {/* <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} /> */}
    </Stack.Navigator>
  );
}
