import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function Cards() {
  return (
    <View style={styles.container}>
            <Text style={styles.flatcard}> Flat Cards</Text>
            <View style={styles.cards} >
              <View style={[styles.green ,styles.card]}>
                <Text>Green</Text>
              </View>
              <View style={[styles.blue,styles.card]}>
                <Text >Blue</Text>
              </View>
              <View style = {[styles.red,styles.card]}>
                <Text >Red</Text>
              </View>
            </View>
    
            <Text style={styles.flatcard}>Horizontal Scrolling features</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row', gap: 4 }}>
                <View style={[styles.green, styles.card]}>
                  <Text>Green</Text>
                </View>
                <View style={[styles.blue, styles.card]}>
                  <Text>Blue</Text>
                </View>
                <View style={[styles.red, styles.card]}>
                  <Text>Red</Text>
                </View>
                <View style={[styles.red, styles.card]}>
                  <Text>Red</Text>
                </View>
              </View>
          </ScrollView>
    
          </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:4,
    },
    flatcard:{
      fontSize:20,
      fontWeight:'bold',
    },
    cards:{
      flexDirection:'row',
      justifyContent:'space-between',
      margin:4,
      gap:4,
    },
    card:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:100,
      height:100,
      borderRadius:10,
    },
    green:{
      backgroundColor:'green',
    }, 
    blue:{
      backgroundColor:'blue',
    },
    red:{
      backgroundColor:'red',
    }
  })
