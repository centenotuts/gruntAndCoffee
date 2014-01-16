module.exports = function(grunt){

  grunt.config('coffee', {
      compile: {
        files: {
          '.coffee-compiled/responsive-compiled.js' : 'src/coffee/*.coffee'
        }
      }
  });
};