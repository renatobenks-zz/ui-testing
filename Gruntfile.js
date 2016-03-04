/*global module*/
module.exports = function (grunt) {
  'use strict'; 
  var gruntConfig = {};
  grunt.loadNpmTasks('grunt-contrib-uglify');
  gruntConfig.uglify = {
      options: {
        mangle: false
      },
      my_target: {
        files:{
          'dest/minify-script.min.js':['public_html/js/script.js']
        }
      }
  };
  grunt.initConfig(gruntConfig);
  grunt.registerTask('travis', 'uglify');
};