var path = require('path');

function ProjectConfig() {
  this.PROJECT_ROOT = process.env.PWD;

  this.SRC_DIR = this.PROJECT_ROOT + '/src';
  this.SRC_CSS_DIR = this.SCR_DIR + '/stylesheets';
  this.SRC_JS_DIR = this.SCR_DIR + '/js';

  this.APP_DIR = this.PROJECT_ROOT + '/app';
  this.APP_CSS_DIR = this.APP_DIR + '/stylesheets';
  this.APP_JS_DIR = this.APP_DIR + '/js';

  this.TOOLS_DIR = this.PROJECT_ROOT + '/tools';
  this.CONFIG_DIR = this.TOOLS_DIR + '/config';
  this.GULP_TASKS_DIR = this.TOOLS_DIR + '/tasks';

  this.NODE_MODULES_DIR = this.PROJECT_ROOT + '/node_modules';
  this.CSS_VENDORS = [this.NODE_MODULES_DIR + '/bootstrap/dist/css/bootstrap.min.css'];
  this.JS_VENDORS = [
    this.NODE_MODULES_DIR + '/angular/angular.js',
    this.NODE_MODULES_DIR + '/angular-animate/angular-animate.js',
    this.NODE_MODULES_DIR + '/angular-aria/angular-aria.js',
    this.NODE_MODULES_DIR + '/angular-sanitize/angular-sanitize.js',
    this.NODE_MODULES_DIR + '/angular-ui-router/release/angular-ui-router.js',
    this.NODE_MODULES_DIR + '/angular-messages/angular-messages.js',
    this.NODE_MODULES_DIR + '/angular-ui-bootstrap/dist/ui-bootstrap.js',
  ];

  this.DIST = this.PROJECT_ROOT + '/dist';
}

module.exports = new ProjectConfig();
