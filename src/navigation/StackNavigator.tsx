import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListaScreen } from '../view/ListaScreen';
import { FormularioScreen } from '../view/FormularioScreen';

type RootStackParams = {
    Lista: undefined;
    Formulario: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export function Navigator() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Lista" component={ListaScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Formulario" component={FormularioScreen} />
        </Stack.Navigator>
    )
}