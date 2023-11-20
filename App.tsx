import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeIcon, HomeIconFilled } from './src/icon/home-icon';
import { TransactionsIcon, TransactionsIconFilled } from './src/icon/transactions-icon';
import { NotificationIcon, NotificationIconFilled } from './src/icon/notification-icon';
import { AccountIcon, AccountIconFilled } from './src/icon/account-icon';
import HomeScreen from './src/screens/HomeScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import AccountScreen from './src/screens/AccountScreen';
import QRTab from './src/components/QRTab';
import QRScreen from './src/screens/QRScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {

  return (
       <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, fontWeight: '500', top: -15 },
          tabBarActiveTintColor: '#3e414c',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 80,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,
            elevation: 5,
          }
        }}>
        <Tab.Screen
          options={{
            title: 'Anasayfa',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              if (focused)
                return (
                  <>
                    <HomeIconFilled />
                  </>
                );
              return <HomeIcon />;
            },
          }}
          name="Anasayfa"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            title: 'İşlemler',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              if (focused)
                return (
                  <>
                    <TransactionsIconFilled />
                  </>
                );
              return <TransactionsIcon />;
            },
          }}
          name="İşlemler"
          component={TransactionsScreen}
        />
        <Tab.Screen
          options={{
            title: () => null,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <QRTab />
            )
          }}
          name="PlusScreen"
          component={QRScreen}
        />
        <Tab.Screen
          options={{
            title: 'Bildirimler',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              if (focused)
                return (
                  <>
                    <NotificationIconFilled />
                  </>
                );
              return <NotificationIcon />;
            },
          }}
          name="Bildirimler"
          component={NotificationScreen}
        />
        <Tab.Screen
          options={{
            title: 'Hesap',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              if (focused)
                return (
                  <>
                    <AccountIconFilled />
                  </>
                );
              return <AccountIcon />;
            },
          }}
          name="Hesap"
          component={AccountScreen}
        />
      </Tab.Navigator>
  )
};
const Stack = createNativeStackNavigator();
const NestedDrawerTab = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{ headerShown: false }} name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default NestedDrawerTab;