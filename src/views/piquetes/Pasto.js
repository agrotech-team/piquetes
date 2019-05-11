import React, { Component } from 'react'
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const list = [
  {
    id: 1,
    nome: 'Marandu (Brachiarão)',
    tempoDescanso: 32,
    tempoPastagem: 3
  }
]

export default class Pasto extends Component {

  state = { list: [...list] }

  _renderItem = ({ item }) => {
    const { navigate } = this.props.navigation
    return (
      <TouchableOpacity style={styles.item} onPress={() => navigate('Boiada', { pasto: item })}>
        <Text style={styles.itemText}>{item.nome}</Text>
        <Ionicons name='ios-arrow-forward' color="#666" size={28}/>
      </TouchableOpacity>
    )
  }


  render = () => {
    const { list } = this.state
    return (
      <FlatList style={styles.list} keyExtractor={item => String(item.id)} data={list} renderItem={this._renderItem}/>
    )
  }
}

const styles = StyleSheet.create({
  list: { padding: 10 },
  item: { padding: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  itemText: { color: '#666', fontSize: 16 }
})
