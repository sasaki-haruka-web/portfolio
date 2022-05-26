const gulp = require("gulp");

var sass = require("gulp-sass")(require("sass"));
const sassglob = require("gulp-sass-glob");

const paths = {
  styles: "./assets/scss/**/*.scss",
  _styles: "!./assets/scss/**/_*.scss",
};


// Styles
function styles() {
  return (
    gulp
      .src([paths.styles, paths._styles])
      .pipe(sassglob())
      .pipe(
        sass({
          // outputStyle: "compressed",
          // outputStyle: 'expanded'
        })
      )
      .pipe(gulp.dest("./assets/css/"))
  );
}

// Watch
function watch() {
  gulp.watch(paths.styles, styles);
}

gulp.task("default", gulp.series(gulp.parallel(styles, watch)));
gulp.task("build", gulp.series(gulp.parallel(styles)));
