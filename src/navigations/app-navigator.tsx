import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
