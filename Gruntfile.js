module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        stylesheet: {
        }
    });

    grunt.loadTasks('grunt-contrib-less');

    grunt.registerTask('default', ['stylesheet']);
};
