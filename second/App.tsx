import { SafeAreaView,ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Cards from './components/Cards'
import FancyCards from './components/FancyCards'
import Contact from './components/Contact'
import Gods from './components/Gods'

function App() : JSX.Element {
    return (
      <SafeAreaView>
        <ScrollView>
          <Cards />
          <FancyCards />
          <FancyCards />
          <Gods />
          <Contact />
        </ScrollView>
      </SafeAreaView>
    )
}

// add styles

export default App