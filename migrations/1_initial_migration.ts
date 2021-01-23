const Migrations = artifacts.require("Migrations");

export default function initialMigration(deployer: Truffle.Deployer) {
  deployer.deploy(Migrations);
};
