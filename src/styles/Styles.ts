import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, // Preenche toda a tela
        backgroundColor: "#F8F9FA",
        paddingTop: 60, 
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333333",
        textAlign: "center",
        marginBottom: 24,
    },
    input: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        padding: 14,
        borderRadius: 8,
        marginBottom: 12,
        fontSize: 16,
    },
    inputLast: {
        marginBottom: 20,
    },
    buttonWrapper: {
        marginBottom: 30,
    },
    list: {
        paddingBottom: 20,
    },
    listItem: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    itemTextContainer: {
        flex: 1, 
        marginRight: 12,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2C3E50",
        marginBottom: 4,
    },
    itemDesc: {
        fontSize: 14,
        color: "#7F8C8D",
    },
    deleteButton: {
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
    },
    modalContent: {
        width: "80%", 
        backgroundColor: "white",
        padding: 24, 
        borderRadius: 20, 
        alignItems: "center",
        elevation: 5, 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    modalText: {
        marginBottom: 15,
        fontSize: 16,
        textAlign: "center",
    }
});

export default styles;