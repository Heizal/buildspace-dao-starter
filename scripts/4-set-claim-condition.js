import sdk from "./1-initialize-sdk.js";

// got our bundle drop module from the smart contract
const bundleDrop = sdk.getBundleDropModule(
  "0x537f273655bf7A41625263aeC89D067Ca71ff523",
);


// setup our claim condition
(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(), //users can start minting NFTs immediately
      maxQuantity: 50_000, //this is the max # of NFTs that can be minted
      maxQuantityPerTransaction: 1, //a user can only claim one NFT per transaction
    });
    
    
    await bundleDrop.setClaimCondition(0, claimConditionFactory); // this will interact with our deployed contract on-chain. We pass 0 coz our membership NFT has a tokenId of 0 since its the first token in our ERC-1155 contract. Many people can mint one NFT, beauty of ERC-1155
    console.log("✅ Sucessfully set claim condition on bundle drop:", bundleDrop.address);
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})()