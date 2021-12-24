import sdk from "./1-initialize-sdk.js";
//this is going to help us create our token

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x9aCB5b40319952956953e56C93df397142d4eD43");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "OneDirectionDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "DIRECTIONER",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();