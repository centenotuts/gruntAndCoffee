module.exports = function(grunt){

  grunt.config('watch', {
      js: {
        files: ['src/<%= pkg.name %>.js', 'test/demo/*.spec.js'],
        tasks: ['jshint', 'jasmine:demoTest', 'copy:jsFilesDev']
      },
      coffee: {
        files: ['src/coffee/*.coffee', 'test/responsive/*.spec.js'],
        tasks: ['coffeelint', 'coffee', 'jshint:testFiles', 'jasmine:responsiveTest']
      },
      html: {
        files: ['src/index.html'],
        tasks: ['copy:htmlFiles']
      }
  });
};