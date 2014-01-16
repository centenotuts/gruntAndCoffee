module.exports = function(grunt){

  grunt.config('jshint', {
      srcFiles: {
        files: {
          src: ['src/**/*.js']
        },
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
      },
      testFiles: {
        files: {
          src: ['test/**/*.js']
        },
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
      }
  });
};