const gulp = require("gulp");
const sass = require("gulp-sass");
const ts = require("gulp-typescript");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");

gulp.task("scss", () => {
  return gulp
    .src("./src/scss/**.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("../server/dist/public"));
});

const tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", function() {
  return gulp
    .src("./src/ts/**.ts")
    .pipe(tsProject())
    .pipe(uglify())
    .pipe(gulp.dest("../server/dist/public"));
});

gulp.task("html", () => {
  return gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("../server/dist/public"));
});

gulp.task("img", () => {
  return gulp
    .src("./src/img/**")
    .pipe(imagemin())
    .pipe(gulp.dest("../server/dist/public/img"));
});

gulp.task("watch", () => {
  gulp.watch("./src/scss/**.scss", ["scss"]);
  gulp.watch("./src/ts/**.ts", ["ts"]);
  gulp.watch("./src/**.html", ["html"]);
  gulp.watch("./src/img/**", ["img"]);
});

gulp.task("default", ["ts", "scss", "html", "img"]);
