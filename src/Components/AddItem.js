import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const AddItem = ({ text, setText, addItem }) => {
  return (
    <View style={styles.contenedorinput}>
      <TextInput style={styles.input}
        placeholder='Escriba aqui' 
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Pressable onPress={() => addItem()}>
        <Ionicons style={styles.button} name="add-circle-outline" size={35}  />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorinput:{
    margin:30,
    flexDirection:'row',
    alignItems:'center',
  },
  input:{
    padding:5,
    borderColor:'blue',
    borderWidth:1,
    fontSize:18,
  },
  button:{
    marginLeft:30,
    color:"blue",
  },
})

export default AddItem