/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import { pushLoadingScreen } from './src/navigation/navigation';


Navigation.events().registerAppLaunchedListener(pushLoadingScreen);