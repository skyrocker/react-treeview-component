var gulp = require('gulp'),
	concat = require('gulp-concat'),
	react = require('gulp-react');

var files = [
	'./src/Tree/intro.js',
	'./src/Tree/Treenode.js',
	'./src/Tree/Treeview.js',
	'./src/Tree/outro.js'
];
 
gulp.task('jsx', function () {
    return gulp.src('./src/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./src/'));
});

gulp.task('concat', ['jsx'], function () {
	var intro = gulp.src(files)
	.pipe(concat('react-tree.js'));
	return intro.pipe(gulp.dest('./build/'));
});