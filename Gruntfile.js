/*global module*/
module.exports = function (grunt) {
  'use strict'; 
    grunt.initConfig({
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files:{
            'dest/script.min.js':['public_html/js/script.js', 'public_html/js/featureScroll.js'],
          }
        }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', 'uglify');
};