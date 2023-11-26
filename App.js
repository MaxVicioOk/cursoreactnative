import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
                <TextInput placeholder='Product' style={styles.input}/>
                <Button title="  +  " />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text>$2200</Text>
          <Text>Gancia</Text>
          <Button title='  -  '/>
        </View>
        <View style={styles.cardProduct}>
          <Text>$1000</Text>
          <Text>Sprite</Text>
          <Button title='  -  '/>
        </View>
        <View style={styles.cardProduct}>
          <Text>$980</Text>
          <Text>Queso</Text>
          <Button title='  -  '/>
        </View>
        <View style={styles.cardProduct}>
          <Text>$1200</Text>
          <Text>Salamín</Text>
          <Button title='  -  '/>
        </View>
      </View>
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
  text: {
    color: 'white',
  },
  inputContainer:{
    flexDirection:"row",
    alignSelf:"stretch", // esto es lo mismo que width: "100%"
    justifyContent:'space-evenly',
    marginTop: '5%'
  },
  input:{
    borderWidth:4,
    paddingHorizontal:10,
    paddingVertical:5,
    width:'80%',
    backgroundColor: '#eee',
    borderRadius: 10
  },
  listContainer: {
    width:'95%',
    marginTop: "5%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  cardProduct: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '5%'
  }
});
