import { createStackNavigator, createAppContainer } from 'react-navigation'
import Colors from '../constants/Colors'

// Views
import Home from '../views/Home'
import Piquete from '../views/piquetes/Show'
import Pasto from '../views/piquetes/Pasto'
import Boiada from '../views/piquetes/Boiada'

const mainNavigator = createStackNavigator({
  Home: { screen: Home, navigationOptions: { title: 'Fazenda Montrevidel' } },
  Piquete: { screen: Piquete, navigationOptions: { title: 'Piquete' } },
  Pasto: { screen: Pasto, navigationOptions: { title: 'Selecione o pasto' } },
  Boiada: { screen: Boiada, navigationOptions: { title: 'Informe a boiada' } }
}, {
  mode: 'card',
  headerMode: 'float',
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
      const { index } = scene

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [layout.initWidth, 0, 0]
      })

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
        outputRange: [0, 1, 1, 0.3, 0]
      })

      return { opacity, transform: [{ translateX }] }
    }
  }),
  defaultNavigationOptions: ({ navigation }) => ({
    gesturesEnabled: true,
    headerStyle: {
      backgroundColor: Colors.PRIMARY,
      shadowRadius: 0,
      shadowColor: 'transparent',
      elevation: 0,
      shadowOffset: { height: 0 },
      borderBottomWidth: 1,
      borderBottomColor: '#eee'
    },
    headerTintColor: '#fff'
  })
})

export default createAppContainer(mainNavigator)
