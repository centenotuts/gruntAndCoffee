module.exports = function(grunt){

  grunt.config('concurrent', {
      watch: {
        tasks: ['watch', 'compass:dev'],
        options: {
          logConcurrentOutput: true
        }
      }
  });
};