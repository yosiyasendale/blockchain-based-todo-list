const TOdoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TOdoList);
};
