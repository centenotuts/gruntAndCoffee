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

		concurrent: {
			watch: {
				tasks: ['watch', 'compass:dev'],
				options: {
					logConcurrentOutput: true
				}
			}
		},

		watch: {    
		    js: {
		        files: ['src/<%= pkg.name %>.js'],
		        tasks: ['jshint']
		    },
		    coffee: {
		    	files: ['src/coffee/*.coffee'],
		    	tasks: ['coffeelint', 'coffee']
		    }
		}
	});

	grunt.registerTask('default', ['concurrent:watch']);
	grunt.registerTask('build', ['compass:build', 'jshint', 'coffeelint', 'coffee', 'uglify']);
	grunt.registerTask('test', []);
};