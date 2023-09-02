import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListItem = ({ item }) => {
  return (
    <View>
        <Text style={styles.lista}> {item.text} </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    lista:{
        //padding: 5,
        fontSize:20,
        textAlign:'center',
        paddingTop:14,
    },
})

export default ListItem