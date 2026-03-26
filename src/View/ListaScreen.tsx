import React from 'react';
import {
    View,
    Button,
    TextInput,
    Text,
    FlatList,
    TouchableOpacity,
    Modal,
} from 'react-native';
import { ControladoraViewModel } from '../viewModel/Controladora';
import styles from '../styles/Styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import { useCallback } from "react";
import { RegrasDaEntidade } from '../business/RegrasNegocio';
import { Entidade } from '../model/Entidade';
import { Navigator, RootStackParams } from '../navigation/Navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export function ListaScreen() {
    const viewModel = ControladoraViewModel();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    const [entidades, setEntidades] = useState<Entidade[]>([]);

    useFocusEffect(
        useCallback(() => {
            setEntidades([...RegrasDaEntidade.listaEntidadesEstatica]);
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Minha Lista</Text>
            <FlatList
                data={entidades}
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
                            onPress={() => {
                                viewModel.deletar(item.id);
                                setEntidades([...RegrasDaEntidade.listaEntidadesEstatica]);
                            }}>
                            <MaterialIcons name="delete" size={24} color="#E74C3C" />
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Modal
                visible={viewModel.modalVisivel}
                onRequestClose={viewModel.fecharModal}
                transparent={true} // Permite ver a tela original no fundo
                animationType="fade" // Efeito suave de aparecimento
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Entidade deletada com sucesso!</Text>
                        <Button
                            title="Fechar"
                            onPress={viewModel.fecharModal}
                            color="#7437d4e3"
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.addTitleContainer}>
                <View style={{ width: "50%" }}>
                    <Button
                        title="Adicionar"
                        color="#C8A2C8"
                        onPress={() => navigation.navigate("Formulario")}
                    />
                </View>
            </View>
        </View>
    );
}
