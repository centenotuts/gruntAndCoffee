module.exports = function(grunt){
	
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			pkg_target: {
				options: {
					banner: '/*! <%= pkg.name %> | version: <%= pkg.version %> */\n'
				},
				files: {'build/scripts/<%= pkg.name %>.min.js' : ['src/<%= pkg.name %>.js']}
			},

			coffee_target: {
				files: {'build/scripts/coffee-compiled.min.js' : ['.coffee-compiled/coffee-compiled.js']}
			}
		},

		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},

		jshint: {
		  // define the files to lint
		  files: ['src/**/*.js', 'test/**/*.js'],
		  // configure JSHint (documented at http://www.jshint.com/docs/)
		  options: {
		      // more options here if you want to override JSHint defaults
		    globals: {
		      jQuery: true,
		      console: true,
		      module: true
		    }
		  }
		},

		coffeelint: {
			app: ['src/coffee/*.coffee']
		},

		coffee: {
			compile: {
				files: {
					'.coffee-compiled/coffee-compiled.js' : 'src/coffee/*.coffee'
				}
			}
		},

		watch: {    
		    js: {
		        files: ['src/<%= pkg.name %>.js'],
		        tasks: ['jshint', 'uglify:pkg_target']
		    },
		    css: {
		    	files: ['src/sass/**/*.scss'],
		    	tasks: ['buildcss']
		    },
		    coffee: {
		    	files: ['src/coffee/*.coffee'],
		    	tasks: ['buildcoffee']
		    }
		}
	});

	grunt.registerTask('default', []);
	grunt.registerTask('buildcss',  ['compass']);
	grunt.registerTask('buildcoffee', ['coffeelint', 'coffee', 'uglify:coffee_target']);
};