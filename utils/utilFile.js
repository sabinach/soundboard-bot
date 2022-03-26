const fs = require('fs')
const yaml = require('js-yaml')

/**
 * Reads files in directory
 * @param {string} dirpath
 */
const readDir = (dirpath) =>
  fs.readdirSync(dirpath)

/**
 * Reads .yml file
 * @param {string} filepath
 */
const readYaml = (filepath) =>
  yaml.load(fs.readFileSync(filepath, 'utf8'))

/**
 * Writes data to .yml file
 * @param {string} filepath
 * @param {Object} data
 */
const writeYaml = (filepath, data) =>
  fs.writeFileSync(filepath, yaml.dump(data), 'utf8')

/**
 * Deletes file
 * @param {string} filepath
 */
const deleteFile = (filepath) => 
  fs.unlinkSync(filepath)

/**
 * Check if file exists at filepath
 * @param {string} filepath
 * @returns {boolean}
 */
const isExist = (filepath) => 
  fs.existsSync(filepath)

module.exports = {
  readDir,
  readYaml,
  writeYaml,
  deleteFile,
  isExist
}