module.exports = function(grunt){

  grunt.config('compass', {
      build: {
        options: {
          config: 'config.rb',
          bundleExec: true
        }
      },
      dev: {
        options: {
          config: 'config_dev.rb',
          watch: true,
          bundleExec: true
        }
      }
  });
};
