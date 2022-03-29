import { Platform } from 'react-native';
import { runSnapshots } from 'pixels-catcher';
import { name as appName } from './app.json';

require('./__snapshots__/VerticalLineBugScreen');

const baseUrl = Platform.select({
  android: 'http://10.0.2.2:3001',
  ios: 'http://127.0.0.1:3000',
});

runSnapshots(appName, { baseUrl });
