module.exports = function(grunt){
	
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	});
	grunt.loadTasks('grunt_tasks');
	grunt.registerTask('default', ['concurrent:watch']);
	grunt.registerTask('build', ['compass:build', 'test', 'uglify', 'copy:jsFilesDist']);
	grunt.registerTask('test', ['jshint', 'coffeelint', 'coffee', 'jasmine']);
};