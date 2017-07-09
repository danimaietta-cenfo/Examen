import React from 'react';
import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Empezar from './Views/Empezar';
import SalonCocina from './Views/SalonCocina';
import Mesas from './Views/Mesas';
import Pendientes from './Views/Pendientes';
import Ordenes from './Views/Ordenes';
import AgregarOrden from './Views/AgregarOrden';

const App = StackNavigator({
    Empezar: { screen: Empezar },
    SalonCocina: { screen: SalonCocina },
    Mesas: { screen: Mesas },
    Pendientes: { screen: Pendientes },
    Ordenes: { screen: Ordenes },
    AgregarOrden: { screen: AgregarOrden },
});

AppRegistry.registerComponent('fetchProject', () => App);
