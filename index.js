import { registerRootComponent } from "expo";
import { init as InitLaunchdarkly } from "./src/services/LDClients";

import App from "./App";
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
InitLaunchdarkly();
