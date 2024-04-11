import React from "react";
import { styles } from "./styles";
import { FlatList } from "react-native";

const ListItem = ({taskList, renderItem}) => {
    return (
        <FlatList
            style={styles.listContainer}
            data={taskList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default ListItem;