import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { RootStackParamList } from '../navigator/StackNavigator'

interface Props extends StackScreenProps<RootStackParamList,'ScreenInicio'>{};

export const ScreenInicio = ({ navigation }:Props) => {
  return (
    <View>
        <Text> BIENVENIDOS</Text>
        <Image
            source={{ 
                uri:"https://significado.com/contenido/imp/apps.jpg"
            }} 
            /> 
            <Button
        title="Acceder"
        onPress={() => navigation.navigate('ScreenFormulario')}
      />
            </View>
  )
}
