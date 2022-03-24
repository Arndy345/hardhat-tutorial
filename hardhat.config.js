require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY_URL =
	process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY =
	process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
	solidity: "0.8.4",
	networks: {
		rinkeby: {
			url: "https://eth-rinkeby.alchemyapi.io/v2/RsKzcV7jVXHZc5_PU-GeQ-3P3tUZQ_Se",
			accounts: [
				"e7910327416abbaab487373c685e5e2d1692e9619437b78a33b63963d2e6f623",
			],
		},
	},
};
