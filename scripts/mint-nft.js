require("dotenv").config();

const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
     
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

console.log(JSON.stringify(contract.abi));

const contractAddress = "0xA093365C1CF13729979eF07CdE7fB140d62B54d3";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

//create transaction
async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(), // using the mintNFT function of the nftContract, encodeABI() method encodes the input data for the mintNFT function into ABI (Application Binary Interface) format.
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });
}
mintNFT(
  "https://gateway.pinata.cloud/ipfs/QmSeUta61JEzi3KpE33DDs6rxHqTY2Kp14xZ6EAyzU6XCZ?_gl=1*2k931h*_ga*MTAxMjY1MzIwNS4xNjc4MzYxODky*_ga_5RMPXG14TE*MTY3ODM2OTcxNi4zLjEuMTY3ODM2OTk0My40NS4wLjA."
);