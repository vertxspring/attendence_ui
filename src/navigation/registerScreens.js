import {Text} from 'react-native';
import CounterApp from '../screens/counter';
import InitializingApp from '../screens/initializing';
import LoginApp from '../screens/login';

import { Navigation } from 'react-native-navigation';
import * as screens from './screens';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import reduxStore from '../reducers/index';
export default function () {
    Navigation.registerComponent(screens.LOADING_SCREEN, () => (()=> {return <Text>ABC</Text>}));
    Navigation.registerComponent(screens.COUNTER_SCREEN, () => WrappedComponent(CounterApp));
    Navigation.registerComponent(screens.INITIALIZING_SCREEN, () => InitializingApp);
    Navigation.registerComponent(screens.LOGIN_SCREEN, () => WrappedComponent(LoginApp));
    console.info('All screens have been registered');
  }

  function WrappedComponent(Component) {
    return function inject(props) {
      const EnhancedComponent = () => (
        <Provider store={reduxStore}>
          <Component
            {...props}
          />
        </Provider>
      );
  
      return <EnhancedComponent />;
    };
  }