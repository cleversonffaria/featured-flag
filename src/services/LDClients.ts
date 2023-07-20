import LDClient, * as ld from "launchdarkly-react-native-client-sdk";

export const client = new LDClient();

export const init = async () => {
  try {
    let config: ld.LDConfig = {
      mobileKey: "",
    };

    let context: ld.LDContext = {
      kind: "user",
    };

    await client.configure(config, context);
  } catch (err) {
    console.log("Ocorreu um erro na inicialização do launchdarkly", err);
  }
};
