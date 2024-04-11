import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from './styles.js'

const ModalItem = ({modalVisible, selectedTask, onHandleCancel,onHandleDeleteItem}) => {
    return (
        <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Task Details</Text>
            <View style={styles.modalDetailContainer}>
                <Text style={styles.modalTitleText}>
                    Are you sure to delete this item?
                </Text>
                <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <Button title="Cancel" color="#94848F" onPress={onHandleCancel} />
                <Button title="Delete" color="#94848F" onPress={onHandleDeleteItem} />
            </View>
        </View>
    </Modal>
    )
}

export default ModalItem;