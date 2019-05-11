import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Info from '../../components/Info'
import Colors from '../../constants/Colors'
import ActionButton from 'react-native-action-button'
import { Ionicons } from '@expo/vector-icons'

const piquete = {
  id: 1,
  nome: 'Piquete 01',
  area: 10,
  pastagem: 'Marandu (Brachiarão)',
  capacidadeMaxima: 100,
  utilizado: 0,
  tempoDescanso: 32,
  tempoPastagem: 3,
  status: { label: 'ok', descricao: 'Vago' }
}

export default class ShowPiquete extends Component {

  state = { piquete: { ...piquete } }


  render = () => {
    const { piquete } = this.state
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{piquete.nome} <Text
          style={[styles.descricao, styles[piquete.status.label]]}>{piquete.status.descricao}</Text></Text>
        <View style={styles.body}>
          <View style={styles.divider}>
            <Info title='Área' text={`${piquete.area} ha`}/>
            <Info title='Pastagem' text={piquete.pastagem}/>
          </View>
          <View style={styles.divider}>
            <Info title='Capacidade máxima' text={`${piquete.capacidadeMaxima} cabeças`}/>
            <Info title='Utilizado'
                  text={`${piquete.utilizado || 'Nenhuma'} ${piquete.utilizado > 1 ? ' cabeças' : ' cabeça'}`}/>
          </View>
          <View style={styles.divider}>
            <Info title='Tempo de descanso' text={`${piquete.tempoDescanso} dias`}/>
            <Info title='Tempo de pastagem' text={`${piquete.tempoPastagem} dias`}/>
          </View>
        </View>
        <ActionButton buttonColor={Colors.PRIMARY} degrees={90}
                      renderIcon={() => <Ionicons color='#fff' size={26} name='ios-more'/>}>
          <ActionButton.Item size={40} buttonColor={Colors.PRIMARY} title="Adicionar boiada"
                             onPress={() => navigate('Pasto')}>
            <Ionicons name="ios-add" color='#fff' size={24}/>
          </ActionButton.Item>
          <ActionButton.Item size={40} buttonColor={Colors.PRIMARY} title="Editar "
                             onPress={() => console.log('notes tapped!')}>
            <Ionicons name="ios-cog" color='#fff' size={24}/>
          </ActionButton.Item>
        </ActionButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  divider: { paddingTop: 10 },
  body: { paddingTop: 10 },
  title: { color: Colors.PRIMARY, fontSize: 20 },
  descricao: { fontSize: 12, textAlign: 'right', paddingTop: 5 },
  inativo: { color: '#666' },
  ok: { color: Colors.SUCCESS },
  atencao: { color: Colors.WARNING },
  perigo: { color: Colors.DANGER }
})
