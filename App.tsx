import 'react-native-gesture-handler';

import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { PermissionsProvider } from './src/context/PermissionContext';
import React from 'react'
import { StackNavigation } from './src/Navigation/Navigation';

const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      { children }
    </PermissionsProvider>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigation />
      </AppState>
    </NavigationContainer>
  )
}



export default App
