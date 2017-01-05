// Aqui nós carregamos o gulp e os plugins através da função `require` do nodejs
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate'); //para poder uglify o angularjs

// Definimos o diretorio dos arquivos para evitar repetição futuramente
var jsFiles = [
    "./js/paradoxx.js",
];

var lessFiles = [
    "./less/app.less",
];

//Criamos outra tarefa com o nome 'dist'
gulp.task('distJs', function() {
    gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat("paradoxx.js"))
        //removendo o mangle pra funcionar com angularjs
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./js/dist'));
});

//Criamos outra tarefa com o nome 'dist'
gulp.task('distLess', function() {
    return gulp.src(lessFiles)
        .pipe(less())
        .pipe(rename("paradoxx.css"))
        // .pipe(cssmin().on('error', function(err) {
        //     console.log(err);
        // }))
        .pipe(gulp.dest('./css'));
});

//Criamos uma tarefa 'default' que vai rodar quando rodamos `gulp` no projeto
gulp.task('default', ['distJs', 'distLess']);