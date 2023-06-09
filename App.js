import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MenuProvider } from 'react-native-popup-menu';

import HomeScreen from './src/screens/HomeScreen';
import AllEventsScreen from './src/screens/AllEventsScreen';
import MyEventsScreen from './src/screens/MyEventsScreen';
import EventDetailsScreen from './src/screens/EventDetailsScreen';
import rootReducer from './src/reducers';
import ScreenWithAppBar from './components/ScreenWithAppBar';

const store = createStore(rootReducer);
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const AllEventsStack = createStackNavigator();
const MyEventsStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={{ headerShown: false }}
        key="Home"
      >
        {() => (
          <ScreenWithAppBar>
            <HomeScreen />
          </ScreenWithAppBar>
        )}
      </HomeStack.Screen>
      <HomeStack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{ title: 'Event Details' }}
        key="EventDetails"
      />
    </HomeStack.Navigator>
  );
}

function AllEventsStackScreen() {
  return (
    <AllEventsStack.Navigator>
      <AllEventsStack.Screen
        name="All Events"
        options={{ headerShown: false }}
        key="AllEvents"
      >
        {() => (
          <ScreenWithAppBar>
            <AllEventsScreen />
          </ScreenWithAppBar>
        )}
      </AllEventsStack.Screen>
      <AllEventsStack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{ title: 'Event Details' }}
        key="EventDetails"
      />
    </AllEventsStack.Navigator>
  );
}

function MyEventsStackScreen() {
  return (
    <MyEventsStack.Navigator>
      <MyEventsStack.Screen
        name="My Events"
        options={{ headerShown: false }}
        key="MyEvents"
      >
        {() => (
          <ScreenWithAppBar>
            <MyEventsScreen />
          </ScreenWithAppBar>
        )}
      </MyEventsStack.Screen>
      <MyEventsStack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{ title: 'Event Details' }}
        key="EventDetails"
      />
    </MyEventsStack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MenuProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
          >
            <Tab.Screen
              name="HomeStack"
              component={HomeStackScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="AllEventsStack"
              component={AllEventsStackScreen}
              options={{
                tabBarLabel: 'All Events',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="calendar" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
name="MyEventsStack"
component={MyEventsStackScreen}
options={{
tabBarLabel: 'My Events',
tabBarIcon: ({ color }) => (
<MaterialCommunityIcons name="food" color={color} size={26} />
),
}}
/>
</Tab.Navigator>
</NavigationContainer>
</MenuProvider>
</Provider>
);
}