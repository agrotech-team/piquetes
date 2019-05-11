import React from 'react'
import MainNavigator from './src/navigators/MainNavigator'
import { StatusBar } from 'react-native'

StatusBar.setBarStyle('dark-content', true)
export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    )
  }
}
