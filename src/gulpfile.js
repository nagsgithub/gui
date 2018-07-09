'use strict';

var fs=require('fs');
var gulp=require('gulp');

var requirejs = require('requirejs');
var path=require('path');
var browserSync=require('browser-sync');
var express = require('express');


gulp.task('reload',function(){
    browserSync.reload();
});

gulp.task('watch',function(){
    gulp.watch('./modules/**/*.js',['reload']);
    gulp.watch('./modules/**/*.html',['reload']);
    gulp.watch('css/**/*.css',['reload']);
});

gulp.task('serve',['watch'],function(){
    browserSync({
        server:{
            baseDir: "./",
            index:"./modules/index.html"
        }
    });
});



