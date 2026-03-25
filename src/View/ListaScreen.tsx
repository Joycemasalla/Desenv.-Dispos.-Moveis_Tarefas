import React from "react";
import { View, Button, TextInput, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import { ControladoraViewModel } from "../viewModel/Controladora";
import styles from "../styles/Styles";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function ListaScreen() {
    const viewModel = ControladoraViewModel();
    const navigation = useNavigation();
    return (

        <View style={styles.container}>
            <FlatList
                data={viewModel.listaEntidades}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <View style={styles.itemTextContainer}>
                            <Text style={styles.itemTitle}>{item.nome}</Text>
                            <Text style={styles.itemDesc}>{item.descricao}</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => viewModel.deletar(item.id)}>
                            <MaterialIcons name="delete" size={24} color="#E74C3C" />
                        </TouchableOpacity>


                    </View>
                )}
            />
            <Text style={styles.header}>Adicionar Nova Entidade</Text>
            <Button title="Adicionar" color="#C8A2C8" onPress={() => navigation.navigate('Formulario')} />
        </View>
    )

}