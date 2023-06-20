import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderGettingReadyScreen from './screens/OrderGettingReadyScreen';
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack=createNativeStackNavigator();

const Navigation = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
            <Stack.Screen name="Cart"  options={{presentation:'modal'}} component={CartScreen}/>
            <Stack.Screen name="OrderGettingReady"  options={{presentation:'fullScreenModal'}} component={OrderGettingReadyScreen}/>
            <Stack.Screen name="Delivery"  options={{presentation:'fullScreenModal'}} component={DeliveryScreen}/>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation