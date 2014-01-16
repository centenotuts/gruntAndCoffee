module.exports = function(grunt){

  grunt.config('compass', {
      build: {
        options: {
          config: 'config.rb'
        }
      },
      dev: {
        options: {
          config: 'config.rb',
          watch: true
        }
      }
  });
};