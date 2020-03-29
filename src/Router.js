import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import LoginPage from './pages/LoginPage';
import FavoritosPage from './pages/FavoritosPage';
import TopListPage from './pages/TopListPage';
import MoedaDetailPage from './pages/MoedaDetailPage';



const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
      navigationOptions: {
        title: 'Bem vindo!',
        headerVisible: true
      },

    },
    Crypto: createMaterialTopTabNavigator(
      {
        MinhasMoedas: {
          screen: FavoritosPage,
          navigationOptions: {
            title: 'Suas Moedas',
            headerVisible: false
          }
        },
        TopList: {
          screen: TopListPage,
          navigationOptions: {
            title: 'TopList',
            headerVisible: false
          }

        }
      },
      {
        tabBarOptions: {
          style: {
            elevation: 0,
            backgroundColor: 'grey',
            //paddingTop: 30
          },
          indicatorStyle: {
            height: 4,
            backgroundColor: 'black'
          }
        }
      }
    ),
    'MoedaDetailPage': {
      screen: MoedaDetailPage,
      navigationOptions: ({ navigation }) => {
        //navigation.state.
        return {
          title: 'Detalhes'
        }
      }
    }

  },
  {

    /* defaultNavigationOptions: {
       //title: "",
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
     }*/
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;