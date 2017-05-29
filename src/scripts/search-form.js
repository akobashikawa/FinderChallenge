$('.search-form').on('submit', function(event) {
    event.preventDefault();
    var q = $('.search-input').val();
    if ( /[$%\/\\]/.test(q) ) {
        console.log('invalid char in search');
        return false;
    }
    console.log('search string ok');
    $.getJSON('books-schema.json', function(json) {
        var results = json.data.filter(function(item) {
            return item.title.indexOf(q) !== -1;
        });
        console.log(results);
    });
});

function searchForm(event){
}
