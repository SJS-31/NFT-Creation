# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```


function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns(uint256)

--- address recipient- add of recipient jiske account m nft jaega

--- string memory tokenURI- hash of img on ipfs

--- onlyOwner- modifier taken from Ownable.sol from openzeppelin

npm install dotenv --save - Establishes connection betwn metamsk and alchemy

--- abi: This is an array that contains the ABI (Application Binary Interface) of the smart contract. The ABI is a JSON file that describes the functions and variables of the smart contract.

--- web3.eth module provides methods for interacting with the Ethereum blockchain, such as sending transactions, reading balances, and subscribing to events emitted by smart contracts.