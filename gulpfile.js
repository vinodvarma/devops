var gulp = require('gulp'); //npm install gulp
var browserSync = require('browser-sync'); // npm install browser-sync

gulp.task('buildServer', function(){
	browserSync.init({
		port:1212,
		server:{
			baseDir:['build']
		}
	});

	gulp.watch("build/*.*").on('change', browserSync.reload);

})