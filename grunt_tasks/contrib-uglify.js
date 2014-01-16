module.exports = function(grunt){

  grunt.config('uglify', {
      pkg_target: {
        options: {
          banner: '/*! <%= pkg.name %> | version: <%= pkg.version %> */\n',
          sourceMap: 'dist/scripts/<%= pkg.name %>.min.map',
          sourceMappingURL: '<%= pkg.name %>.min.map',
          sourceMapPrefix: 1
        },
        files: {'dist/scripts/<%= pkg.name %>.min.js' : ['src/<%= pkg.name %>.js']}
      },

      coffee_target: {
        files: {'dist/scripts/responsive-compiled.min.js' : ['.coffee-compiled/responsive-compiled.js']}
      }
  });
};