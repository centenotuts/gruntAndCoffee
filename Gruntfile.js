module.exports = function(grunt){
	
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
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
		},

		copy: {
			jsFiles: {
				files: [
					{expand: true, flatten: true, src: ['src/*'], dest: 'dist/scripts', filter: 'isFile'}
				]
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

		jasmine: {
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
		},

		jshint: {
		  srcFiles: {
		  	files: {
		  		src: ['src/**/*.js']
		  	},
			  options: {
			    globals: {
			      jQuery: true,
			      console: true,
			      module: true
			    }
			  }
		  },
		  testFiles: {
		  	files: {
		  		src: ['test/**/*.js']
		  	},
			  options: {
			    globals: {
			      jQuery: true,
			      console: true,
			      module: true
			    }
			  }
		  }
		},

		coffeelint: {
			app: ['src/coffee/*.coffee']
		},

		coffee: {
			compile: {
				files: {
					'.coffee-compiled/responsive-compiled.js' : 'src/coffee/*.coffee'
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
		        files: ['src/<%= pkg.name %>.js', 'test/demo/*.spec.js'],
		        tasks: ['jshint', 'jasmine:demoTest']
		    },
		    coffee: {
		    	files: ['src/coffee/*.coffee', 'test/responsive/*.spec.js'],
		    	tasks: ['coffeelint', 'coffee', 'jshint:testFiles', 'jasmine:responsiveTest']
		    }
		}
	});

	grunt.registerTask('default', ['concurrent:watch']);
	grunt.registerTask('build', ['compass:build', 'test', 'uglify', 'copy']);
	grunt.registerTask('test', ['jshint', 'coffeelint', 'coffee', 'jasmine']);
};