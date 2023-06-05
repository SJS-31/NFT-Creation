/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/kPoUVwDqkCEOnv0BKE1RYTN-SsSs78kw",
      accounts: ["4e8c94e1ca4284f9f47e103aec8f5a677184c35329714be2067fa744e0623761"]
    }
  },
};