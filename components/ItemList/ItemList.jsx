import {View, FlatList, Text, Button, StyleSheet} from 'react-native'

export default function ItemList({handleModal, products}) {
    return (
        <View style={styles.listContainer}>
            <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return <View style={styles.cardProduct}>
                <Text>{item.title}</Text>
                <Text>$ {item.price}</Text>
                <Text>x {item.quantity}</Text>
                <Button title='  -  ' onPress={() => handleModal(item)}/>
                </View>}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    listContainer: {
        width:'95%',
        marginTop: "5%",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#eee',
    },
    cardProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '5%'
    }
})