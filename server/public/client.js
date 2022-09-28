console.log('bunger');

$(document).ready(onReady);

function onReady(){
    console.log('Ready and waiting');

    loadInComments();
    loadInFirstComment();
    $('#secretMessage').click(secretMaker);

    $('#inputComment').on('submit', submitComment);
}


function submitComment(event) {
    event.preventDefault();
    console.log('Someone is trying to comment');
    let newComment = {
        message: $('#incomingComment').val()
    };

    $.ajax({
        ulr: '/comments',
        method: 'POST',
        data: newComment
    })
    .then(response => {
        console.log('sent data', response);
    })
    .catch(err =>{
        console.log('error not found', err);
    })
}

// Comment grabber (state)
function loadInComments(){
    console.log('Where are the comments?');

    $.ajax({
        url: '/comments',
        method: 'GET'
    })
        .then((response) => {
            //coding in here!
            console.log('GET /comments', response);
            for(let comment of response){
                $('#comments').append(`
                <li>${comment}</li>
                `);
            }
        //     $('body').append(`
        //     <ul>
        //         <li>${response[0]}</li>
        //         <li>${response[1]}</li>
        //         <li>${response[2]}</li>
        //     </ul>            
        // `);

        })
        .catch((err)=>{
            console.log('GET /comments error: Ape Attack 🦍 🦍 🦍', err);
        });

}

function loadInFirstComment(){
    $.ajax({
        url: '/comments/first',
        method: 'GET'
    })
        .then((response)=>{
            console.log('GET /comments/first', response);
            $('body').append(`
            <h1>${response}</h1>
            `);
        })
        .catch((err)=>{
            console.log('GET /comments/first error: Fungus Folley 🍄 🍄 🍄', err);
        });
        // $('#secretMessage').click(secretMaker);
}

function secretMaker() {
    $.ajax({
        url: '/secret-message',
        method: 'GET'
    })
        .then((response)=>{
            $('body').empty();
            $('body').append(`
                <h1>${response[0]}</h1>
            `);
        })
        .catch((err)=>{
            console.log('NASA is listening, message aborted');
        })
    }

