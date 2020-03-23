import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/LoginScreen';
import MainPage from './pages/MainPage';


const AppNavigator = createStackNavigator ({
  'Login': {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Bem vindo!'
      }
  },
  'Main': {
      screen: MainPage,
      navigationOptions: {
        title: 'Suas Moedas'
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