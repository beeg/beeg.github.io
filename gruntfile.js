/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        watch: {
          css: {
            files: ['doctoralia_talent/**/*.scss'],
            tasks: ['clean:css', 'sass', 'cssmin'],
            options: {
              spawn: false
            }
          },
          js: {
            files: ['doctoralia_talent/**/*.js'],
            tasks: ['clean:js', 'concat:js', 'uglify:js'],
            options: {
              spawn: false
            }
          }
        },
        cssmin: {
				  target: {
				    files: [{
				      expand: true,
				      cwd: 'dist',
				      src: ['*.css', '!*.min.css'],
				      dest: 'dist',
				      ext: '.min.css'
				    }]
				  }
				},
        clean: {
          css: ['dist/*.css', 'dist/*.min.css', 'dist/*.css.map'],
          js: ['dist/doctoralia.js', 'dist/doctoralia.min.js', 'dist/doctoralia.js.map'],
          styleguide: ['dist/doctoralia_styleguide.js', 'dist/doctoralia_styleguide.min.js', 'dist/doctoralia_styleguide.js.map']
        },
        sass: {
          dist: {
          	files: 	{
          		'dist/doctoralia.css': 'dist/doctoralia.scss'
          	}
          }
        },
        uglify: {
          options: {
            mangle: false
          },
          js: {
           	options: {
			        sourceMap: true,
			        sourceMapName: 'dist/doctoralia.min.js.map'
			      },
            files: {'dist/doctoralia.min.js': ['dist/doctoralia.js']}
          }
        },
        concat: {
            js: {
              src: ['doctoralia_talent/**/*.js'],
              dest: 'dist/doctoralia.js',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');


    // Compile css
    grunt.registerTask('dralia_compile_css', 'clean, sass and cssmin', function(){
       grunt.task.run('clean:css', 'sass', 'cssmin');
    });
    grunt.registerTask('dralia_compile_js', 'clean, sass and cssmin', function(){
       grunt.task.run('clean:js', 'concat', 'uglify');
    });


};
