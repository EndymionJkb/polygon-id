const { KYCAgeCredential } = require("./vcHelpers/KYCAgeCredential");

// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/

const humanReadableAuthReason = "Must be born before this year";

const credentialSubject = {
  // documentType = weighted sum of L1 carbon credits, shared with L2 through Hyperlane
  // We want to have greater than 10 credits (100 = 10.0)
  // The sample account has 42.2, so should pass.
  documentType: {
    $gt: 100,
  },
};
};

const proofRequest = KYCAgeCredential(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
