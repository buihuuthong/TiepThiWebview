/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{ uri: 'https://user.tmdtbamboo.com/' }}
    />
  );
};

export default App;
