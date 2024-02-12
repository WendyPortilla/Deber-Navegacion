import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export const ScreenFormulario = () => {
  const [num1, setNumero1] = useState('');
  const [num2, setNumero2] = useState('');
  const [resultado, setResultado] 
  = useState<string | null>(null);

  const Dividir = () => {
    const Numero1 = parseFloat(num1);
    const Numero2 = parseFloat(num2);

//Validaciones

    if (isNaN(Numero1) || isNaN(Numero2)) {
      setResultado('Numero invalido');

    } else if (Numero2 === 0) {
      setResultado('No hay division para cero');

    } else {
      const divisionResult = Numero1 / Numero2;
      setResultado(`Resultado: ${divisionResult}`);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Ingrese el primer numero"
        value={num1}
        onChangeText={(text) => setNumero1(text)}
      />
      <TextInput
        placeholder="Ingrese el segundo numero"
        value={num2}
        onChangeText={(text) => setNumero2(text)}
      />
      <Button title="Dividir" onPress={Dividir} />
      {resultado &&
       <Text>{resultado}</Text>}
    </View>
  );
};

