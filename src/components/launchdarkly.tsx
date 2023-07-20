import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { useLDFlags } from "../hook/useLDFlags";

export const Launchdarkly = () => {
  const { flowInvestments: IS_APP_FLOW_INVESTMENTS } = useLDFlags();

  if (!IS_APP_FLOW_INVESTMENTS) return null;

  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/launchdarkly.png")}
        style={{ width: "100%", borderRadius: 20 }}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  card: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#33333330",
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
});
