import {StyleSheet, Text, View, Button, Modal} from 'react-native'

export default function MyModal({modalVisible, setModalVisible, handlerDeleteProduct, prodToDelet}) {
    return (
        <Modal visible={modalVisible}>
            <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.textModal}>¿Está seguro que quiere eliminar {prodToDelet.title}?</Text>
                <Button title='Borrar' onPress={handlerDeleteProduct}/>
                <Button title='Volver'onPress={() => setModalVisible(false)}/>
            </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        backgroundColor: '#ccc',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent:{
        width: '80%',
        backgroundColor: '#eee',
        borderWidth: 1,
        borderRadius: 5,
        gap: 12,
        padding: 12,
    },
    textModal:{
        textAlign: 'center',
    }
})
