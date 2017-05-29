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

var $cardTemplate = $('.card-template')
    .clone()
    .removeClass('card-template')
    .addClass('card');

function addCardFor(v, $cardTemplate) {
    $cardTemplate
        .clone()
        .find('.card-image').attr({'src': v.image, 'title': v.title}).end()
        .find('.card-title').html(v.title).end()
        .find('.card-teaser').html(v.teaser).end()
        .appendTo('.cards');
}

$.getJSON('books-schema.json', function(json) {
    var results = json.data.map(function(v, i) {
        addCardFor(v, $cardTemplate);
    });
});
