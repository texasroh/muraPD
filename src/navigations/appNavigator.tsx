import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';

export type AppStackParamList = {
  Login: undefined;
};

export const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Login" component={LoginScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
