import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Piquete from '../components/Piquete'

const list = [
  {
    id: 1,
    nome: 'Piquete 01',
    status: { label: 'ok', descricao: 'Vago' },
    area: 10,
    boiada: false,
    capacidade: 95
  },
  {
    id: 2,
    nome: 'Piquete 02',
    status: { label: 'atencao', descricao: 'Efetuar rodízio em 5 dias' },
    boiada: true,
    area: 15,
    capacidade: 90
  },
  {
    id: 3,
    nome: 'Piquete 03',
    status: { label: 'perigo', descricao: 'Prazo para rodízio expirou' },
    boiada: true,
    area: 15,
    capacidade: 95
  }
]

export default class Home extends Component {

  _renderItem = ({ item }) => <Piquete piquete={item}/>

  render = () => {
    return (
      <FlatList numColumns={2} style={styles.list} data={list} keyExtractor={i => String(i.id)}
                renderItem={this._renderItem}/>
    )
  }
}

const styles = StyleSheet.create({
  list: { padding: 10 }
})
