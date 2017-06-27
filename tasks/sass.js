var sass = require('node-sass');

var fs = require('fs');

var result = sass.renderSync({
    file: "./src/sass/styles.scss"
});

fs.writeFile("./build/css/styles.css", result.css, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 