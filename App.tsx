import React, {useEffect} from 'react';
import {ScrollView, StatusBar, useColorScheme} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import navigators from './src/Routes/navigators';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
      </ScrollView>
    </>
  );
}

export default App;
