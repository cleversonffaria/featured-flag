import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

import {
  ConfigCatProvider,
  createConsoleLogger,
  LogLevel,
  PollingMode,
} from "configcat-react";

import { Launchdarkly } from "./src/components/launchdarkly";
import { ConfigCat } from "./src/components/configcat";
import { client } from "./src/services/LDClients";

const App = () => {
  const [accessToken, setAccessToken] = useState(false);

  const logger = createConsoleLogger(LogLevel.Info);

  return (
    <ConfigCatProvider
      sdkKey=""
      // pollingMode={PollingMode.AutoPoll}
      // options={{ logger, pollIntervalSeconds: 10 }}
      pollingMode={PollingMode.LazyLoad}
      options={{ logger }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Featured Flag</Text>
        <View style={styles.wrapperCard}>
          <Launchdarkly />
          <ConfigCat />

          <Text style={{ textAlign: "center", marginTop: 20 }}>
            {accessToken ? "Login Efetuado!" : "Login não efetuado!"}
          </Text>

          <Button
            title="Logar"
            onPress={() => {
              client.identify({
                kind: "user",
                email: "cleversonffaria@gmail.com",
              });

              setAccessToken(true);
            }}
          />
        </View>
      </View>
    </ConfigCatProvider>
  );
};

export default App;

export const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginBottom: 20,
    textShadowColor: "#33333340",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperCard: {
    gap: 10,
    minHeight: 500,
  },
});
