import { StyleSheet, Text, TextInput, View, Pressable, Image, FlatList, Modal  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import AddItem from './src/Components/AddItem';
import ListItem from './src/Components/ListItem';
import CustomerModal from './src/Components/CustomerModal';

export default function App() {
  const initialState = [
    {id:1, text:"Tulipanes"},
    {id:2, text:"Girasoles"},
    {id:3, text:"Gardenias"},
  ]

  const [text, setText] = useState("")
  console.log(text)

  const [list, setList] = useState(initialState)

  const [isModalVisible, setIsModalVisible] = useState(false)

  const addItem = () => {
  list.push({
    id:Math.random(),
    text:text,
  })
    setList(list)
    setText("")
  }

  const clearList = () => {
    setList([])
    setIsModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <CustomerModal isModalVisible={isModalVisible} clearList={clearList} setIsModalVisible={setIsModalVisible}/>
      <Image style={styles.imagen}
        source={{uri:"https://previews.123rf.com/images/favetelinguis/favetelinguis1702/favetelinguis170200025/71267155-logotipo-premium-con-flores-logotipo-para-florer%C3%ADa-boutique-nupcial-cosm%C3%A9tica-org%C3%A1nica-s%C3%ADmbolo.jpg"}}
      />
      <Text style={styles.titulo}>LISTA DE FLORES</Text>
      
      <AddItem text={text} setText={setText} addItem={addItem}/>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
          <ListItem item={item}/>
        }
      />
      <Pressable onPress={() => setIsModalVisible(true)}>
        <MaterialCommunityIcons style={styles.buttondelete} name="delete-empty" size={40}  />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  titulo:{
    //marginTop: 60,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomColor:"blue",
    borderBottomWidth:4,
  },
  
  containerlista:{
    borderColor:'blue',
    borderWidth:1,
    width:150,
    height: 150,

  },
  
  imagen:{
    width:120,
    height:120,
    marginTop:40,
  },
  buttondelete:{
    alignItems:'center',
    marginTop:15,
  },
});
