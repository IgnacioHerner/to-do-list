import { useState } from "react";
import { Text, TextInput, View, Button, FlatList, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function App() {
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([]);
	const [selectedTask, setSelectedTask] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	const onHandleTask = () => {
		setTaskList((prevTask) => [
			{ id: Math.random().toString(), value: task },
			...prevTask,
		]);
		setTask("");
	};

	const renderItem = ({ item }) => (
		<TouchableOpacity key={item.id} style={styles.listItemContainer} onPress={() => onHandleSelected(item)}>
			<Text style={styles.listItem}>{item.value}</Text>
		</TouchableOpacity>
	);

	const onHandleSelected = (item) => {
		setSelectedTask(item);
		setModalVisible(!modalVisible)
	}

	const onHandleCancel = () => {
		setModalVisible(!modalVisible)
	};

	const onHandleDeleteItem = () => {
		setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id != selectedTask.id))
		setModalVisible(!modalVisible)
	}; 

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					value={task}
					placeholder="Enter Task"
					onChangeText={(text) => setTask(text)}
				/>
				<Button
					disabled={!task}
					title="Add"
					color="#9A848F"
					onPress={onHandleTask}
				/>
			</View>
			<View style={styles.listContainer}>
				<Text style={styles.listTitle}>To do List</Text>
			</View>
			<FlatList
				style={styles.listContainer}
				data={taskList}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
			/>
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
		</View>
	);
}
