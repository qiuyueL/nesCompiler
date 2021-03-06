/* jshint node: true */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    clientJSFiles: [
      'src/compiler/**/*.ts'
    ],

    typescript: {
      // Node.js code uses commonjs modules and no sourcemap generated.
      server: {
        src: '<%= clientJSFiles %>',
        dest: 'dist',
        options: {
          module: 'commonjs',
          target: 'es5',
          rootDir: 'src',
          sourcemap: false,
          comments: true
        }
      }
    },

    // Recompile to JavaScript when a file changes.
    watch: {
      client: {
        files: '<%= clientJSFiles %>',
        tasks: ['typescript:client'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('server', ['typescript:server']);

  grunt.registerTask('default', ['server']);
};
