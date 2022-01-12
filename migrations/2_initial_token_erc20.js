const TokenErc20 = artifacts.require("TokenErc20");

module.exports = function (deployer) {
  deployer.deploy(TokenErc20);
};
