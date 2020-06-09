// migrating the appropriate contracts
var SquareVerifier = artifacts.require("Verifier.sol");
// var TestERC721MintableComplete = artifacts.require("ERC721MintableComplete.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = async function(deployer) {
  await deployer.deploy(SquareVerifier);
  // await deployer.deploy(TestERC721MintableComplete,"Div_ERC721MintableToken", "DIV_EC_721");
  await deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "Div_ERC721_MintableToken", "DIV_EC_721");

};
