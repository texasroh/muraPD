import {StatusBar, useColorScheme} from 'react-native';
import styled from 'styled-components/native';
import {dark, light} from '../theme';

interface AppLayoutProps {
  children: React.ReactNode;
}

const StyledSafeArea = styled.SafeAreaView`
  background-color: ${prop => prop.theme.background.primary};
`;

export const AppLayout = ({children}: AppLayoutProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <StyledSafeArea>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          isDarkMode ? dark.background.primary : light.background.primary
        }
      />
      {children}
    </StyledSafeArea>
  );
};
