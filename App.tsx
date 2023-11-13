import { NavigationContainer } from '@react-navigation/native';
import Root from './Src/Navigation/Root';
import { AppProvider } from './Src/Context/Context';
export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Root />
      </AppProvider>
    </NavigationContainer>

  );
}
