import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";

const Tab = createBottomTabNavigator();

const TabNavRoutes = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#1976D2',
                tabBarInactiveTintColor: '#00000099',
                tabBarIconStyle: {
                    paddingTop: 8,
                    justifyContent: "center"
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    paddingBottom: 8
                },
                tabBarStyle: {
                    height: 57
                },
            }}
        >
            <Tab.Screen
                name="Repositórios"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="github"
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Favoritos"
                component={Favorites}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="star"
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavRoutes;