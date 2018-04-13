/**
 * Generate files specific to needed images
 */

'use strict';

var mkdirp = require('mkdirp');

var imageFiles = function imageFiles() {
  this.copy('src/shared/_images/yeogurt-swirl.png', 'src/_images/yeogurt-swirl.png');
  mkdirp.sync('src/_images/icons');
  mkdirp.sync('src/_images/bgs');
};

module.exports = imageFiles;
