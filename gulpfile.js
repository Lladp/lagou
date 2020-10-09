//导入模块
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    html = require('gulp-html'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin')
    babel = require('gulp-babel')
   

//二、发布任务
function fnSass(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'));
}
//copy html
function fnCopy(){
    return gulp.src('./src/html/*')
    .pipe(gulp.dest('./dist/html'));
}

//copy js
function fnJs(){
    return gulp.src('./src/js/*')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/js'));
}

//copy img
function fnImg(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
}

//监听
function fnWatch(){
    gulp.watch('./src/sass/*.scss',fnSass);
    gulp.watch('./src/html/*.html',fnCopy);
    gulp.watch('./src/img/*',fnImg);
    gulp.watch('./src/js/*',fnJs);
}

//发布任务
exports.img  = fnImg;
exports.sass = fnSass;
exports.html = fnCopy;
exports.default = fnWatch;
exports.js = fnJs;