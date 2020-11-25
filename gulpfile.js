const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//compile scss into css
function style() {
  // where my scss file is
  return (
    gulp
      .src("./scss/**/*.scss")
      // passing file throuhg sass compiler
      .pipe(sass())
      // where the compiled CSS is saved
      .pipe(gulp.dest("./css"))
      // changed to all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;
