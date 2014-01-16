module.exports = function(grunt){

  grunt.config('jasmine', {
      responsiveTest: {
        options: {
          specs: 'test/responsive/*.spec.js'
        },
        src: ['.coffee-compiled/*.js']
      },
      demoTest: {
        options: {
          specs: 'test/demo/*.spec.js'
        },
        src: ['src/demo.js']
      }
  });
};