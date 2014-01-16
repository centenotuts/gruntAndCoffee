module.exports = function(grunt){

  grunt.config('copy', {
      jsFiles: {
        files: [
          {expand: true, flatten: true, src: ['src/*'], dest: 'dist/scripts', filter: 'isFile'}
        ]
      }
  });
};