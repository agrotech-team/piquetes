import { createStackNavigator, createAppContainer } from 'react-navigation'

// Views
import Home from '../views/Home'
import Colors from '../constants/Colors'

const mainNavigator = createStackNavigator({
  Home: { screen: Home, navigationOptions: { title: 'Home' } }
}, {
  headerMode: 'float',
  mode: 'card',
  defaultNavigationOptions: ({ navigation }) => ({
    gesturesEnabled: true,
    headerStyle: {
      backgroundColor: '#fff',
      shadowRadius: 0,
      shadowColor: 'transparent',
      elevation: 0,
      shadowOffset: { height: 0 },
      borderBottomWidth: 1,
      borderBottomColor: '#eee'
    },
    headerTintColor: Colors.PRIMARY
  })
})

export default createAppContainer(mainNavigator)
