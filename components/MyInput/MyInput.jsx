import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function MyInput({ setNewTitle, setNewPrice, setNewQuantity, handelAddProduct, newTitle, newPrice, newQuantity}) {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.textInputContainer}>
                <TextInput placeholder='Product' style={styles.input} value={newTitle} onChangeText={(t) => setNewTitle(t)}/>
                <TextInput placeholder='Price' style={styles.input} value={newPrice} onChangeText={(t) => setNewPrice(t)}/>
                <TextInput placeholder='Quantity' style={styles.input} value={newQuantity} onChangeText={(t) => setNewQuantity(t)}/>
            </View>
            <Button title="  +  " onPress={handelAddProduct}/>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:"stretch", // esto es lo mismo que width: "100%"
        justifyContent: 'space-around',
        marginTop: '5%'
    },
    textInputContainer:{
        width: '50%',
    },
    input:{
        borderWidth:4,
        paddingHorizontal:10,
        paddingVertical:5,
        marginVertical:2,
        width:'100%',
        backgroundColor: '#eee',
        borderRadius: 10
    }
})