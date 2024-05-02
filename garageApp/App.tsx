/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Appearance,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import {setTheme, appState} from './store/counterSlice';
import {LandingPage} from './pages/landing';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginManager} from './pages/loginManager';
import {HomePage} from './pages/homePage';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {appStylesConst, globalStyles} from './appStyles/styleConsts';
import {MapPage} from './pages/mapPage';
import {AddItem} from './pages/addItemPage';
const Tab = createBottomTabNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export function App(): React.JSX.Element {
  const appStateInfo = useSelector(appState);
  const dispatch = useDispatch();
  const colorScheme = Appearance.getColorScheme();

  const backgroundStyle = {
    backgroundColor: appStateInfo?.isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      {appStateInfo.setLoggedIn ? (
        <>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {display: 'none'},
            }}>
            <Tab.Screen
              name="Home"
              options={{title: 'Home'}}
              component={LandingPage}
            />
            <Tab.Screen
              name="Login"
              options={{title: 'Login'}}
              component={LoginManager}
            />
          </Tab.Navigator>
        </>
      ) : (
        <>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: appStylesConst.primary,
              tabBarInactiveTintColor: 'black',
              tabBarStyle: {
                backgroundColor: appStylesConst.primaryLight,
              },
            }}>
            <Tab.Screen
              name="HomePage"
              options={{
                title: 'Home',
                tabBarIcon: ({color, size, focused}) => (
                  <MaterialIcon
                    name={focused ? 'home' : 'home-outline'}
                    color={appStylesConst.primary}
                    size={focused ? 30 : 25}
                  />
                ),
              }}
              component={HomePage}
            />
            <Tab.Screen
              name="MapPage"
              options={{
                title: 'Map',
                tabBarIcon: ({color, size, focused}) => (
                  <Icon
                    name={focused ? 'map' : 'map-o'}
                    color={appStylesConst.primary}
                    size={focused ? 30 : 18}
                  />
                ),
              }}
              component={MapPage}
            />
            <Tab.Screen
              name="SavedPage"
              options={{
                title: 'Add Item',
                headerShown: true,
                tabBarIcon: ({color, size, focused}) => (
                  <Icon
                    name={focused ? 'plus' : 'plus'}
                    color={appStylesConst.primary}
                    size={focused ? 30 : 18}
                  />
                ),
              }}
              component={AddItem}
            />
            <Tab.Screen
              name="ProfilePage"
              options={{
                title: 'Profile',
                tabBarIcon: ({color, size, focused}) => (
                  <Icon
                    name={focused ? 'user' : 'user-o'}
                    color={appStylesConst.primary}
                    size={focused ? 30 : 18}
                  />
                ),
              }}
              component={HomePage}
            />
          </Tab.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
