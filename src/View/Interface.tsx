import React from "react";
import { View, Button, TextInput, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import { ControladoraViewModel } from "../viewModel/Controladora";
import styles from "../styles/Styles";
import { MaterialIcons } from '@expo/vector-icons';

export function Interface() {
    const viewModel = ControladoraViewModel();

    //view chama funcao adicionar -> viewmodel chama business -> business cria a entifdade -> view miodel atualiza lista

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Minha Lista</Text>

            <TextInput
                placeholder="Digite uma nova entidade para a lista"
                style={styles.input}
                value={viewModel.nome}
                onChangeText={viewModel.setNome} />

            <TextInput
                placeholder="Digite a descrição da entidade"
                style={[styles.input, styles.inputLast]}
                value={viewModel.descricao}
                onChangeText={viewModel.setDescricao} />

            <View style={styles.buttonWrapper}>
                <Button
                    title="Adicionar"
                    color="#C8A2C8"
                    onPress={viewModel.adicionar}
                />
            </View>

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
        </View>
    )
}
