
var Verifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var proofJSON = require("./proof.json");

contract('Soln_Square_Verifier', accounts => {
    const account_one = accounts[0];
    const account_two = accounts[1];
    const symbol = "ERC721MC";
    const name = "Divyansh ERC721";

    describe('Tests for SolnSquareVerifier', function () {
        beforeEach(async function () {
          this.contractVerifier = await Verifier.new({from: account_one});
          this.SolnSquareVerifierContract = await SolnSquareVerifier.new(this.contractVerifier.address, name, symbol, {from: account_one});
        })

        it('Test if a new soln can be added for contract - SolnSquareVerifier', async function () {
          let result = await this.SolnSquareVerifierContract.addSolution(proofJSON.proof.a,proofJSON.proof.b,proofJSON.proof.c,proofJSON.inputs,{from:account_one});
          assert.equal(result.logs[0].args[1], account_one,"New soln can not be added");
        });

        it('Test if only unique solutions can be added for contract', async function () {
          await this.SolnSquareVerifierContract.addSolution(proofJSON.proof.a,proofJSON.proof.b,proofJSON.proof.c,proofJSON.inputs,{from:account_one});
          let isSolnExists = false;
          try {
              await this.SolnSquareVerifierContract.addSolution(proofJSON.proof.a,proofJSON.proof.b,proofJSON.proof.c,proofJSON.inputs,{from:account_one});
          } catch (error) {
            isSolnExists = true;
          }
          assert.equal(isSolnExists, true, "Only unique solutions can be added for contract");
        });

        it('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', async function () {          
          await this.SolnSquareVerifierContract.addSolution(proofJSON.proof.a, proofJSON.proof.b, proofJSON.proof.c, proofJSON.inputs,{from:account_one});
          await this.SolnSquareVerifierContract.mintNewNFTToken(proofJSON.inputs[0],proofJSON.inputs[1],account_two,{from:account_one});
          let balance = await this.SolnSquareVerifierContract.balanceOf(account_two);
          assert.equal(parseInt(balance), 1, "Incorrect token balance");
        });

    });
})
