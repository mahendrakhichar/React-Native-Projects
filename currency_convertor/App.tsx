import { StyleSheet, Text, View,SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'

import { currencyByRupee } from './src/constants'
import { currencyButton } from './src/components/CurrencyButton'
import { Snackbar } from "react-native-paper";

export default function App() {
  return (
    <SafeAreaView>
      <FlatList>
        <View>
          <Text style={styles.text}>App</Text>
        </View>
      </FlatList>
    </SafeAreaView>
  )
}
// flatList is better then scroolView because it only loads the component which is visible on the screen 
const styles = StyleSheet.create({
  text:{
    fontSize:40,
  }
})