// @flow

import { Navigation } from 'react-native-navigation';
import registerScreens from './registerScreens';
import * as screens from './screens';
import {AsyncStorage} from 'react-native';
// Register all screens on launch
registerScreens();

export function pushLoadingScreen() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#039893'
      },
      title: {
        color: 'white',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white'
      },
      buttonColor: 'white',
    },
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow'
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: 'black',
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: screens.INITIALIZING_SCREEN,
            options: {
              topBar: {
                visible: false,
              },
              statusBar: {
                style: 'dark'
              }
            }
          }
        }]
      }
    }
  });

  loadRelaventScreen();

  };
  
  
  loadRelaventScreen = async () => {
    
      const jwt = await AsyncStorage.getItem('jwt');
      
      
      if (!jwt) {
        Navigation.setRoot({
          root: {
            stack: {
              children: [{
                component: {
                  name: screens.LOGIN_SCREEN,
                  options: {
                    topBar: {
                      visible: false,
                    },
                    statusBar: {
                      style: 'dark'
                    }
                  }
                }
              }]
            }
          }
        });

        return;
      }

      const role = await AsyncStorage.getItem('role');

    
  };

  