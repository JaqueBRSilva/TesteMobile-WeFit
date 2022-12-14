import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Details from '../pages/Details';
import TabNavRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (

    <stackRoutes.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
    >
        <stackRoutes.Screen
            name="Home"
            component={TabNavRoutes}
        />

        <stackRoutes.Screen
            name="Favoritos"
            component={TabNavRoutes}
        />

        <stackRoutes.Screen
            name="Details"
            component={Details}
            options={{
                headerShown: true,
                headerTitle: "Detalhes",
                headerTitleAlign: 'left',
                headerTintColor: '#FFF',
                headerStyle: {
                    backgroundColor: '#000',
                }
            }}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;