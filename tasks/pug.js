var pug = require('pug');
var minify = require('html-minifier').minify;

var fs = require('fs');
var data = JSON.parse(fs.readFileSync('src/pug/data.json', 'utf8'));

var options = {
    data: data
};

var html = pug.renderFile('./src/pug/index.pug', options);

html = minify(html, {
    //removeAttributeQuotes: true
});

fs.writeFile("./build/index.html", html, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 