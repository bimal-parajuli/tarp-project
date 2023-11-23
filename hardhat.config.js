// const fs = require('fs')
// // eslint-disable-next-line import/no-extraneous-dependencies
// require('@nomiclabs/hardhat-waffle')
// require('@nomiclabs/hardhat-etherscan')
// 
// const PRIVATE_KEY = fs.readFileSync('.secret').toString().trim()
// 
// module.exports = {
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//     matic: {
//       url:
//         // 'https://polygon-mumbai.g.alchemy.com/v2/gQqiYgK8siAdI0G4p-oaL_NmK1I8Oytf',
//         'https://polygon-mumbai.g.alchemy.com/v2/1kV4UFvfa0HUTq1RhKwZBoIJy5P7gBMk',
//       accounts: [PRIVATE_KEY],
//     },
//   },
//   solidity: '0.8.4',
// }


require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
    solidity: "0.8.17",
    networks: {
        hardhat: {
            chainId: 31337,
        },
    },
};