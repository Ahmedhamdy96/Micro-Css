const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass")),
  terser = require("gulp-terser"),
  pug = require("gulp-pug"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  browsersync = require("browser-sync").create();

/* ----------------------
---- sass -> css -------- 
------------------------- */
function css(done) {
  src(`./src/scss/main.scss`, { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer({ browsers: ["last 5 version"] })]))
    .pipe(postcss([cssnano()]))
    .pipe(dest("./dist/css", { sourcemaps: "." }));
  done();
}

/* ----------------------
---- pug -> html -------- 
------------------------- */
function html(done) {
  src("./src/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("./dist"));
  done();
}

/* ----------------------
---- Js -> min.Js ------- 
------------------------- */
function js(done) {
  src("./src/js/main.js").pipe(terser()).pipe(dest("dist/js"));
  done();
}

/* ----------------------
---- Browsersync -------- 
------------------------- */
function browsersyncServe(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/",
    },
  });
  done();
}

function browsersyncReload(done) {
  browsersync.reload();
  done();
}

/* ----------------------
---- watch -------------- 
------------------------- */
function watchTask(done) {
  watch(
    ["./src/pug/*.pug", "./src/scss/**/*.scss", "./src/js/**/*.js"],
    series(html, js, css, browsersyncReload)
  );
  done();
}

// Default Gulp task
exports.default = series(css, js, browsersyncServe, watchTask);
