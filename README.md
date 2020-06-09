# Decentralized Real Estate Marketplace

A decentralized house listing service to prevent title issues that could be mitigated by blockchain technology.



## Versions

      truffle: Truffle v5.1.13 
      truffle-compiler: 0.5.5+commit.c8a2cb62.Emscripten.clang


## Contracts

### SolnSquareVerifier.sol

<b>Note</b>: SolnSquareVerifier inherits all other contracts except verifier.sol

Completed contract that inherits the ERC721 token backed through zkSnarks that enhances privacy and scalability.

### Verifier.sol

Implements Succinct Zero-knowledge proofs (zkSnarks).

### Contract ABI
Can be found on eth-contracts/build/contracts folder on github cloned repository

---

## Quick Start Deploying to Ganache and Testing

1. cd into project repro & install modules

        cd RealEstateMarketplace

        npm install

2. Compile Contracts

        truffle compile

1. Start ganache (CLI or GUI)

        ganache-cli

2. Mirgrate locally

        truffle migrate --network development --reset

#### Testing contracts

Testing ERC721

File: TestERC721Mintable.js

Test minting functionality of tokens and transfer of tokens.

    truffle test ./test/TestERC721Mintable.js

Test zkSnarks

File: TestSquareVerifier.js

Verifies zkSnarks is successfully implemented.

    truffle test ./test/TestSquareVerifier.js

Testing ERC721 token with zkSnarks

File: TestSolnSquareVerifier.js

Test minting with zkSnarks.

    truffle test ./test/TestSolnSquareVerifier.js

---

## Quick Start Deploying to Rinkeby

1. Make a new project with Infura

    Infura: https://infura.io

2. Setup truffle-config

    2.1 set infuraKey 

    2.2 set mnemonic from metamask within HDWalletProvider

    2.3 set rinkeby endpoint within HDWalletProvider 

3. Migrate to rinkeby

        truffle migrate --reset --network rinkeby

4. Finding ER721 token on ether-scan

  https://rinkeby.etherscan.io/address/0xF09Cb082CAf0BF830792E7D2D2b3319868363E49

5. Minting tokens

  https://www.myetherwallet.com

6. Finding tokes on rinkeby OpenSea

  https://rinkeby.opensea.io/assets/0xf09cb082caf0bf830792e7d2d2b3319868363e49/1


## Results
```
> Compiled successfully using:
   - solc: 0.5.5+commit.47a71e8f.Emscripten.clang



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        6637074
   > block timestamp:     1591711585
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             3.0929784745
   > gas used:            208305
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.00041661 ETH

   -------------------------------------
   > Total cost:          0.00041661 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > block number:        6637076
   > block timestamp:     1591711601
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             3.0908649125
   > gas used:            1029418
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.002058836 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        6637077
   > block timestamp:     1591711674
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             3.0842913405
   > gas used:            3286786
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.006573572 ETH

   -------------------------------------
   > Total cost:         0.008632408 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.009049018 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x6c3f36f01a5cf5d6fd6e9fcc2b15fd57b7bcab9fffdd17e5c937140315c70512
   > Blocks: 1            Seconds: 21
   > contract address:    0xcDbd5879eB0610B477F986fB9AC9ACEC85D97815
   > block number:        6637085
   > block timestamp:     1591711745
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             3.0889289845
   > gas used:            223305
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0044661 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0044661 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xd98d5b4a85c805c4411fe99a2641c4fec471018569d453250fec2a3bd78ada1c
   > Blocks: 1            Seconds: 18
   > contract address:    0x1f9667c1B651e1F40c21Ba53Cda4F5C42606eEb2
   > block number:        6637088
   > block timestamp:     1591711790
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             3.0674933645
   > gas used:            1029418
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02058836 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x66a04d0658d3759c2a457392a4f3c67ece7ac215020c2aad10d1bf4b5b1036d0
   > Blocks: 0            Seconds: 13
   > contract address:    0xF09Cb082CAf0BF830792E7D2D2b3319868363E49
   > block number:        6637090
   > block timestamp:     1591711820
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             2.9984576445
   > gas used:            3451786
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.06903572 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.08962408 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.09409018 ETH

```

## assets

  https://rinkeby.opensea.io/assets/0xf09cb082caf0bf830792e7d2d2b3319868363e49/1
  https://rinkeby.opensea.io/assets/0xf09cb082caf0bf830792e7d2d2b3319868363e49/2
  https://rinkeby.opensea.io/assets/0xf09cb082caf0bf830792e7d2d2b3319868363e49/3
  https://rinkeby.opensea.io/assets/0xf09cb082caf0bf830792e7d2d2b3319868363e49/4
  https://rinkeby.opensea.io/assets/0xf09cb082caf0bf830792e7d2d2b3319868363e49/5
  https://rinkeby.opensea.io/assets/0xf09cb082caf0bf830792e7d2d2b3319868363e49/6
  https://rinkeby.opensea.io/assets/0xf09cb082caf0bf830792e7d2d2b3319868363e49/7
  https://rinkeby.opensea.io/assets/0xf09cb082caf0bf830792e7d2d2b3319868363e49/8
  https://rinkeby.opensea.io/assets/0xf09cb082caf0bf830792e7d2d2b3319868363e49/9
  https://rinkeby.opensea.io/assets/0xf09cb082caf0bf830792e7d2d2b3319868363e49/10




## Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
