import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Gods() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Gods</Text>
      <View style={styles.card_container}>
        <View style={styles.shiva_container}>
            <Image
            source={{uri: 'https://as2.ftcdn.net/v2/jpg/09/10/54/61/1000_F_910546129_NvkS63ySvjATniECsORvxsJzQU6wVQvA.jpg'}}
            style={styles.shiva}
            />
            <Text style={{fontWeight:'bold',fontSize:20}}>Shiva:</Text>
            <Text>God of Destruction </Text>
        </View>
        <View style={styles.vishu_container}>
            <Image 
            source={{uri: 'https://as2.ftcdn.net/v2/jpg/08/02/77/61/1000_F_802776120_iFq6AF8KjW9UZRVPiI2JCZcYbbHdMzG3.jpg'}}
            style={styles.vishu}
            />
            <Text style={{fontWeight:'bold',fontSize:20}}>Vishnu:</Text>
            <Text>God of Lives </Text>
        </View>
        <View style={styles.bramha_container}>
            <Image
            source={{uri: 'https://as1.ftcdn.net/v2/jpg/09/70/56/66/1000_F_970566668_cvtOGjVaWpRA2T9i65VIrJyKpbgWulCd.jpg'}}
            style={styles.bramha}   
            />
            <Text style={{fontWeight:'bold',fontSize:20}}>Brahma:</Text>
            <Text>God of Creation </Text>
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
    card_container:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    shiva_container:{
        flex: 1,
        gap: 10,  
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        padding: 20,
        borderRadius: 15,
    },
    vishu_container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        padding: 20,
        borderRadius: 15,
    },
    bramha_container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#f0f0f0',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        padding: 20,
        borderRadius: 15,
    },
    shiva:{
        height: 100,
        width: 100,
        borderRadius: 100/2,
        marginBottom: 10
    },
    vishu:{
        height: 100,
        width: 100,
        borderRadius: 100/2,
        marginBottom: 10
    },
    bramha:{
        height: 100,
        width: 100,
        borderRadius: 100/2,
        marginBottom: 10
    }
})