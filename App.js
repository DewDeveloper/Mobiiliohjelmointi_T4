import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextComponent, TextInput, View } from 'react-native';

export default function App() {

  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, {key: item}]);
  }

  const clearItems = () => {
    setItems([]);
  }

  return (
    <View style={styles.container}>

      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>

      <TextInput
        style={styles.input}
        onChangeText={setItem}
        keyboardType="default" 
        underlineColorAndroid={"blue"}/>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <View style={styles.row}>
        <Button
            style={styles.button}
            title="ADD"
            color="blue"
            onPress={addItem} />
        <Button
            style={styles.button}
            title="CLEAR"
            color="blue"
            onPress={clearItems} />
      </View>

      <Text></Text>
      <Text></Text>
      
      <Text style={styles.blue}>Shopping list</Text>

      <FlatList
        data={items}
        renderItem={({item}) => (
          <Text>{item.key}</Text>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: 150,
    margin: 5,
    borderWidth: 2,
    padding: 5,
  },
  button: {
    height: 20,
    width: 20,
    justifyContent: "center",
    padding: 150,
  },
  row: {
    flexDirection: "row",
  },
  blue: {
    color: "blue",
  },
});
