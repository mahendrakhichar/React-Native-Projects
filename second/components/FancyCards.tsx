import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
        <Text style={styles.heading}> Fancy Cards</Text>
        <View style={styles.container}>
        <View style={styles.cards}>
            <Image 
            source={{uri: 'https://as2.ftcdn.net/v2/jpg/07/81/90/05/1000_F_781900559_heNVrZXWYRTldmk3LlXqRWhjMuX7kKtK.jpg'}}
            style={{height: 300 ,borderRadius: 15, marginBottom: 10}}
            />
            <View>

            </View>
                <Text style={styles.image_desc}>Lord Ganesha</Text>
                <Text style={styles.intro}>Ganesha is a Hindu elephant head god who is one of the most revered gods in all of Hinduism and Buddhism.</Text>
                <Text style={styles.power}>
                <Text style={{ fontWeight: 'bold' }}>Reason of Worship:</Text> Lord Ganesha is known as the remover of obstacles, and is believed to have the power to grant good fortune, wealth, and wisdom.
                </Text>

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
    cards:{
        flex: 1,
        backgroundColor: 'white', 
        padding: 20,
        borderRadius: 15,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        
    },
    image_desc: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'serif',
    },
    intro: {
        fontSize: 16,
        fontFamily:'arial',
        marginBottom: 10,
        fontStyle:'italic',
        textDecorationLine: 'underline',
    },
    power: {
        fontSize: 14,
        // textAlign: 'center',
    },

})