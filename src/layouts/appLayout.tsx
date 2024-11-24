import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({children}: AppLayoutProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};
