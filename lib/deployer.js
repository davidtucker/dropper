// A base prototype for deployment functionality.
function Deployer() {
}

Deployer._deployers = [];

// Register a deployer.
Deployer.register = function(name, deployer) {
  Deployer._deployers[name] = deployer;
};

// Get a registered deployer.
Deployer.get = function(name) {
  var DeployerClass = Deployer._deployers[name];

  if (DeployerClass == undefined) {
    throw new Error('Deployer "' + name + '" not found!');
  } else {
    return new DeployerClass();
  }
};

// Validate command line options.
Deployer.prototype.validateOptions = function(options) {
  // Do validation here!
};

// Perform the deployment.
Deployer.prototype.deploy = function(options, callback) {
  throw new Error('Not implemented!');
};

exports = module.exports = Deployer;

// Register deployers.
require('./deployer/dummy');
