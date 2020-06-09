var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const symbol = "ERC721MC";
    const name = "Divyansh ERC721";

    describe('Testing ERC721', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new(name,symbol,{from: account_one});
            // TODO: mint multiple tokens
            for(let i = 0; i <= 9; i++){
              await this.contract.mint(account_two,i,{from:account_one});
            }
        })

        it('should return total supply', async function () {
          let totalSupply = await this.contract.totalSupply.call();
          assert.equal(parseInt(totalSupply),10,"Incorrect count of total supply");
        })

        it('should get token balance', async function () {
          let tokenBalance = await this.contract.balanceOf.call(account_two);
          assert.equal(parseInt(tokenBalance), 10, "Incorrect token balance count");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
          let uri = await this.contract.tokenURI.call(1);
          assert.equal(uri,"https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1","Incorrect uri");
        })

        it('should transfer token from one owner to another', async function () {
          await this.contract.transferFrom(account_two, account_one, 1,{from:account_two});
          let updatedOwner = await this.contract.ownerOf.call(1);
          assert.equal(updatedOwner, account_one, "Error occured in transferring tokens");
        })

    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new(name,symbol,{from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () {
          let status=true;
          try{
            await this.contract.mint(account_two, 20, {from: account_two});
          }catch{
            status=false;
          }
          assert.equal(status, false, "Failed when minting when address is not contract owner");
        })

        it('should return contract owner', async function () {
          let contractOwner = await this.contract.currentOwner.call();
          assert.equal(contractOwner, account_one,"Incorrect contract address");
        })

    });

})
