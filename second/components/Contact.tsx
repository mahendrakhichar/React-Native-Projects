import { Button, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function Contact() {

    const openGoogle = () => {
        Linking.openURL('https://google.com');
    }
    const openEmail = () => {
        Linking.openURL('mailto:princekumariiitkota@gmail.com?subject=Hello&body=How are you?');

    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact</Text>
      <View style={styles.contact}>
        <View style={styles.google}>
            <TouchableOpacity onPress={openGoogle}>
                <Text style={{color:'white'}}>Google</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.email}> 
            <TouchableOpacity onPress={openEmail}>
                <Text style={{color:'white'}}>Email</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contact: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    google: {
        flex: 1,
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 15,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    email: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 15,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    }
})