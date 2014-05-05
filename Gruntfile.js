module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/*.js'],
				dest: 'hakatashi.js'
			}
		},
		uglify: {
			options: {
				banner: '/* hakatashi.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'hakatashi.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		jshint: {
			files: ['src/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
