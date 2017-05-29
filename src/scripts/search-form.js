$('.search-form').on('submit', function(event) {
    event.preventDefault();
    var q = $('.search-input').val();
    if ( /[$%\/\\]/.test(q) ) {
        console.log('invalid char in search');
        return false;
    }
    console.log('search string ok');
});

function searchForm(event){
}
