const Migrations = artifacts.require("Migrations");

export default function truffleConfig(deployer: Truffle.Deployer) {
  deployer.deploy(Migrations);
};
