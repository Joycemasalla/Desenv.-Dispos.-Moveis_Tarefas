import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/Styles";


export function SobreScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sobre</Text>
            <Text>Este é um aplicativo de exemplo para demonstrar a navegação entre telas usando React Navigation.</Text>
            <Text>Desenvolvido por: Eu</Text>
        </View>
    )
}

export default SobreScreen;