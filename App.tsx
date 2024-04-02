/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';

function App(): React.JSX.Element {
  useEffect(() => {
    console.log(remoteConfig().getValue('test'));
    (async () => {
      await remoteConfig().setConfigSettings({
        minimumFetchIntervalMillis: 30000,
      });
      await remoteConfig().setDefaults({ tests: '' });
      await remoteConfig().fetchAndActivate();
      const configValues = remoteConfig().getAll();
      console.log('configValues:', configValues);
      // const config = {};
      // for (const [key, entry] of Object.entries(configValues)) {
      // 	let value = entry.asString();
      // 	if (numberRegex.test(value)) value = entry.asNumber();
      // 	if (booleanRegex.test(value)) value = entry.asBoolean();
      // 	config[key] = value;
      // }
    })();
  }, []);
  return <View></View>;
}

export default App;
