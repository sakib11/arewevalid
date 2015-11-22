module.exports = function(grunt){

grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),

jshint: {
	src:"src/arewevalid.js",
	jshintrc:".jshintrc"
},
uglify:{
	options: {
	  mangle : true,
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
      compress:{
      	dead_code: true
      }

    },
    my_target: {
      files: {
        'dist/arewevalid.min.js': ['src/arewevalid.js']
      }
    }
},

watch: {
	files:"src/arewevalid.js",
	tasks:"jshint"
}

});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['watch']);
grunt.registerTask('build', ['uglify']);
}