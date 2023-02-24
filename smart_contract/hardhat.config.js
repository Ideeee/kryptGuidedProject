// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };

// Https key 
// https://eth-goerli.g.alchemy.com/v2/3kTI15R8qcanPLMnqfGQ1tvo8parENJ_

require('@nomiclabs/hardhat-waffle');


module.exports = {
    solidity: "0.8.17",
    networks: {
      goerli: {
        url: 'https://eth-goerli.g.alchemy.com/v2/3kTI15R8qcanPLMnqfGQ1tvo8parENJ_',
        accounts: [ "48b0886c611e815bf3b0a3f80ad307616af20468f2e9f54cdbdb21bead790fc7" ]
      }
    }
  };