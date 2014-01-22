module.exports = function(grunt){

  grunt.config('connect', {
      serve: {
        options: {
          port: 35729,
          base:'.serve'
        }
      }
  });

};