module.exports = function(grunt){

  grunt.config('watch', {
      js: {
        files: ['src/<%= pkg.name %>.js', 'test/demo/*.spec.js'],
        tasks: ['jshint', 'jasmine:demoTest']
      },
      coffee: {
        files: ['src/coffee/*.coffee', 'test/responsive/*.spec.js'],
        tasks: ['coffeelint', 'coffee', 'jshint:testFiles', 'jasmine:responsiveTest']
      }
  });
};