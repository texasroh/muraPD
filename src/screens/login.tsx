import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {AppLayout} from '../layouts/appLayout';
import {AppStackParamList} from '../navigations/appNavigator';

type LoginScreenProps = NativeStackScreenProps<AppStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {};

  return (
    <AppLayout>
      <View>
        <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </AppLayout>
  );
};

export default LoginScreen;
