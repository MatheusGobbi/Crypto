import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/LoginScreen';
import MainPage from './pages/MainPage';
import MoedaDetailPage from './pages/MoedaDetailPage';


const AppNavigator = createStackNavigator ({
  'Main': {
    screen: MainPage,
    navigationOptions: {
      title: 'Suas Moedas'
    }
},
  'Login': {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Bem vindo!'
      }
  },
  'MoedaDetailPage': {
      screen: MoedaDetailPage,
      navigationOptions: ({ navigation }) => {
        //navigation.state.
        return{
          title: 'Detalhes'
        }
      }
  }
 
}, {
  defaultNavigationOptions: {
    title: "Series",
    headerTintColor: "#fff",
    headerStyle: {
        backgroundColor: "#000",
        borderBottomWidth: 1,
        borderBottomColor: "#C5C5C5",
    },
    headerTitleStyle: {
        color: "#fff",
        fontSize: 30
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;