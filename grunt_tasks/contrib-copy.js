module.exports = function(grunt){

  grunt.config('copy', {
      jsFilesDist: {
        files: [
          {expand: true, flatten: true, src: ['src/*.js'], dest: 'dist/scripts', filter: 'isFile'}
        ]
      },
      
      jsFilesDev: {
        files: [
          {expand: true, flatten: true, src: ['src/*.js'], dest: '.serve/scripts', filter: 'isFile'}
        ]
      },

      htmlFiles: {
        files: [
          {expand: true, flatten: true, src: ['src/index.html'], dest: '.serve'}
        ]
      }
  });
};