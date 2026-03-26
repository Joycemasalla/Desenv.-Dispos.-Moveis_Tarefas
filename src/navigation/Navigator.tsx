import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListaScreen } from '../View/ListaScreen';
import { FormularioScreen } from '../View/FormularioScreen';

export type RootStackParams = {
    Lista: undefined;
    Formulario: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export function Navigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lista" component={ListaScreen} />
            <Stack.Screen name="Formulario" component={FormularioScreen} />
        </Stack.Navigator>
    )
}