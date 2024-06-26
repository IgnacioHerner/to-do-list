import { useState } from "react";
import { Text, View} from "react-native";
import { styles } from "./styles.js";
import { AddItem, TaskItem, ModalItem, ListItem } from "./components/index";

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
		<TaskItem  item={item} onHandleSelected={onHandleSelected}/> 
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

	const onHandleChange = (text) => setTask(text)

	return (
		<View style={styles.container}>
			<View style={styles.listContainer}>
				<Text style={styles.listTitle}>To do List</Text>
			</View>
			<AddItem task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange}/>
			<ListItem taskList={taskList} renderItem={renderItem}/>
			<ModalItem modalVisible={modalVisible} selectedTask={selectedTask} onHandleCancel={onHandleCancel} onHandleDeleteItem={onHandleDeleteItem}/>
		</View>
	);
}
