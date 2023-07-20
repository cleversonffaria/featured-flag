import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useConfigCatClient, useFeatureFlag, User } from "configcat-react";

export const ConfigCat = () => {
  const userValidation = new User("UUID", "cleversonffaria@gmail.com");

  const {
    value: IS_APP_FLOW_INVESTMENTS,
    loading: IS_APP_FLOW_INVESTMENTS_LOADING,
  } = useFeatureFlag("fluxo_de_investimentos", false, userValidation);

  const client = useConfigCatClient();

  useEffect(() => {
    client.forceRefreshAsync();
  }, []);

  // console.log("CARREGANDO...", IS_APP_FLOW_INVESTMENTS_LOADING);

  if (!IS_APP_FLOW_INVESTMENTS) return null;

  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/configcat.jpeg")}
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
