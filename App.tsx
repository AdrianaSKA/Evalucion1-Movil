import React from 'react'
import { Cuadros1 } from './src/screens/Cuadros1'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cuadros6 } from './src/screens/Cuadros6'
import { Cuadros2 } from './src/screens/Cuadros2'
import { Cuadros5 } from './src/screens/Cuadros5'
import { Cuadros8 } from './src/screens/Cuadros8'
import { Cuadros9 } from './src/screens/Cuadros9'
import { Cuadros4 } from './src/screens/Cuadros4'
import { Cuadros7 } from './src/screens/Cuadros7'
import { Cuadros3 } from './src/screens/Cuadros3'
import { Ejercicio1 } from './src/screens/Ejercicio1';

export const App = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>
      {/*<Cuadros1/>*/}
      {/*<Cuadros2/>*/}
      {/*<Cuadros3/>*/}
      {/*<Cuadros4/>*/}
      {/*<Cuadros5/>*/}
      {/*<Cuadros6/>*/}
      {/*<Cuadros7/>*/}
      {/*<Cuadros8/>*/}
      {/*<Cuadros9/>*/}
      <Cuadros7/>
    </SafeAreaView>
  )
}

export default App;