import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import Info from './Info'
import * as PropTypes from 'prop-types'
import Colors from '../constants/Colors'

export default class Piquete extends Component {

  static get propTypes() {
    return { piquete: PropTypes.object.isRequired }
  }

  _renderBull = () => {
    const { boiada } = this.props.piquete
    if (boiada) {
      return <Image style={styles.bull} source={require('../../assets/bull.png')}/>
    }

    return null
  }

  render = () => {
    const { piquete } = this.props
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{piquete.nome}</Text>
        {this._renderBull()}
        <View style={styles.body}>
          <Info title='Capacidade' text={`${piquete.capacidade}%`}/>
          <Info title='Área' text={`${piquete.area} ha`}/>
          <Text style={[styles.descricao, styles[piquete.status.label]]}>{piquete.status.descricao}</Text>
        </View>
      </View>
    )
  }
}

const width = Dimensions.get('window').width / 2.2

const styles = StyleSheet.create({
  card: {
    width,
    padding: 5,
    margin: 4,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5
  },
  cardTitle: {
    fontWeight: '500',
    fontSize: 16,
    paddingBottom: 5,
    color: '#666'
  },
  bull: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 40,
    height: 40
  },
  descricao: { fontSize: 12, textAlign: 'right', paddingTop: 5 },
  inativo: { color: '#666' },
  ok: { color: Colors.SUCCESS },
  atencao: { color: Colors.WARNING },
  perigo: { color: Colors.DANGER }
})
