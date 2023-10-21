import { createStackNavigator } from '@react-navigation/stack';
import Register from './Components/Register1';
import Register2 from './Components/Register2';
import Home from './Components/Home';
import Register3 from './Components/Register3';
import Login from './Components/Login';
import Mainpage from './Components/Mainpage';
import MyProfile from './Components/MyProfile';
import Project from './Components/Project';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="home"> 
      <Stack.Screen name="home" options={{ headerShown: false }} component={Home} />
      <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="mainpage" options={{ headerShown: false }} component={Mainpage} />
      <Stack.Screen name="profile" options={{ headerShown: false }} component={MyProfile} />
      <Stack.Screen name="project" options={{ headerShown: false }} component={Project} />
      <Stack.Screen name="register1" options={{ headerShown: false }} component={Register} />
      <Stack.Screen name="register2"  options={{ headerShown: false }} component={Register2} />
      <Stack.Screen name="register3"  options={{ headerShown: false }} component={Register3} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
