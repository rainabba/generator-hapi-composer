'use strict';

var path = require('path');
var fs = require('fs');

var configKeys = ['githubUsername', 'authorName', 'authorEmail', 'authorUrl'];

var _defaultDependencies = [
  {name: 'joi', description: 'Object schema validation'},
  {name: 'lout', description: 'API documentation generator'},
  {name: 'hoek', description: 'General purpose node utilities'}
];

/**
 * The Generator settings
 * This is used to store the generator's meta- and dependencies information in a persistent data source.
 * @constructor
 */
var Config = module.exports = function Config(configPath) {
  this._meta = {};
  this._dependencies = [];
  this._configPath = configPath || path.join(__dirname, './settings.json');

  this._load();
};

/**
 * Loads the meta and dependencies data from the settings file
 */
Config.prototype._load = function _load() {
  if (fs.existsSync(this._configPath)) {
    var content = fs.readFileSync(this._configPath);
    content = JSON.parse(content);
    this._meta = content.meta;
    this._dependencies = content.dependencies;
  } else {
    this._dependencies = _defaultDependencies;
  }
};

/**
 * Store the meta and dependencies data in the settings file
 */
Config.prototype._write = function _write() {
  var content = {
    meta: this._meta,
    dependencies: this._dependencies,
  };
  content = JSON.stringify(content, '', 2);
  fs.writeFileSync(this._configPath, content);
};

/**
 * Get the stored generators dependencies
 * @return {Object} Generators dependencies
 */
Config.prototype.getDependencies = function getDependencies() {
  return this._dependencies;
};

/**
 * Get the stored generators meta data
 * @return {Object} Generators metadata
 */
Config.prototype.getMeta = function getMeta() {
  return this._meta;
};

/**
 * Store the given metadata in the settings file
 * @return {Object} Generators metadata
 */
Config.prototype.setMeta = function storeMeta(options) {
  configKeys.forEach(function (val) {
    if (options[val] && options[val].trim()) {
      this._meta[val] = options[val];
    }
  }.bind(this));
  this._write();
};
