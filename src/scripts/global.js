/*
  constants and global functions
*/

var JSON_FILE = '/books_schema.json';

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
var loadJSON = function(url, callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", url, true);
    xobj.onreadystatechange = function(responseText){
        if(xobj.readyState == 4 && xobj.status == "200"){
            var content = JSON.parse(xobj.responseText);
            callback.call(this, content);
        }
        console.log(111);
    };
    xobj.send(null);
};

// loadJSON(JSON_FILE); // for some reason returns 404

var $categoryTemplate = $('.category-template')
    .clone()
    .removeClass('category-template')
    .addClass('category');

function addCategoryFor(v) {
    $categoryTemplate
        .clone()
        .find('.title-link').html(v.title).end()
        .appendTo('.categories');
}

var $cardTemplate = $('.card-template')
    .clone()
    .removeClass('card-template')
    .addClass('card');

function addCardFor(v) {
    $cardTemplate
        .clone()
        .find('.card-image').attr({'src': v.image, 'title': v.title}).end()
        .find('.card-title').html(v.title).end()
        .find('.card-teaser').html(v.teaser).end()
        .appendTo('.cards');
}

$.getJSON('books-schema.json', function(json) {
    // categories
    var categories = Object.keys(json.entities.categories[0]).map(function(key) {
        return json.entities.categories[0][key];
    }).map(function(v) {
        addCategoryFor(v);
    });

    // cards
    json.data.map(function(v) {
        addCardFor(v);
    });
});
