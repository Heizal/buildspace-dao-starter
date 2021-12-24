import sdk from "./1-initialize-sdk.js";

// Grab the app module address.
const appModule = sdk.getAppModule(
  "0x9aCB5b40319952956953e56C93df397142d4eD43",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({ //we're using deploytovote to set up and contract a new voting contract
      // Give your governance contract a name.
      name: "OneDirectionDAO's Epic Proposals",

      // This is the location of our governance token, our ERC-20 contract! so people can only vote with DIRECTIONER
      votingTokenAddress: "0x522B72Eb23FE904165286885B3515227a1f193e2",

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      // Will explain more below.
      votingQuorumFraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();