import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ title, text }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}: </Text>
    <Text style={styles.text}>{text}</Text>
  </View>
)


const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  title: { fontWeight: '500', color: '#666' },
  text: { color: '#666' }
})
