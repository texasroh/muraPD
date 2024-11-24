import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {AppStack, AppStackParamList} from './appNavigator';

type AuthScreenProps = {
  name: keyof AppStackParamList;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
};

export const AuthScreen = (props: AuthScreenProps) => {
  return <AppStack.Screen {...props} />;
};
