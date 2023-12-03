import {View, Text, Button, StyleSheet} from 'react-native'

export default function MyItem({handleModal, item}) {
    return (
        <View style={styles.cardProduct}>
            <Text>{item.title}</Text>
            <Text>$ {item.price}</Text>
            <Text>x {item.quantity}</Text>
            <Button title='  -  ' onPress={() => handleModal(item)}/>
        </View>
    )
}
const styles = StyleSheet.create({
    cardProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '5%'
    }
})