import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './src/constants'
import { CurrencyButton } from './src/components/CurrencyButton'
import Snackbar from 'react-native-snackbar'
import { TextInput } from 'react-native-paper'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: { name: string; value: number; symbol: string }) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter the value',
        backgroundColor: '#234f39',
        textColor: '#ffffff',
      })
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: 'Not a valid number',
        backgroundColor: '#d9534f',
        textColor: '#ffffff',
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.rupeesContainer}>
          <Text style={styles.rupee}>₹</Text>
          <TextInput
            mode="outlined" 
            maxLength={14}
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="number-pad"
            placeholder="Enter amount in rupees"
            style={styles.inputAmountField} // Applied missing style
            editable={true}
            focusable={true}
          />
        </View>
        {resultValue && <Text style={styles.resultTxt}>{resultValue}</Text>}
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={2}
          data={currencyByRupee}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Pressable
              style={[styles.button, targetCurrency === item.name && styles.selected]}
              onPress={() => buttonPressed(item)}
            >
              <CurrencyButton {...item} />
            </Pressable>
          )}
        />
      </View>
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 28,
    color: '#ffffff', // Changed from black to white for visibility
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#d4d411',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
})

