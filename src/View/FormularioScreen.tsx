import React from "react";
import { View, Button, TextInput, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import { ControladoraViewModel } from "../viewModel/Controladora";
import styles from "../styles/Styles";

export function FormularioScreen() {
    const viewModel = ControladoraViewModel();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nova Entidade</Text>

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
                <View style={{width: '50%'}}>
                    <Button
                        title="Adicionar"
                        color="#C8A2C8"
                        onPress={viewModel.adicionar}
                    />
                </View>
            </View>
        </View>
    )
}