import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// accessing our bundle drope module from our ERC-1155 contract
const bundleDrop = sdk.getBundleDropModule(
  "0x537f273655bf7A41625263aeC89D067Ca71ff523",
);

//setting up our NFT here with the name, description and image
(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Harry Styles",
        description: "This NFT will give you access to OneDirectionDAO!",
        image: readFileSync("scripts/assets/harrystyles.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()