import * as fcl from "@onflow/fcl";

fcl.config({
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // Endpoint set to Testnet
})

fcl.authenticate()