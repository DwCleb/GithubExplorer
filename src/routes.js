import { StackNavigator, TabNavigation } from 'react-navigation';

import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations'; 

const Routes = StackNavigator({
  welcome: { screen: Welcome },
  User: {
    screen: TabNavigation({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations },
    }),
  },
}, {
  initialRouteName: 'Welcome',
});

export default Routes;
