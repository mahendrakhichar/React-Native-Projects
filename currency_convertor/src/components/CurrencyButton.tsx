import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type currencyButtonProps = PropsWithChildren<{
    name: String;
    flag : String;
}>



export const CurrencyButton = (props: currencyButtonProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.currency}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    flag:{
        fontSize:20,
    },
    currency:{
        fontSize:20,
    },
})