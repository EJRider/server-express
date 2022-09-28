console.log('bunger');

$(document).ready(onReady);

function onReady(){
    console.log('Ready and waiting');

    loadInComments();
}


// Comment grabber (state)
function loadInComments(){
    console.log('Where are the comments?');

    $.ajax({
        url: '/comments',
        method: 'GET'
    });

}