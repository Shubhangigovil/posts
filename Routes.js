import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import Comments from './Comments';

const Stack = createStackNavigator();

export default function Router({navigation}) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="App">
                <Stack.Screen name="App" component={App} options={{ headerShown: false }} />
                <Stack.Screen name="Comments" component={Comments} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}