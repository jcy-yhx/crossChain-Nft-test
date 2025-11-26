This repository contains an experimental cross-chain NFT project built with Hardhat.
The project implements two cross-chain mechanisms using Chainlink CCIP: **Burn-and-Mint** and **Lock-and-Release**.

### Features

* **ERC-721 NFT (MyToken.sol)**
  Basic NFT contract used as the original asset on the source chain.

* **Wrapped NFT (WrappedMyToken.sol)**
  A wrapped version of the NFT deployed on destination chains for the Lock-and-Release model.

* **Cross-Chain Pool Contracts**

  * **NftPoolBurnAndMint.sol** — Burns NFTs on the source chain and mints them on the destination chain.
  * **NftPoolLockAndRelease.sol** — Locks NFTs on the source chain and releases wrapped NFTs on the destination chain.

* **Powered by Chainlink CCIP**
  Handles secure cross-chain messaging and token data transfer.

### Goal

To build a fully functional cross-chain NFT bridge prototype, allowing NFTs to move seamlessly between multiple blockchain networks using CCIP.

### Status

Smart contracts and deployment scripts (Hardhat) are implemented.
Front-end and test automation will be added next.

### Tech Stack

* Solidity
* Hardhat
* Chainlink CCIP
* Ethereum-compatible test networks

### Repository Name

`crossChain-Nft-test`





# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
