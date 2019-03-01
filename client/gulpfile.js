const gulp = require("gulp");
const sass = require("gulp-sass");
const ts = require("gulp-typescript");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const clean = require('gulp-clean');

gulp.task("scss", () => {
  return gulp
    .src("./src/scss/**.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("../server/dist/public"));
});

const tsProject = ts.createProject("tsconfig.json");

gulp.task("clean", () => {
  return gulp.src('../server/dist')
  .pipe(clean({ read: false, force: true }))
})

gulp.task("ts", () => {
  return (
    gulp
      .src("./src/ts/**.ts")
      .pipe(tsProject().on("error", console.log))
      .pipe(uglify())
      .pipe(gulp.dest("../server/dist/public"))
  );
});

gulp.task("html", () => {
  return gulp
    .src("./src/views/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("../server/dist/public"));
});

gulp.task("img", () => {
  return gulp
    .src("./src/img/**")
    .pipe(imagemin())
    .pipe(gulp.dest("../server/dist/public/img"));
});


gulp.task("default", gulp.series(["clean", "ts", "scss", "html", "img"]));


gulp.task("watch", gulp.series(['default'], () => {
  gulp.watch("./src/scss/**.scss", gulp.series(["scss"]));
  gulp.watch("./src/ts/**.ts", gulp.series(["ts"]));
  gulp.watch("./src/views/**", gulp.series(["html"]));
  gulp.watch("./src/img/**", gulp.series(["img"]));
}));
