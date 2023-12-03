import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid';
import MyModal from './components/MyModal/MyModal';
import ItemList from './components/ItemList/ItemList';
import MyItem from './components/MyItem/MyItem';

export default function App() {
  const [newTitle, setNewTitle] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newQuantity, setNewQuantity] = useState('')
  const [products, setProducts] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [prodToDelet, setProdToDelete] = useState({})

  function handelAddProduct() {
    const product = {
      id: uuid.v4(),
      title: newTitle,
      price: newPrice,
      quantity: newQuantity
    }
    setProducts([...products, product])
    setNewTitle('')
    setNewPrice('')
    setNewQuantity('')
  }
  function handleModal(item){
    setProdToDelete(item)
    setModalVisible(true)
  }
  function handlerDeleteProduct(){
    setProducts(current => current.filter(product => product.id !==prodToDelet.id))
    setModalVisible(false)
  }
  return (
    <View style={styles.container}>
      <MyItem
        setNewTitle={setNewTitle}
        setNewPrice={setNewPrice}
        setNewQuantity={setNewQuantity}
        handelAddProduct={handelAddProduct}
        newTitle={newTitle}
        newPrice={newPrice}
        newQuantity={newQuantity}
      />
      <ItemList
        handleModal={handleModal}
        products={products}
      />
      <MyModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handlerDeleteProduct={handlerDeleteProduct}
        prodToDelet={prodToDelet}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: "10%",
  },
  
});
