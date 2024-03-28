import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F4F5'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 40,
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderColor: '#9A848F',
    },
    listContainer:{
        marginHorizontal: 20,
    },
    listTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'#212121',
    },
    listItemContainer:{
        paddingVertical: 20,
        backgroundColor: '#9A848F',
        borderRadius: 5,
        shadowColor: "#000",
        marginVertical: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    listItem:{
        fontSize: 14,
        color: '#ffffff',
        paddingHorizontal: 10,
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalDetailContainer: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitleText: {
        fontSize: 14,
        color: '#212121',
    },
    selectedTask: {
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        paddingVertical: 20,
    },
    modalButtonContainer: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
    },
    });