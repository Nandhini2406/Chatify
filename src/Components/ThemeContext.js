import React, {createContext, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useColorScheme} from 'react-native';


export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const theme = {
//     isDarkMode,
//     colors: {
//       backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//       text: isDarkMode ? Colors.white : Colors.black,
//     },
//   };

const isDarkMode = useColorScheme() === 'dark';

  const theme = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    text: isDarkMode ? Colors.white : Colors.black,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
