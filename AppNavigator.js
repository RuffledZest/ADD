import { createStackNavigator } from '@react-navigation/stack';
import Register from './Components/Register1';
import Register2 from './Components/Register2';
import Home from './Components/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="home"> 
      <Stack.Screen name="home" options={{ headerShown: false }} component={Home} />
      <Stack.Screen name="register1" options={{ headerShown: false }} component={Register} />
      <Stack.Screen name="register2" component={Register2} />
    </Stack.Navigator>
  );
};

export default AppNavigator;