import { useEffect, useState } from "react";
import { client } from "../services/LDClients";

const useLDFlags = () => {
  const [flowInvestments, setFlowInvestments] = useState(false);
  
  useEffect(() => {
    const handleInvestmentsFlag = async () => {
      const boolFlag = await client.boolVariation(
        "fluxo_de_investimentos",
        false
      );

      setFlowInvestments(boolFlag);
    };

    setTimeout(() => {
      handleInvestmentsFlag();

      // client.identify({ kind: "user", email: "cleversonffaria@gmail.com" });

      client.registerFeatureFlagListener("fluxo_de_investimentos", () => {
        handleInvestmentsFlag();
      });
    }, 100);
  }, []);

  return {
    flowInvestments,
  };
};

export { useLDFlags };
