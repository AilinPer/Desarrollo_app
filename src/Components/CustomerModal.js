import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomerModal = ({isModalVisible, setIsModalVisible, clearList}) => {
  return (
    <View style={styles.contenedor}>
        <Modal style={styles.modalContainer} 
        animationType="slide"
        visible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.titulo}> Deseas eliminar la lista </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.modal} onPress={() => clearList()}>
            <Text style={styles.button}>Si</Text>
          </Pressable>
          <Pressable style={styles.modal} onPress={() => setIsModalVisible(false)}>
            <Text style={styles.button}>No</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:2,
    },
    modalContainer: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue',
        elevation: 2,
    },

})

export default CustomerModal