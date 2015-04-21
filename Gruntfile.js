module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\r\n///////////////////////////////////////\r\n'
      },
      dist: {
        src: ['public/js/sh/**/*.js'],
        dest: 'public/js/dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'public/js/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    less: {
      development: {
        files: {
          "public/css/agency.css": "public/less/agency.less"
        }
      }
    },
    watch: {
      files: ['<%= concat.dist.src %>', 'gruntfile.js', 'public/less/*.less'],
      tasks: ['concat', 'uglify', 'less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat', 'uglify', 'less']);

};