module.exports = function(grunt){

  grunt.config('connect', {
      serve: {
        options: {
          port: '<%= pkg.localServerPort %>',
          base:'.serve'
        }
      }
  });

};