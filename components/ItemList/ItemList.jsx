import {View, FlatList, StyleSheet} from 'react-native'
import MyItem from './MyItem'

export default function ItemList({handleModal, products}) {
    return (
        <View style={styles.listContainer}>
            <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return (
                    <MyItem handleModal={handleModal} item={item}/>
                )}}
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
    }
})