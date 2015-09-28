module.exports = function(grunt) {
	grunt.initConfig({
		compress : {
			zip : {
				options : {
					archive : 'dist/address_move_button.zip'
				},
				files : [{expand:true, src:'**', cwd:'src'}]
			}
		},
		rename: {
			xpi: {
				files: [{
					src: ['dist/address_move_button.zip'],
					dest: 'dist/address_move_button-0.2.xpi'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-rename');

	grunt.registerTask('default', ['compress', 'rename']);
};
