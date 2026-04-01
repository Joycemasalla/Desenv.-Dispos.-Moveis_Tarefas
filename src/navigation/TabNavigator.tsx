import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './StackNavigator';
import SobreScreen from '../view/SobreScreen';
import { MaterialIcons } from '@expo/vector-icons';


type TabParams = {
    Lista: undefined;
    Sobre: undefined;
};

const Tab = createBottomTabNavigator<TabParams>();

export function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Lista') {
                        return <MaterialIcons name="list" size={size} color={color} />;
                    } else if (route.name === 'Sobre') {
                        return <MaterialIcons name="info" size={size} color={color} />;
                    }
                },
            })}
        >
            <Tab.Screen name="Lista" component={Navigator} options={{headerShown: false }} />
            <Tab.Screen name="Sobre" component={SobreScreen} />
        </Tab.Navigator>
    )
}